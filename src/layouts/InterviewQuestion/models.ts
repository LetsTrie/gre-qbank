export interface IQuestionBlock {
  type: "code" | "text";
  data: string;
  className?: string;
}

export type IQuestionBlocks = IQuestionBlock[];

export interface IQuestion {
  serialKey: number;
  qBlocks: IQuestionBlocks;
  source: string[];
}

export type IQuestions = IQuestion[];

export interface ITextBlock {
  text: IQuestionBlock["data"];
}

export interface ICodeBlock {
  code: IQuestionBlock["data"];
  className: IQuestionBlock["className"];
}

export interface IBlockComponent {
  question: IQuestion;
}
