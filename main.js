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

function correctError3() {
    var users =
        [{ firstName: 'Homer', lastName: 'Simpson' },
        { firstName: 'Marge', lastName: 'Simpson' },
        { firstName: 'Bart', lastName: 'Simpson' },
        { firstName: 'Lisa', lastName: 'Simpson' },
        { firstName: 'Maggie', lastName: 'Simpson' }];

    let usersFirstName = users.map(user => user.firstName);
    console.log(usersFirstName);
}

function useReduce4(){
    var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
    const stringReducer = (sentenceAcc, currValue) => `${sentenceAcc} ${currValue}`;
    const epicSentence = epic.reduce(stringReducer);
    console.log(epicSentence);
}

const reverseString5 = myStr => {
    let strReversed = [...myStr].reverse().join("");
    console.log(strReversed);
}

/*Reemplaça en el següent bloc de codi la promesa per async/await:
NOTA: funciones modificadas para que devuelvan un log
function b() {
   return new Promise((resolve, reject) => {
    //someone doing the B task
    let taskBDone = true;
    if (taskBDone){
        resolve("Task B is done");
    }else{
        reject("Task B is not done");
    }
   });
}
const doMoreWork = promiseResult => console.log(`${promiseResult} and now I am doing some more work`);
function a6() {
   b().then(value => {
   doMoreWork(value);
   });
};
*/

async function a6() {
    let b = new Promise((resolve,reject) => {
        //someone doing the B task
        let taskBDone = true;
        if (taskBDone){
            resolve("Task B is done");
        }else{
            reject("Task B is not done");
        }
    });

    const doMoreWork = promiseResult => console.log(`${promiseResult} and now I am doing some more work`);
    let result = await b;
    doMoreWork(result);
}

function forEachArray7(){
    let tasks = [
        {
           'name' : 'Start React web',
           'duration' : 120
        },
        {
           'name' : 'Work out',
           'duration' : 60
        },
        {
           'name' : 'Procrastinate on facebook',
           'duration' : 240
        }
    ];
    let tasksNames = [];
    tasks.forEach(element =>{
        tasksNames.push(element.name);
    })
    console.log("Done with forEach():");
    console.log(tasksNames);

    let tasksNames2 = tasks.map( element => element.name );
    console.log("Done with map():");
    console.log(tasksNames2);

}