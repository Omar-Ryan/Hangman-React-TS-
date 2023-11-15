const WIRE = (
  <div
    style={{
      width: "75px",
      height: "75px",
      borderRadius: "100%",
      border: "8px dashed #000",
      position: "absolute",
      top: "30px",
      right: "70px",
    }}
  />
);
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid #000",
      position: "absolute",
      top: "42px",
      right: "80px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "90px",
      background: "#000",
      position: "absolute",
      top: "110px",
      right: "110px",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "#000",
      position: "absolute",
      top: "150px",
      right: "20px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "#000",
      position: "absolute",
      top: "150px",
      right: "120px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "#000",
      position: "absolute",
      top: "190px",
      right: "28px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "#000",
      position: "absolute",
      top: "190px",
      right: "113px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);
const BODY_PARTS = [WIRE, HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
type Props = {
  numberOfGuesses: number;
};
const HangmanDrawing = ({ numberOfGuesses }: Props) => {

  // random number of unique key
  const nowDate = new Date().getTime();
  let valueN = 1;

  return (
    <div
      style={{
        position: "relative",
        width: "320px",
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses).map((ele) => (
        <span key={nowDate + valueN++}>{ele}</span>
      ))}
      <div
        style={{
          height: "30px ",
          width: "10px",
          background: "#000",
          position: "absolute",
          right: "110px",
        }}
      />
      <div
        style={{
          height: "10px ",
          width: "150px",
          background: "#000",
          marginLeft: "50px",
        }}
      />
      <div
        style={{
          height: "300px ",
          width: "10px",
          background: "#000",
          marginLeft: "50px",
        }}
      />
      <div style={{ height: "10px ", width: "120px", background: "#000" }} />
    </div>
  );
};

export default HangmanDrawing;
