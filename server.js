//concole.count()
const oranges = ["orange", "orange"];
const apples = ["just one apple"];
oranges.forEach((fruit) => {
 console.count(fruit);
});
apples.forEach((fruit) => {
 console.count(fruit);
});

//console.trace()
const function2 = () => console.trace();
const function1 = () => function2();
function1();
