const numbers = [1,5 ,11,45,65];
console.log(numbers.length);
console.log(numbers[0]);
numbers.push(98);
console.log(numbers); //add element
numbers.pop();
console.log(numbers);//delete
console.log(numbers.includes(3))

if (numbers.includes(3)){
    console.log("true")
}else{
    console.log("false")}