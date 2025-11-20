function findSecondLargestUnique(arr) {
    if (arr.length < 2) return -1;

    arr.sort((a, b) => a - b);
    let largest = arr[arr.length - 1];

    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    // binary search for the largest value < largest
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] < largest) {
            result = arr[mid];
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

// sample input (replace with input logic if needed)
const arr = [4, 2, 9, 9, 9, 7];
const result = findSecondLargestUnique(arr);

if (result === -1) {
    console.log(result);
    console.log("Not enough unique elements");
} else {
    console.log("second largest unique element is:", result);
}
