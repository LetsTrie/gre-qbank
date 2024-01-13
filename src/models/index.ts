export interface ILatexCode {
  content: string;
  type?: "text" | "latex" | "image";
}

export type ILatexCodes = ILatexCode[];

interface QuestionGeneralData {
  id: string;
  source: "Nova 22/23 edition" | "GregMat" | "500GreMathFlashCards";
  difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
  category: ("Factorials" | "Factoring" | "Algebra")[];
  isPremium: boolean;
  solution?: {
    latexCode: ILatexCodes;
    fontSize?: number;
  };
}

export interface QuantitativeComparisonQuestionData
  extends QuestionGeneralData {
  type: "Quantitative Comparison Question";
  description?: {
    latexCode: ILatexCodes;
    fontSize?: number;
  };
  columnA: {
    latexCode: ILatexCodes;
    fontSize?: number;
  };
  columnB: {
    latexCode: ILatexCodes;
    fontSize?: number;
  };
  answer: string;
}

export interface MCQSelectOneQuestionData extends QuestionGeneralData {
  type: "Multiple-choice Questions — Select One Answer Choice.";
  question: {
    latexCode: ILatexCodes;
    fontSize?: number;
  };
  options: { value: string; latexCode: ILatexCodes; fontSize?: number }[];
  answer: string;
}

export interface MCQSelectManyQuestionData extends QuestionGeneralData {
  type: "Multiple-choice Questions — Select One or More Answer Choices.";
  question: {
    latexCode: ILatexCodes;
    fontSize?: number;
  };
  options: { value: string; latexCode: ILatexCodes; fontSize?: number }[];
  answers: string[];
}
// Numeric Entry Questions.

export type QuestionBankType = (
  | QuantitativeComparisonQuestionData
  | MCQSelectOneQuestionData
  | MCQSelectManyQuestionData
)[];
