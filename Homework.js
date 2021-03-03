
var oddValues = 0;
var evenValues = 0;
var array = [5,6,12,14,15,17,33,41,60,63,99,100];

for(i=0; i<array.length; i++){
    if (array[i] % 2 ===0){
        evenValues++;
    }
    else{
        oddValues++;
    }
    
}
console.log("Even values: " + evenValues);
console.log("Odd values: "+ oddValues);