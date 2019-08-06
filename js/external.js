"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var userInput = prompt("What is your favorite color?");
console.log("Great," + " " + userInput + " " + 'is my favorite color too!');


// // ** Movie Rental Word Problem
var littleMermaidDaysRented = prompt("How many days did you rent the Little Mermaid?");
var brotherBearDaysRented = prompt("How many days did you rent the Brother Bear?");
var herculesDaysRented = prompt("How many days did you rent the Hercules?");
var dailyRentalRateDollars = 3;

var totalRentalCost = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * Number(dailyRentalRateDollars);

alert("Your total balance is" + "" + "$"+ totalRentalCost );


// ** Rate Calculations Word Problem
var googlePayRate = prompt("What hourly rate did Google pay you this week?");
var amazonPayRate = prompt("What hourly rate did Amazon pay you this week?");
var facebookPayRate = prompt("What hourly rate did Facebook pay you this week?");

var totalWeeklyHoursGoogle = prompt("How many hours did you work at Google?");
var totalWeeklyHoursAmazon = prompt("How many hours did you work at Amazon?");
var totalWeeklyHoursFacebook = prompt("How many hours did you work at Facebook?");


var totalPayandHoursGoogle = "Total weekly pay from Google:" + " "+ "$" + googlePayRate * totalWeeklyHoursGoogle;
var totalPayandHoursAmazon = "Total weekly pay from Amazon:" + " "+ "$" + amazonPayRate * totalWeeklyHoursAmazon;
var totalPayandHoursFacebook = "Total weekly pay from Facebook:" + " "+ "$" + facebookPayRate * totalWeeklyHoursFacebook;
alert(totalPayandHoursGoogle + "\n" + totalPayandHoursAmazon + "\n" + totalPayandHoursFacebook);

// ** Enrolling students Word Problem
var classStatus = confirm("Is your class full?");
var scheduleConflicts = confirm("Do you have any class schedule conflicts?");
var admissionStatus = (classStatus) && (scheduleConflicts);

alert("Have you been accepted into the program? " + admissionStatus);

// ** Product offer Word Problem
var premiumMember = confirm("Are you a premium member?");
var purchaseMoreThan2 = confirm("Did you purchase more than 2 products?");
var offerStatus = confirm("Is your offer valid?");

var eligibleForProductOffer = (purchaseMoreThan2 ||  premiumMember) && offerStatus ;
alert("Are you eligible for the product offer:" + " " + eligibleForProductOffer);













