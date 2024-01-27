import { Container } from "@mui/material";
import { LatexBlock } from "../../components/LatexBlock";
import { noteSections } from "./data";
import _5lbBook from "../../assets/books/Manhattab 5Lb (Five Pound) .pdf";

export const Notes = () => {
  return (
    <Container className="pb-5">
      {noteSections.map((section) => (
        <>
          <h2 className="text-4xl font-bold py-5">{section.headerText}</h2>
          <ol className="list-disc ps-8 ms-5">
            {section.notes.map((listItem, index) => (
              <li
                key={index}
                style={{ textAlign: "justify", lineHeight: 1.5 }}
                className="text-xl"
              >
                <LatexBlock codes={listItem.latexCodes} fontSize={"100"} />
              </li>
            ))}
          </ol>
        </>
      ))}
      <div>
        <h2 className="text-4xl font-bold py-5">Books</h2>
        <ol className="list-disc ps-8 ms-5">
          <li>
            <a href={_5lbBook} target="_blank">
              5 lb. Book of GRE Practice Problems Problems
            </a>
          </li>
        </ol>
      </div>
    </Container>
  );
};
