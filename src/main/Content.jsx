import { useState } from "react";
import getStateColor from "../utils/getStateColor";
import Description from "../components/Description";
import Header from "../components/Header";
import { ArcherContainer, ArcherElement } from "react-archer";
import { isConstraintStatisfied, isValidState } from "../utils/constraints";
import isRecursive from "../utils/isRecursive";
import createNewState from "../utils/createNewState";

const Content = () => {
  const initialState = {
    M: 3,
    C: 3,
    boat: false,
    level: 0,
    id: "1",
    parentId: "",
    isDead: false,
    isRecursiveState: false,
    transition: "",
  };

  const [level, setLevel] = useState(0);
  const [stateArray, setStateArray] = useState([[initialState]]);

  const reset = () => {
    setLevel(0);
    setStateArray([[initialState]]);
  };

  const transitions = ["1C", "2C", "1M 1C", "2M", "1M"];

  const generatePossibleState = () => {
    const tempLevel = level + 1;
    const previousLevelStates = [...stateArray[level]];

    let levelArray = [];
    let childIndex = 0;

    previousLevelStates.forEach((state) => {
      for (const transition of transitions) {
        if (state.isDead || state.isRecursiveState) return;

        let newState = { ...state };
        if (transition === "1C") {
          if (!state.boat) newState.C = newState.C - 1;
          else newState.C = newState.C + 1;
        }
        if (transition === "2C") {
          if (!state.boat) newState.C = newState.C - 2;
          else newState.C = newState.C + 2;
        }
        if (transition === "1M 1C") {
          if (!state.boat) {
            newState.M = newState.M - 1;
            newState.C = newState.C - 1;
          } else {
            newState.M = newState.M + 1;
            newState.C = newState.C + 1;
          }
        }
        if (transition === "2M") {
          if (!state.boat) newState.M = newState.M - 2;
          else newState.M = newState.M + 2;
        }
        if (transition === "1M") {
          if (!state.boat) newState.M = newState.M - 1;
          else newState.M = newState.M + 1;
        }

        newState.level = newState.level + 1;
        newState.boat = !newState.boat;

        if (isValidState(newState)) {
          if (isConstraintStatisfied(newState)) {
            if (isRecursive(newState, levelArray, stateArray)) {
              newState.isRecursiveState = true;
            }
          } else {
            newState.isDead = true;
          }
          newState = createNewState(newState, transition, childIndex, state);
          childIndex++;
          levelArray.push(newState);
        }
      }
    });

    setStateArray((prevState) => {
      const newArray = [...prevState];
      newArray[tempLevel] = levelArray;
      return newArray;
    });

    setLevel(tempLevel);
  };

  return (
    <div>
      <Header
        generatePossibleState={generatePossibleState}
        reset={reset}
        level={level}
      />

      <Description />

      <ArcherContainer strokeColor='black' startMarker={true} endMarker={false}>
        <div className='level'>
          {stateArray.map((items, parentIndex) => (
            <div key={parentIndex}>
              {items.map((item, childIndex) => (
                <div className='state-body' key={childIndex}>
                  <ArcherElement
                    id={item.id}
                    relations={[
                      {
                        targetId: item.parentId,
                        sourceAnchor: "left",
                        targetAnchor: "right",
                        label: item.transition,
                        style: { strokeWidth: 2 },
                        startMarker: true,
                      },
                    ]}
                  >
                    <div
                      className='state'
                      style={{ backgroundColor: getStateColor(item) }}
                    >
                      <h4 className='state-text'>{`${item.M}M, ${item.C}C, ${
                        !item.boat ? 0 : 1
                      }`}</h4>
                    </div>
                  </ArcherElement>

                  <h4 className='state-text'>{`${3 - item.M}M, ${
                    3 - item.C
                  }C`}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ArcherContainer>
    </div>
  );
};

export default Content;
