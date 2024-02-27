import { IQuestions } from "./models";

export const questions: IQuestions = [
  {
    serialKey: 1,
    qBlocks: [
      {
        type: "code",
        data: `const mySet = new Set([{ a: 1 }, { a: 1 }]);
const result = [...mySet];
console.log(result);`,
      },
      {
        type: "text",
        data: "What will happen when the provided code is executed? Please explain how the Set data structure works in JavaScript. Additionally, analyze the output of the code and provide a detailed explanation.",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 2,
    qBlocks: [
      {
        type: "code",
        data: `const notifications = 1;
console.log('You have \${notifications} 
    notification: \${notifications !== 1 && 's'}');`,
      },
      {
        type: "text",
        data: "Analyze the output of the code and explain why it produces that output.",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 3,
    qBlocks: [
      {
        type: "code",
        data: `function Dog(name) {
    this.name = name;
    this.speak = function() {
        return 'woof';
    };
}

Dog.prototype.speak = function() {
    return 'arf';
};

const pogo = new Dog('Pogo');
console.log(pogo.speak());`,
      },
      {
        type: "text",
        data: "Explain the provided code. What is the concept of prototype in JavaScript and when is it used? Analyze the output of the code and explain why it produces that output.",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 4,
    qBlocks: [
      {
        type: "code",
        data: `function printSomething() {
  console.log(something);
}

function invokePrintSomething() {
  var something = 3;
  printSomething();
}
var something = 2;
invokePrintSomething();`,
      },
      {
        type: "text",
        data: "What will be the output of the provided code? Explain each scenario, including hoisting. Additionally, discuss if there would be any difference if `let` were used instead of `var`.",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 5,
    qBlocks: [
      {
        type: "code",
        data: `const x = await A(); // 5s
const y await B(); // 2s
const z await C(y); // 3s
return {x, z};`,
      },
      {
        type: "text",
        data: "Explain how this code executes asynchronously. Additionally, discuss possible optimizations for this code. What is the minimum time by which we can optimize this code? Please provide optimized code.",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 6,
    qBlocks: [
      {
        type: "text",
        data: "Given an integer array, count the number of elements that occur more than once.",
      },
      {
        type: "text",
        data: "Input: [1, 2, 2, 4, 4, 4]",
      },
      {
        type: "text",
        data: "Output: 2 (Non-unique items are 2 and 4)",
      },
      {
        type: "code",
        data: `const countNonUniqueItems = arr => {
    // Write your solution here
};`,
        className: "mt-5",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 6,
    qBlocks: [
      {
        type: "code",
        data: `const arr1 = [{ firstName: "James" }];
const arr2 = [...arr1];
arr2[0].firstName = "Jonah";
console.log(arr1);`,
      },
      {
        type: "text",
        data: "Analyze the output of the code and explain why it produces that output.",
      },
    ],
    source: ["SuperAnnotate"],
  },
  {
    serialKey: 7,
    qBlocks: [
      {
        type: "code",
        data: `const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el));`,
      },
      {
        type: "text",
        data: "Explain the provided code. How does the `bind` function work in JavaScript? What will be the output of this code?",
      },
    ],
    source: ["SuperAnnotate"],
  },
];
