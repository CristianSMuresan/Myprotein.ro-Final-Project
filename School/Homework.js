// Exercitiu 1 (Array)

var oddValues = 0;
var evenValues = 0;
var array = [5,6,12,14,15,17,33,41,60,63,99,100,105];

for (i = 0; i < array.length; i ++)
{
    if (array[i] % 2 === 0) 
    {
  	evenValues ++;
    }
    else
    {
  	oddValues ++;
    }
}
console.log("Even values: " + evenValues);
console.log("Odd values: " + oddValues);


// Exercitiu 2 (Strings)

var string1 = "happy";
var string2 = "testing";
strings = string1 +" "+  string2;

console.log((strings).toUpperCase());


// Exercitiu 3.1 (Highest number)
var n1 = 3;
var n2 = 5;

if(n1 > n2){
	console.log(n1 + " is the highest number");
}
else if(n1 == n2){
	console.log("Numbers are equal");
}
else{
	console.log(n2 + " is the highest number");
}

// Exercitiu 3.2 (Average numbers)
var n1 = 3;
var n2 = 5;
var n3 = 4
var sum = (n1+n2+n3);

  var	avg = (sum) / 3;
  console.log("avg = " + avg);


  // Exercitiu 3.3 (N. Factorial)

var n = 8;
var factorial = 1;
var i = 1;

while  (i <= n){
	factorial = factorial * i;
	i ++;
}
console.log("8 factorial = " + factorial);


// Exercitiu 3.4 (Max number from an array)

var list = [1,5,7,33,41,26,2,20,12];
var max = 0;
var current = 0;
for (i = 0; i <= list.length; i ++){
	if (list[i] > max){
  	max = list[i];
  }
  console.log("max is "+ max);
}


// Exercitiu 4 (Sex and date of birth)

var cnp = '1861129654896';
var i = cnp.substring(0);
var female = 0;
var male = 0;

for (i = 1; i <= 6; i ++)
{
        if (i % 2 === 0)
        {
            console.log("sex = "+"Female"+ "; Dob: Year/Month/Day = "+ cnp.substring(1,7));
        }
        else 
        {
            console.log("sex = "+"Male"+ "; Dob: Year/Month/Day = "+ cnp.substring(1,7));
        }
}