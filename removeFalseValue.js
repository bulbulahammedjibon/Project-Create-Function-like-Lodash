// const arr = [2, 3, "", "test", false, null, undefined, 0];
const arr = [0, 1, false, 2, '', 3];

// let ar = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i]) === "number"   ) {
//         console.log(arr[i]);
//         ar.push(arr[i]);

//     }
//     // console.log(i)
// }

let ar = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === "number") {
      if(arr[i]){
          console.log(arr[i]);
          ar.push(arr[i]);
      }
       
    }
}

console.log(ar);

//  console.log(typeof(NaN) == 'true' )

 