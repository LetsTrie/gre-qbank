import { QuestionBankType } from "../../models";
import { formatLatexCode } from "../../utils/formatLatexCode";

const makeId = (id: string) => {
  return `nova.factoring-${id}`;
};

const questionBank: QuestionBankType = [
  {
    id: makeId("1"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Factoring"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    columnA: {
      latexCode: formatLatexCode("$\\frac{2^{20} - 2^{19}}{2^{11}}$"),
      fontSize: 140,
    },
    columnB: {
      latexCode: formatLatexCode("${2^{8}}$"),
      fontSize: 110,
    },
    answer: "C",
  },
  {
    id: makeId("2"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Factoring"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$x \\neq 2$",
        "then",
        "$\\frac {8x^2 - 32}{4x + 8} = ?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$2(x - 2)$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$2(x - 4)$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$8(x + 2)$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$(x - 2)$"),
      },
    ],
    answer: "A",
  },
  {
    id: makeId("3"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Factoring"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    columnA: {
      latexCode: formatLatexCode("$4.2(3.3)$"),
    },
    columnB: {
      latexCode: formatLatexCode("$4(3.3) + 0.2(3.3)$"),
    },
    answer: "C",
  },
  {
    id: makeId("4"),
    difficulty: "Medium",
    source: "Nova 22/23 edition",
    category: ["Factoring"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$x–3 = 10/x$",
        "and",
        "$x > 0,$",
        "then what is the value of",
        "$x?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$-2$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$-1$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$3$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$5$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$10$"),
      },
    ],
    answers: ["D"],
  },
  {
    id: makeId("nova.22-23.Factoring.Ex-5"),
    difficulty: "Medium",
    source: "Nova 22/23 edition",
    category: ["Factoring"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    description: {
      latexCode: formatLatexCode("$n = 10^4 + (2 * 10^2)$"),
    },
    columnA: {
      latexCode: formatLatexCode("Number of zeros in", "$n$"),
    },
    columnB: {
      latexCode: formatLatexCode("Number of zeros in", "$n^2$"),
    },
    answer: "B",
  },
];

export default questionBank;
