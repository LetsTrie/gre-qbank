import { ILatexCodes } from "../models";

export const formatLatexCode = (...codes: string[]): ILatexCodes => {
  return codes.map((code) => {
    if (code.startsWith("$") && code.endsWith("$")) {
      return { content: code.slice(1, -1), type: "latex" };
    }
    if (code.startsWith("#") && code.endsWith("#")) {
      return { content: code.slice(1, -1), type: "image" };
    }
    return { content: code };
  });
};
