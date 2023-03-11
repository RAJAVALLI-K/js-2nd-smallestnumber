let array = [56, 22, 14, 35, 32,20];
function smallNum(array,n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    // console.log(array);
    let result = array[n - 1];
    return result;
}
console.log(smallNum(array, 2));
document.write("The 2nd Smallest Number:" +smallNum(array, 2));