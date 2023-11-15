import { useCallback, useEffect, useState } from "react";
import wordsList from "./components/wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWords from "./components/HangmanWords";
import Keyboard from "./components/Keyboard";
import "./app.css";

// get random property
const allKeys = Object.keys(wordsList);
const randomNameOfKey = allKeys[Math.floor(Math.random() * allKeys.length)];
const randomPropValue: string[] = wordsList[randomNameOfKey as keyof typeof wordsList];
// random number depend on words
const randomValueValue =
  randomPropValue[Math.floor(Math.random() * randomPropValue.length)];

function getWord() {
  return randomValueValue;
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 7;
  const isWinner = wordToGuess
    .split("")
    .every((letter: string) => guessedLetters.includes(letter));

  const addGuessesLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessesLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  });

  const activeLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "95%",
          paddingBottom: ".5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
        className="nav"
      >
        <span style={{ color: "#009688", fontWeight: "bold" }}>Hangman</span>
        <span className={isWinner || isLoser ? "show" : "hidden"}>
          {isWinner && (
            <span style={{ color: "#00aaff" }}>
              Winner-Refresh to try again
            </span>
          )}
          {isLoser && (
            <span style={{ color: "#f00" }}>Nice Try-Refresh to try again</span>
          )}
        </span>
        <span style={{ color: "#009688", fontWeight: "bold" }}>
          Type:{randomNameOfKey}
        </span>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: ".8rem",
          }}
          className="mid"
        >
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          <Keyboard
            activeLetters={activeLetters}
            inactiveLetters={incorrectLetters}
            addGuessesLetter={addGuessesLetter}
            disabled={isWinner || isLoser}
          />
        </div>
        <div style={{ maxWidth: "800px", margin: "10px auto 0px" }}>
          <HangmanWords
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
            reveal={isLoser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
