//let needToUpdate = 0;

//let myFirstPromise = new Promise((resolve) => {

    //setTimeOut(resolve, 2000);
//});
//myFirstPromise.then(() => {
    //console.log("This Promise was fulfilled! ")
//}).finally(()=> {console.log("We are done here.")});
//Promise.all([myFirstPromise0,myFirstPromisee1]).then((results) => {console.log(results)});

//console.log("This runs after calling the Promise!")

function convertTof(celsius) {
    let farenheit = celsius * 9/5 + 32;
    return farenheit;
}

console.log(convertToF(30));
 
let convertToC =farenheit => {
    return ((farenheit - 32) * 5) /9;
};

//console.log( convertToC( convertToC( convertToF( convertToC ( convertToF(31) ))));

let convertToTempScale = (scale, temp) => {
  if (scale === "f") {
      return convertToF(temp);
    } else if (scale === "c") {
          return convertToC(temp);
    } else {
        return NaN;
    }
  };

  console.log(convertToTempScale("c", 24));

  let convertTempCustom = (temp, equation) => {
      return equation(temp);
  };
   console.log( convertTempCustom(32, convertToC));

  console.log( convertToTempCustom (32, (f, convertFunction) => { 
        return convertFunction(f, temp) + 273.15;
  }));

let firstName = function secondName () {
    console.log("Running");
};

console.log(myArray, "n", )