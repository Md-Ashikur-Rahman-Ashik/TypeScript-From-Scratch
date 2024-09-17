// let n: Number = 1;
// n = "Robb"
var isWinter = false;
// isWinter = 123;
var count = 5;
var userName = "Bran";
var names = ["John", "Rickon"];
var Starks;
(function (Starks) {
    Starks[Starks["John"] = 0] = "John";
    Starks[Starks["Bran"] = 1] = "Bran";
})(Starks || (Starks = {}));
var cat = Starks.John;
function getName() {
    return "John";
}
