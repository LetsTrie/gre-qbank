import shuffle from "../utils/shuffle";
import gregmat from "./gregmat";
import nova from "./nova";
import _500GreMathFlashCards from "./500GreMathFlashCards";

export const questionBank = shuffle([
  ...gregmat,
  ...nova,
  ..._500GreMathFlashCards,
]);
