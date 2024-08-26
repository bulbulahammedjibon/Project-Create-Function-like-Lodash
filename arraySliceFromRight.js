const arr = [1, 2, 3,4,5,6];

function drop(arr, num) {
    const ar = [];
    for (i = 0; i < arr.length - num; i++) {
        ar.push(arr[i]);
        console.log(arr[i]);
    }

    return ar;
}

console.log(drop(arr,3));