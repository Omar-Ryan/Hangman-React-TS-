import styles from "./keyboard.module.css";
type Props = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWords = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:"center",
        gap: "1rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
      className={`${styles.words}`}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".5rem solid #000" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "#ff0000" : "#000",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWords;
