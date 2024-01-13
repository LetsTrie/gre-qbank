import { InlineMath } from "react-katex";
import { defaults } from "../constants";
import { ILatexCodes } from "../models";
import React from "react";

export interface ILatex {
  fontSize?: string;
  codes: ILatexCodes;
  className?: string;
}

export const LatexBlock = ({
  fontSize = defaults.latexFontSize,
  codes,
  className = "",
}: ILatex) => {
  return (
    <div style={{ fontSize }} className={`${className}`}>
      {codes.map((code, index) => (
        <React.Fragment key={index}>
          {(!code.type || code.type === "text") && (
            <span>
              {code.content.split("\n").map((item, key) => (
                <React.Fragment key={key}>
                  {key !== 0 && <br />}
                  {item}
                </React.Fragment>
              ))}
            </span>
          )}{" "}
          {code.type === "image" && (
            <div className="flex justify-center items-center pb-3">
              <img src={code.content} />
            </div>
          )}
          {code.type === "latex" && <InlineMath math={code.content} />}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};
