// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Ashik";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generateError("An error occurred", 500);

// const userName = "Ashikur Rahman Ashik";
// console.log(userName);

const button = document.querySelector("button");

function addHandler(message: string) {
  console.log("!Clicked" + message);
}

if (button) {
  button.addEventListener("click", addHandler.bind(null, "The desired button"));
}
