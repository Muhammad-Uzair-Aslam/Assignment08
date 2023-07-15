// program # ;
// Write a js program to input week number and print week day.

var week=prompt("please enter week number");
if(week==1)
{
    console.log("Monday");
}
else if(week==2)
{
    console.log("Tuesday");
}
else if(week==3)
{
    console.log("Wednesday");
}
else if(week==4)
{
    console.log("Thursday");
}
else if(week==5)
{
    console.log("Friday");
}
else if(week==6)
{
    console.log("Saturday");
}
else
{
    console.log("sunday");
}

// program # 2
//Write a js program to input month number and print number of days in that month.

var month=prompt("please enter month number")
if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
{
    console.log("Month ",month, " has 31 days");
}
else if(month==4||month==6||month==9||month==11)
{
    console.log("Month ",month, " has 30 days");
}
else
{
    console.log("Month ",month, " has 28 or 29 days");
}

// program # 3;
//Write a js program to count total number of notes in given amount.

var amount=prompt("please Enter the amounts");
var notes=prompt("Also Enter the rupees notes which you want to know such as '10 rupees',20 rupees',50 rupees','100 rupees','500 rupees','1000 rupees','5000 rupees'")
var noOfNotes=amount/notes;
console.log("No of notes",noOfNotes);

// program # 4;
//Write a js program to input angles of a triangle and check whether triangle is valid or not.

var firstAngel=+prompt("Please Enter First angel");
var secondAngel=+prompt("Please Enter Second angel");
var thirdAngel=+prompt("Please Enter Third angel");
var totalAngel=firstAngel+secondAngel+thirdAngel;
if (totalAngel===180)
{
    console.log("Triangle is valid because Sum of all the angels are ",totalAngel);
}
else
{
    console.log("Triangle is not valid because sum of all the angel are not equal to 180");
}

// program # 5;
//Write a js program to input all sides of a triangle and check whether triangle is valid or not

var firstSide=+prompt("please enter first side of triangle");
var secondSide=+prompt("please enter second side of triangle");
var thirdSide=+prompt("please enter third side of triangle");


if ((firstSide+secondSide)>thirdSide && (secondSide+thirdSide)>firstSide && (firstSide+thirdSide)>secondSide)
{
    console.log("Triangle is valid because any two of its sides are greater than third ");
}
else
{
    console.log("Triangle is not valid because two of its sides are Not greater than third");
}

// program # 6;
//Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

var firstSide=+prompt("please enter first side of triangle");
var secondSide=+prompt("please enter second side of triangle");
var thirdSide=+prompt("please enter third side of triangle");
if((firstSide+secondSide)>thirdSide && (secondSide+thirdSide)>firstSide && (firstSide+thirdSide)>secondSide)
{
     if(firstSide===secondSide&&secondSide===thirdSide)
     {
         console.log("Triangle is Equilateral Because all the sides are of same length");
     }
     else if(firstSide===secondSide||secondSide===thirdSide||firstSide===thirdSide)
     {
        console.log("Triangle is isoscles Because any two of its sides are of same length");

     }
     else
     {
        console.log("Triangle is scalene Because all the sides are of different length");

     }

}
else
   {
         console.log("Triangle is not valid because two of its sides are Not greater than third");
   }
 
// program # 7
// Write a js program to find all roots of a quadratic equation.

var a=+parseFloat(prompt("please Enter the coefficient of x^2"));
var b=+parseFloat(prompt("please Enter the coefficient of x"));
var c=+parseFloat(prompt("please enter the constant"));
var discriminant=b*b-(4*a*c);
if(discriminant<0)
{
    console.log("no real roots")
}
else if (discriminant>0)
{
var roots=(-b+ Math.sqrt(discriminant))/(2*a);
var root=(-b- Math.sqrt(discriminant))/(2*a);

console.log(roots," and ",root, " are the roots of quadratic equation");
}

// program # 8;
//Write a js program to calculate profit or loss.

var costPrize=+prompt("please Enter cost prize of the thing");
var salePrize=+prompt("please Enter sale prize of the thing");
var profitOrLoss=salePrize-costPrize;
if(profitOrLoss>0)
{
    console.log("thing is in profit and profit of thing = ",Math.abs(profitOrLoss));
}
else{
    console.log("thing is in loss and loss of thing = ",Math.abs(profitOrLoss));
}

// program # 9;
// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


for(var i=0;i<5;i++)
{
    var marks=+prompt("Enter the number of marks");
    var subject=prompt("Enter Subject Name");
    console.log(`Marks of ${subject} is = ${marks}`)
    var percentage=marks/100*100;
    console.log(`percentage of ${subject} is = ${percentage}`)
if(percentage>=90)
{
    console.log(`${subject} got A grade`)
}
else if(percentage>=80)
{
    console.log(`${subject} got B grade`)
}
else if(percentage>=70)
{
    console.log(`${subject} got C grade`)
}
else if(percentage>=60)
{
    console.log(`${subject} got D grade`)
}
else if(percentage>=40)
{
    console.log(`${subject} has E grade`)
}
else
{
  
    console.log(`${subject} has F grade`)

}
}

// program # 10;
//Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

var basicSalary=+prompt("please Enter the Basic Salary of an employee");
if(basicSalary<=10000)
{
    var HRA=(20/100)*basicSalary;
    var DA=(80/100)*basicSalary;
    var grossSalary=basicSalary+HRA+DA;
    console.log("Gross Salary is = ", grossSalary)
}
else if(basicSalary<=20000)
{
    var HRA=(25/100)*basicSalary;
    var DA=(90/100)*basicSalary;
    var grossSalary=basicSalary+HRA+DA;
    console.log("Gross Salary is = ", grossSalary)
}
else
{
    var HRA=(30/100)*basicSalary;
    var DA=(95/100)*basicSalary;
    var grossSalary=basicSalary+HRA+DA;
    console.log("Gross Salary is = ", grossSalary)

}

//program # 11
// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

var units=+prompt("Please Enter Electricity Units...")
if(units<=50)
{
    var bill=units*0.50;
}
else if(units<=150)
{
    var bill=25+(units-50)*0.75;
}
else if( units<=250)
{
    var bill=25+75+(units-150)*1.20;
}
else
{
    var bill=25+75+120+(units-250)*1.50;
}
bill=bill+bill*0.20;
console.log("Electricity Bill is = ", bill)