const arr = [1, 2, 3, 5, 6, 7, 8, 9];

function drop(arr, num) {
    const ar = [];
    for (i = num; i < arr.length; i++) {
        ar.push(arr[i]);
        console.log(arr[i]);
    }

    return ar;
}

console.log(drop(arr, 6));