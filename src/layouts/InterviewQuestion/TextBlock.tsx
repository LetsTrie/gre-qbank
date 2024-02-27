import { ITextBlock } from "./models";

export const TextBlock = (props: ITextBlock) => {
  return <p className="p-0 m-0 text-justify"> {props.text} </p>;
};
