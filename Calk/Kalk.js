"use strict"
var values = [16, 2332321, 34343, 123, 434, 123, 77];
var operators = ["+", "-", "+", "/", "-", "+"];

console.log(values);

var result = 0; 
var i = 0;


//Фунция добавления
var sum = function(){
     values[i+1] = values[i] + values[i+1];    
};
//Функция вычитания
var min = function(){
     values[i+1] = values[i] - values[i+1];
};
//Фнкция деления
var dil = function(){
     values[i+1] = values[i] / values[i+1];  
};


for (i = 0; i < operators.length; i++) {
switch (operators[i]) {
    case "+":
    sum();
        break;
    case "-":
    min(); 
        break;
    case "/":
    dil();
        break;
}
    result = values[i+1];
    //document.write(values[i+1] + "</br>");
    //console.log(result);
};

alert(result);



