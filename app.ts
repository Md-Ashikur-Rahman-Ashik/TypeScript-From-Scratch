// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Ashikur Rahman",
//   age: 19,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ashikur Rahman",
  age: 19,
  hobbies: ["Sports", "Cooking"],
  role: [2, "Author"],
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
