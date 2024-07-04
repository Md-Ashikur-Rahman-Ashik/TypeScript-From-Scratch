// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Ashikur Rahman",
//   age: 19,
// };

const person = {
  name: "Ashikur Rahman",
  age: 19,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
