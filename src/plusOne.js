
const plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) { // let i = 3-1 = 2;
        digits[i]++
        if (digits[i] < 10){
            return digits
        } else {
            digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits
}


console.log(plusOne([1,2,3]))

