import { QuestionBankType } from "../../models";
import { formatLatexCode } from "../../utils/formatLatexCode";

const makeId = (id: string) => {
  return `gregmat.algebra-${id}`;
};

const algebra: QuestionBankType = [
  {
    id: makeId("1"),
    difficulty: "Easy",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    description: {
      latexCode: formatLatexCode("$x > y$"),
    },
    columnA: {
      latexCode: formatLatexCode("$(x^2)^{100}$"),
    },
    columnB: {
      latexCode: formatLatexCode("$(y^2)^{100}$"),
    },
    answer: "D",
  },
  {
    id: makeId("2"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    description: {
      latexCode: formatLatexCode(
        "$a,b > 0$",
        "and",
        "$\\frac{a}{b}=0.4$",
        "and",
        "$\\frac{b}{a}=2.5$"
      ),
    },
    columnA: {
      latexCode: formatLatexCode("$a+b$"),
    },
    columnB: {
      latexCode: formatLatexCode("$7$"),
    },
    answer: "D",
  },
  {
    id: makeId("3"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$x$",
        "is an integer, which of the following is always a multiple of",
        "$3?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$(x-1) x (x+7)$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$(x-5) x (x+4)$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$(x-4) x (x+10)$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$(x+2) x (x+4)$"),
      },
    ],
    answers: ["A", "C", "D"],
  },
  {
    id: makeId("4"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$(n^5 - 4n - 7)$",
        "is even, what does",
        "$(-1)^n + (-1)^{n-4} + (-1)^{n-1}$",
        "equal?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$-3$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$-1$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$0$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$1$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$3$"),
      },
    ],
    answer: "B",
  },
  {
    id: makeId("5"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    description: {
      latexCode: formatLatexCode(
        "$2^x-2^y=960$",
        ", where x and y are positive integers."
      ),
    },
    columnA: {
      latexCode: formatLatexCode("$x-y$"),
    },
    columnB: {
      latexCode: formatLatexCode("$5$"),
    },
    answer: "B",
  },
  {
    id: makeId("6"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    description: {
      latexCode: formatLatexCode(
        "Eight identical machines working together can manufacture 250 bolts in 20 seconds."
      ),
    },
    columnA: {
      latexCode: formatLatexCode(
        "The number of identical machines that need to be added to manufacture 500 bolts in 10 seconds"
      ),
    },
    columnB: {
      latexCode: formatLatexCode("$16$"),
    },
    answer: "A",
  },
  {
    id: makeId("7"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    description: {
      latexCode: formatLatexCode(
        "A gardener is mixing 50 kg of fertilizer A (containing 25% Nitrogen and 33% Potassium) with 30 kg of fertilizer B (containing 34% Nitrogen and 30% Potassium)."
      ),
      fontSize: 100,
    },
    columnA: {
      latexCode: formatLatexCode(
        "The amount of additional fertilizer B (in kg) needed for the mixture to contain exactly 30% Nitrogen"
      ),
      fontSize: 100,
    },
    columnB: {
      latexCode: formatLatexCode("$40$"),
    },
    answer: "B",
  },
  {
    id: makeId("8"),
    difficulty: "Easy",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: false,
    type: "Quantitative Comparison Question",
    columnA: {
      latexCode: formatLatexCode(
        "$\\frac{3}{4} \\div \\frac{2}{5} \\times \\frac{1}{7} \\div \\frac{3}{5}$"
      ),
      fontSize: 150,
    },
    columnB: {
      latexCode: formatLatexCode(
        "$\\frac{3}{4} \\times \\frac{2}{5} \\div \\frac{1}{7} \\times \\frac{3}{5}$"
      ),
      fontSize: 150,
    },
    answer: "B",
  },
];

export default algebra;
