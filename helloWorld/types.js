// let n: Number = 1;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "";
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var bran = new Person("Bran");
bran.dance();
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        console.log("So Awesome!");
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var robert = new AwesomePerson("Robert");
robert.dance();
