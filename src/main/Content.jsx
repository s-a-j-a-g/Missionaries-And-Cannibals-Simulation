import { useState } from "react";
import getStateColor from "../utils/getStateColor";
import Description from "../components/Description";
import Header from "../components/Header";
import { ArcherContainer, ArcherElement } from "react-archer";

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

  const checkRecursiveOrNot = (stateToCheck, currentArray) => {
    for (const state of stateArray) {
      for (const item of state) {
        if (
          item.M === stateToCheck.M &&
          item.C === stateToCheck.C &&
          item.boat === stateToCheck.boat
        ) {
          return true;
        }
      }
    }

    for (const item of currentArray) {
      if (
        item.M === stateToCheck.M &&
        item.C === stateToCheck.C &&
        item.boat === stateToCheck.boat
      ) {
        return true;
      }
    }

    return false;
  };

  const generatePossibleState = () => {
    const tempLevel = level + 1;
    const previousLevelStates = [...stateArray[level]];

    let levelArray = [];
    let childIndex = 0;

    previousLevelStates.forEach((state) => {
      if (state.isDead || state.isRecursiveState) return;

      // perform 1C
      if (!state.boat) {
        let newState = { ...state };
        newState.C = newState.C - 1;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "1C";
          // newState.parent =
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      } else {
        let newState = { ...state };
        newState.C = newState.C + 1;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "1C";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      }

      // perform 2C
      if (!state.boat) {
        let newState = { ...state };
        newState.C = newState.C - 2;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "2C";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      } else {
        let newState = { ...state };
        newState.C = newState.C + 2;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "2C";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      }

      // perform 1M 1C
      if (!state.boat) {
        let newState = { ...state };
        newState.M = newState.M - 1;
        newState.C = newState.C - 1;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "1M 1C";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      } else {
        let newState = { ...state };
        newState.M = newState.M + 1;
        newState.C = newState.C + 1;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "1M 1C";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      }

      // perform 2M
      if (!state.boat) {
        let newState = { ...state };
        newState.M = newState.M - 2;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "2M";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      } else {
        let newState = { ...state };
        newState.M = newState.M + 2;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "2M";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      }

      // perform 1M
      if (!state.boat) {
        let newState = { ...state };
        newState.M = newState.M - 1;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "1M";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
          levelArray.push(newState);
        }
      } else {
        let newState = { ...state };
        newState.M = newState.M + 1;
        newState.level = newState.level + 1;
        newState.boat = !newState.boat;
        // newState.parent = previousState;
        if (
          newState.M >= 0 &&
          newState.M <= 3 &&
          newState.C >= 0 &&
          newState.C <= 3
        ) {
          if (
            newState.M === 0 ||
            3 - newState.M === 0 ||
            (newState.M >= newState.C && 3 - newState.M >= 3 - newState.C)
          ) {
            const result = checkRecursiveOrNot(newState, levelArray);
            if (result) newState.isRecursiveState = true;
          } else {
            newState.isDead = true;
          }
          newState.transition = "1M";
          childIndex++;
          newState.id = `${state.id}${childIndex}`;
          newState.parentId = `${state.id}`;
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

      <ArcherContainer
        strokeColor="black"
        // noCurves={true}
        startMarker={true}
        endMarker={false}
      >
        <div className="level">
          {stateArray.map((items, parentIndex) => (
            <div key={parentIndex}>
              {items.map((item, childIndex) => (
                <div className="state-body" key={childIndex}>
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
                      className="state"
                      style={{ backgroundColor: getStateColor(item) }}
                    >
                      <h4 className="state-text">{`${item.M}M, ${item.C}C, ${
                        !item.boat ? 0 : 1
                      }`}</h4>
                    </div>
                  </ArcherElement>

                  <h4 className="state-text">{`${3 - item.M}M, ${
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
