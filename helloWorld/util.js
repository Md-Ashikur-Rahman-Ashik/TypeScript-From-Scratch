// let n: Number = 1;
// n = "Robb"
// let isWinter: boolean = false;
// isWinter = 123;
// let count: Number = 5;
// let userName: String = "Bran";
// let names: string[] = ["John", "Rickon"];
// enum Starks {
//   John,
//   Bran,
// }
// let cat: Starks = Starks.John;
// function getName(): String {
//   return "John";
// }
// function anotherName(): void {
//   console.log("Winter is coming");
// }
// interface Stark {
//   name: String;
//   age?: Number;
// }
// function printName(stark: Stark) {
//   console.log(stark.name);
// }
// printName({ name: "Ashik" });
// printName({ label: "Montu" });
// class Stark {
//   name: string = "JavaScript";
//   saying: string;
//   static castle: string = "Winterfell!";
//   constructor() {
//     this.saying = Stark.castle;
//     this.name = "TypeScript";
//   }
//   hello(person: string) {
//     console.log("Hello " + person);
//   }
// }
// let ned = new Stark();
// ned.saying = "Winter is coming";
// console.log(Stark.castle);
// ned.hello("Robert");
// class Person {
//   name: string = "";
//   constructor(name: string) {
//     this.name = name;
//   }
//   dance() {
//     console.log(this.name + " is dancing");
//   }
// }
// let bran = new Person("Bran");
// bran.dance();
// class AwesomePerson extends Person {
//   dance() {
//     console.log("So Awesome!");
//     super.dance();
//   }
// }
// let robert = new AwesomePerson("Robert");
// robert.dance();
var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
/// <reference path="types.ts" />
var use = new Utility.useful();
console.log(use.timesTwo(9));
