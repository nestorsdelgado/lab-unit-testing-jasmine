function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (numOne == !Number || numTwo == !Number) {
        return undefined;
    }

    return numOne + numTwo;
}