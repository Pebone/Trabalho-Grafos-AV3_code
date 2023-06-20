let s = "s"; 
let e = "e";

var thirdMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
    [1, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, 7],
    [1, s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 6, 6, 6, 6, 6, 6, 6, 6, 6, s, 6, 6, 6, 8, s, 7],
    [1, s, 0, 2, s, s, 2, s, s, 2, 0, s, 6, 6, 8, 8, 8, 8, 8, 8, 8, s, 8, 8, 8, 8, s, 7],
    [1, s, 0, s, 6, 3, 3, 3, 6, s, 0, s, 6, 8, 8, 6, 8, 8, 6, 6, 6, s, 6, 6, 6, 6, s, 7],
    [1, s, 0, s, 3, 3, 3, 3, 3, s, 0, s, 6, 8, 6, 6, 6, 6, 6, 6, 6, s, 6, 6, 6, 6, s, 7],
    [1, 2, s, 2, 3, 3, 5, 3, 3, 2, s, 2, 6, 8, 6, 6, 2, s, s, s, s, 2, s, s, s, s, 2, 7],
    [1, s, 0, s, 3, 3, 3, 3, 3, s, 0, s, 6, 8, 6, 6, s, 0, 0, 0, 0, 0, 0, 0, 0, 0, s, 7],
    [1, s, 0, s, 6, 3, 3, 3, 6, s, 0, s, 6, 8, 6, 6, s, 0, 3, 3, 3, 3, 3, 3, 3, 0, s, 7],
    [1, s, 0, 2, s, s, 2, s, s, 2, 0, s, 8, 8, 6, 6, s, 0, 3, 3, 3, 3, 3, 3, 3, 0, s, 7],
    [1, s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 8, 8, 6, 6, s, 0, 0, 0, 0, 0, 0, 0, 0, 0, s, 7],
    [1, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, 7],
    [1, s, 6, 6, 6, 6, 6, 6, 6, 6, 6, s, 8, 8, 6, 6, 6, 6, 6, 6, 6, s, 6, 6, 6, 6, s, 7],
    [1, s, 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, 7],
    [1, s, 6, 8, 8, 6, 6, 6, 6, 6, 6, s, 8, 8, 6, 6, 6, 6, 6, 6, 6, s, 6, 6, 6, 6, s, 7],
    [1, s, 6, 8, 8, 6, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, 7],
    [1, s, 6, 8, 8, 6, s, 6, 6, 6, 6, s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 7],
    [1, s, 6, 8, 8, 6, s, 6, 8, 8, 6, s, 0, 3, 3, 0, s, 0, 3, 3, 0, s, 0, 0, 7, 7, 7, 7],
    [1, s, 6, 8, 8, 6, s, 6, 8, 8, 6, s, 0, 3, 3, 0, s, 0, 3, 3, 0, s, 0, 7, 7, 7, 7, 7],
    [1, s, 8, 8, 8, 6, s, 6, 8, 8, 6, s, 0, 3, 3, 0, s, 0, 3, 3, 0, s, 0, 7, 7, 7, 7, 7],
    [1, s, 8, 8, 6, 6, s, 6, 8, 8, 6, s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 7, 7, 7, 7, 8],
    [1, 2, s, s, s, s, 2, 6, 8, 8, 6, 2, s, s, s, s, 2, s, s, s, s, 2, 0, 7, 7, 7, 8, 8],
    [1, s, 6, 8, 6, 6, 6, 6, 8, 8, 6, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 7, 7, 7, 7, 8, 8, 8],
    [1, s, 6, 8, 8, 8, 8, 8, 8, 8, 6, s, 0, 3, 3, 0, s, 0, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
    [1, s, 8, 8, 8, 8, 8, 8, 8, 6, 6, s, 0, 3, 3, 0, s, 0, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
    [1, s, 6, 6, 6, 6, 6, 6, 6, 6, 6, s, 0, 0, 0, 0, s, 0, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8],
    [1, 2, s, s, s, s, 2, s, s, s, s, 2, s, s, s, s, 2, 0, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8],
];

export {thirdMap}