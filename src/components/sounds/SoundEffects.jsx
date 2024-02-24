import CorrectSound from "./correct-sound.mp3";
import WrongSound from "./wrong-sound.mp3";
import ReadySound from "./ready-sound.mp3";

export const correctAnswer = () => {
     const audio = new Audio(CorrectSound);
    audio.play();
  };
  export const wrongAnswer = () => {
     const audio = new Audio(WrongSound);
    audio.play();
  };
  export const ready = () => {
     const audio = new Audio(ReadySound);
    audio.play();
  };