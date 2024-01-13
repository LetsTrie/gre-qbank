import { McqOption } from "../McqOption";

export const ComparisonOption = ({
  value,
}: {
  value: "A" | "B" | "C" | "D";
}) => {
  let message = "";
  if (value === "A") message = "Quantity A is greater.";
  if (value === "B") message = "Quantity B is greater.";
  if (value === "C") message = "The two quantities are equal.";
  if (value === "D") {
    message =
      "The relationship cannot be determined from the information given.";
  }
  return <McqOption className="text-xl">{message}</McqOption>;
};
