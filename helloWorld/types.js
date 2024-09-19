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
var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "JavaScript";
        this.saying = Stark.castle;
        this.name = "TypeScript";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    Stark.castle = "Winterfell!";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is coming";
// console.log(Stark.castle);
ned.hello("Robert");
