import { QuestionBankType } from "../../models";
import { formatLatexCode } from "../../utils/formatLatexCode";

const makeId = (id: string) => {
  return `nova.diagnosticTest-${id}`;
};

const questionBank: QuestionBankType = [
  {
    id: makeId("1"),
    difficulty: "Medium",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode("$-2^{4} - (x^2 - 1)^2 = $"),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$-x^4 + 2x^2 + 15$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$-x^4 - 2x^2 + 17$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$-x^4 + 2x^2 - 17$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$-x^4 + 2x^2 - 15$"),
      },
    ],
    answer: "C",
  },
  {
    id: makeId("2"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode("$8x^2 - 18 = $"),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$2(2x+3)(2x-3)$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$2(4x+3)(4x-3)$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$2(2x+9)(2x-9)$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$2(4x+3)(x-3)$"),
      },
    ],
    answer: "A",
  },
  {
    id: makeId("3"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "How many ounces of water must be added to a 30-ounce solution that is 40 percent",
        "alcohol to dilute the solution to 25 percent alcohol?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$9$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$10$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$15$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$18$"),
      },
    ],
    answer: "D",
  },
  {
    id: makeId("4"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "A unit square is circumscribed about a circle. If the circumference of the circle is",
        "qπ, what is the value of q?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$1$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$2$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$\\pi$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$2\\pi$"),
      },
    ],
    answer: "A",
    solution: {
      latexCode: formatLatexCode(
        "Since the unit square is circumscribed about the circle,",
        "the diameter of the circle is 1 and the radius is",
        "$r = \\frac{1}{2}. \\newline$",
        "Now, the circumference of a circle is given by the formula",
        "$2 \\pi r. \\newline$",
        "For this circle, the formula becomes",
        "$2\\pi \\left(\\frac{1}{2}\\right) = \\pi. \\newline$",
        "We are told that the circumference of the circle is qπ. Setting these two expressions equal",
        "yields",
        "$\\pi = q\\pi. \\newline$",
        "Dividing both sides of this equation by π yields",
        "$1=q. \\newline$",
        "The answer is (A)."
      ),
    },
  },
  {
    id: makeId("4"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "For which values of x is the following inequality true:",
        "$x^2 < 2x.$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$x < 0$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$0 < x < 2$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$-2 < x < 2$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$x < 2$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$x > 2$"),
      },
    ],
    answer: "B",
    solution: {
      latexCode: formatLatexCode(
        "Let's solve the given inequality:",
        "$x^2 < 2x$",
        "\nSubtract 2x from both sides:",
        "$x^2 - 2x < 0$",
        "\nFactor the expression:",
        "$x(x - 2) < 0$",
        "\nNow, we can analyze the sign of the inequality based on the critical points, which are x = 0 and x = 2.\n",
        "Create a sign chart with intervals (-∞, 0), (0, 2), and (2, ∞):\n",
        "In the interval (-∞, 0), both x and (x - 2) are negative, so the product is positive.\n",
        "In the interval (0, 2), x is positive, but (x - 2) is negative, so the product is negative.\n",
        "In the interval (2, ∞), both x and (x - 2) are positive, so the product is positive again.\n",
        "Therefore, the solution to the inequality is in the interval (0, 2).\n"
      ),
    },
  },
  {
    id: makeId("5"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "#./images/image-1.png#",
        "In the figure above, triangle ABC is isosceles with base AC. If x = 60˚, then AC = ??"
      ),
      fontSize: 100,
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$2$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$3$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$4$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$\\frac{14}{3}$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$\\sqrt {30}$"),
      },
    ],
    answer: "C",
  },
  {
    id: makeId("6"),
    difficulty: "Easy",
    source: "Nova 22/23 edition",
    category: ["Algebra"],
    isPremium: false,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "#./images/image-2.png#",
        "What is the area of the triangle above?"
      ),
      fontSize: 100,
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$20$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$24$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$30$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$54$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$64$"),
      },
    ],
    answer: "D",
  },
];

export default questionBank;
