function literals1(){
    let moviePoster = "anyURL"
    let movieTitle = "My Movie Title";
    var li = 
`<li>
<div class="row">
<div class="col-md-4">
<img src="${moviePoster}" height="250" alt="" />
</div><div class="col-md-8">
<h2>${movieTitle}</h2>
</div>
</div>
</li>`;
    console.log(li);
}

function arrowFunctions2(){
/*1:function multiply(num1, num2) {
return num1 * num2;
}*/
    const multiply = (num1, num2) => num1*num2;
    console.log(multiply(5, 4));

/*2: function toCelsius(fahrenheit) {
return (5/9) * (fahrenheit-32);
}*/
    const toCelsius = farhrenheit => (5/9)*(farhrenheit-32);
    console.log(toCelsius(32));

/*3: This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
} */
    const padZeros = (num, totalLen) => {
        var numStr = num.toString();
        var numZeros = totalLen - numStr.length;
        for (var i = 1; i <= numZeros; i++) {
            numStr = "0" + numStr;
        }
        return numStr;
    }
    console.log(padZeros(3,5));

/*4: function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
}*/
    const power = (base, exponent) => {
        var result=1;
        for (var i=0; i < exponent; i++) { 
            result *=base; 
        }
        return result;
    }
    console.log(power(2, 4));

/*5: function greet(who) {
    console.log("Hello " + who);
}*/
    const greet = who => console.log(`Hello ${who}`);
    greet("Silvia");
}
