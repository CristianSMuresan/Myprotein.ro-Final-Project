var variable_name = 12; //numar intreg
var isLessThen = false; //boolean

if(variable_name<20)
{
    isLessThen=true;
}
else
{
    isLessThen = false;
}

if (isLessThen == true)
{
    console.log("Number is less than 20");
}
else
{
    console.log("Number is not less than 20");
}

var indexWhile = 1;
var sumWhile = 0;
while(indexWhile<=5)
{
    sumWhile = sumWhile + indexWhile;
    indexWhile = indexWhile + 1;
}
console.log("SumWhile is:" + sumWhile);

var indexFor ;
var sumFor ;
for(indexFor=0; indexFor<=5; indexFor++)
{
    sumFor = sumFor + indexFor;
}
console.log("SumFor is:" + sumFor);


