import styles from "./keyboard.module.css";

type Props = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessesLetter: (letter: string) => void;
  disabled?: boolean;
};

const AB = "abcdefghijklmnopqrstuvwxyz";
const key = AB.split("");

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessesLetter,
  disabled = false,
}: Props) => {
  return (
    <div
      className={`${styles.keyboard}`}
      style={{
        display: "flex",
        flexFlow: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: ".25rem",
        marginTop: "1rem",
      }}
    >
      {key.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessesLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isActive || isInactive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
