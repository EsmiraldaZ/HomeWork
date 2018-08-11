function format(data, type) {
   if(type=="number"){
    format = function(){
    return Number(data);
    }
} else if (type == "string"){
    format = function(){
    return String(data);
    }
} else if (type == "boolean"){
    format = function(){
    return Boolean(data);
    }
} else return data;
    }
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number";

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format());

originFormat(true, "string");
console.log(format()); // "true";
console.log(typeof format()); // "string";

// Напишите рекурсивную функцию digitSum(k), которая находит сумму цифр
// целого числа k, не используя циклы.

function digitSum(k){
    if(k>0){
        k=k%10 + digitSum(Math.floor(k/10));
    }
        return k
    }
    console.log(digitSum(57));
// Задание №1. Условные конструкции
// Дано целое число. Если оно является положительным, то прибавьте к нему 1;
// если отрицательным, то вычтите из него 2; если нулевым, то замените его на 10.
// Выведите полученное число.

var x = 0
if (x%2==0){
	console.log(x=x+1);
} else if (x<0){
    console.log(x-=2);
} else if (x=0);{
	console.log(10);
}


// Допишите код, чтобы функция createArrayIterator() возвращала функцию-
// перечислитель для массива, который задается через параметр array.

function createArrayIterator(array) {
var arr = []
var i = 0
return function itr(){
	return array[i++];
}
}
var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined