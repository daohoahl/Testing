var myString = "   Hung dep trai, Hung cao to, Hung hoc gioi, Hung thong minh  ";

myString = myString.trim();

console.log(myString.replace(/Hung/g, "Hung Dao"));

console.log(myString.toUpperCase());

var languages = "Javascript, Php, Ruby";

console.log(languages.split(', '));

console.log(typeof languages.charAt(0));

function run(title) {
    var language = title.slice(4, 14);
    var rest = title.slice(-6);
    return `Language is ${language} and rest is ${rest}`;
}
var title = 'Học Javascript tại F8';
console.log(run(title));