import { Fragment } from "react";
import { CodeBlock } from "./CodeBlock";
import { TextBlock } from "./TextBlock";
import { questions } from "./data";
import { IBlockComponent } from "./models";
import { websiteLink } from "./websiteLink";

const BlockComponent = (props: IBlockComponent) => {
  return (
    <div className="p-4 pe-5 pb-5 border-2 border-black-400 rounded-xl">
      <div className="mb-5">
        {props.question.source.map((src, index) => (
          <span
            key={index}
            className="bg-blue-600 px-4 py-2 rounded text-white text-md cursor-pointer"
            onClick={() => window.open(websiteLink[src], "_blank")}
          >
            {src}
          </span>
        ))}
      </div>
      <p className="m-0 p-0 underline-offset-4 font-bold pb-5 underline">
        Question {props.question.serialKey}
      </p>

      {props.question.qBlocks.map((block, index) => (
        <Fragment key={index}>
          {block.type === "code" && (
            <CodeBlock code={block.data} className={block.className} />
          )}
          {block.type === "text" && <TextBlock text={block.data} />}
        </Fragment>
      ))}
    </div>
  );
};

export const InterviewQuestion = () => {
  return (
    <div className="p-3 m-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
        {questions.map((data, index) => (
          <BlockComponent question={data} key={index} />
        ))}
      </div>
    </div>
  );
};
