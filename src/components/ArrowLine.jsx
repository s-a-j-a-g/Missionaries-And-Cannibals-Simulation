const ArrowLine = () => {
  return (
    <svg width="300" height="100" style={{ position: "absolute" }}>
      <defs>
        <marker
          id="arrow"
          markerWidth="13"
          markerHeight="13"
          refx="2"
          refy="6"
          orient="auto"
        >
          <path d="M2,2 L2,11 L10,6 L2,2" style={{ fill: "black" }} />
        </marker>
      </defs>

      <path
        d="M30,150 L100,50"
        style={{
          stroke: "black",
          strokeWidth: "1.25px",
          fill: "none",
          markerEnd: "url(#arrow)",
        }}
      />
    </svg>
  );
};

export default ArrowLine;
