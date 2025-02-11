//Determine of positive and negative number...

let number = 278;
if (number>0){
    console.log("The number is postive" )
}
else if (number<0){
    console.log("The number is negative")
}

let number1 = -22;
if (number1>0){
    console.log("The number is postive")
}
else if (number1<0){
    console.log("The number is negative")
}

//Determine Even or odd number....
 
let number2 = 62;
if (number2%2==0){
    console.log("This is an Even number")
}

else {
    console.log("This is an odd number")
}

let number3 = 67;
if (number3%2==0){
    console.log("This is an even number")
}

else{
    console.log("This is an odd number")
}

//To find maximum between two numbwrs....67 and 89

let number4 = 67;
let number5 = 89;
if (number4>number5){
    console.log("This is maximum number")
}
else {
    console.log("This is minimum number")
}

//To Find maxium between two number....45 and 50

if (50>45){
    console.log("50 is maxium number")
}

else{
    console.log("45 is a maxium number")
}

//write a programme to find maxium between three number...30, 45, 60

let number6 = 30;
let number7 = 45;
let number8 = 60;

if (number8>number7){
    console.log("60 is maximum number")
}
else if (number7>number6){
    console.log("45 is maxium number");
}
else {
    console.log("30 is maxium number")
}

//Write a programme letter grade based.....
/*
let score = 67;
if (score >= 80){
    console.log("Grade: A+")
}
else if (score >=70){
    console.log("Grade: A")
}
else if(score >=60){
    console.log("Grade: A-")
}
else if(score >= 50){
    console.log("Grade: B")
}
else if(score >= 40){
    console.log("Grade: C")
}
else if(score >= 33){
    console.log("Grade: D")
}
else{
    console.log("Grade: F")
}*/

let score = 123;
let grade;
if(score>100){
    grade = "Invalid "
}
else if(score<0){
    grade = "Invalid"
}
else if (score >= 80){
    grade ="A+";
}
else if (score >=70){
    grade ="A"
}
else if(score >=60){
    grade ="A-"
}
else if(score >= 50){
    grade ="B"
}
else if(score >= 40){
    grade ="C"
}
else if(score >= 33){
    garde ="D"
}
else{
    grade ="F"
}
console.log("Grade "+ grade)


//Calculate the ticket price based on age...

let age = 5;
let ticketPrice;
if (age <= 6){
    ticketPrice = 5000;
}
else if (age <= 12){
    ticketPrice = 8000;
}
else if (age <=18){
    ticketPrice = 10000 ;
}
else {
    ticketPrice = 12000 ;
}
console.log("Ticket price: "+ticketPrice)

//calculate a discount based on the purchase amount...

let purchaseAmount = 80;
let discount;
if (purchaseAmount >= 100){
    discount = 20;
}
 else if (purchaseAmount >= 50){
    discount = 10;
 }
 else {
    discount = 0;
 }
 console.log("Discount "+discount+"%")


 //Calculates Body muss index(BMI)....

 let weight = 62;
 let height = 1.75;
 let bmi = weight / (height * height)
 let category;

 if (bmi < 18.5){
    category = "Underweight"
 }
 else if(bmi < 24.9){
    category = "Normalweight"
 }
 else {
    category = "Overweight"
 }
 console.log("BMI: "+bmi.toFixed(2))
 console.log("Category: "+ category)

//Calculate between three number....

let num1 = 445;
let num2 = 80;
let num3 = 251;


if (num1 > num2 && num1>num3){
    console.log("num1 is maxium number")
}
 else if (num2>num1 && num2>num3){
    console.log("num2 is maximum number")
 }
 else{
    console.log("num3 is maxium number")
 }
//Print the number form 0 to 15

 for (var i = 3; i <= 12; i++) {
    console.log("Value of i is: " + i);
 }

 //print the odd number fron 7 t0 31..

 for (let i = 7; i <= 31; i++){
    if (i % 2 != 0){
        console.log(i);
    }
 }

 //Print the even number fron 10 to 20...

 for (let i = 10; i<=20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
 }