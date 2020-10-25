//task_1
/*let name = prompt("What is your name?");
alert('Hello' + ' ' + name);*/

//task_2
/*const year = 2020;
let age = prompt("What year of birth?");
alert('You are' + ' ' + (year - age));*/

//task_3
/*let length = prompt("Enter side length of a square?");
alert('perimetr of a square =' + ' ' + 4*length);*/

//task_4
/*let radius = prompt("Enter the radius of the circle?");
const pi = 3.1415;
alert('radius of the circle =' + ' ' + pi*Math.pow(radius, 2));*/

//task_5
/*let s = prompt("Enter the distance"),
    t = prompt("Enter time");
alert('your speed should be ' + ' ' + (s/t));*/

//task_6
/*let s = prompt("Enter the amount in dollars");
const calk = 0.86;
alert('Euro ' + ' ' + (s*calk));*/

//task_7
/*let s = prompt("Enter flash drive volume in gigabytes");
const calk = 1024;
alert('you can hold'+' ' + Math.floor((s*calk)/860) + ' ' + 'files of 860 megabytes');*/

//task_8
/*let suma = prompt("Enter the amount"),
    price= prompt("Enter the price of chocolate");
alert('you can buy' +' ' + Math.floor(suma/price) + ' ' + ' chocolates. Your rest is =' +' ' + suma%price);*/

//task_9
let n1 = prompt("Enter a three-digit number"),
n2 = 0, digit;
while(n1 > 0)
{
    digit = n1 % 10;
    n1 = n1;
    n2 = n2 * 10;
    n2 = n2 + digit;
alert('Reverse number', n2);
}

//task_10
