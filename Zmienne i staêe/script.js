const taskOne = () => {
    let someNumber = 42;
    let someWords = "Hello there!";
    let howToConcat = 2 + '2';
    let isTrue = true;
    let specialVal = NaN;

    console.log(someNumber, someWords, howToConcat, isTrue, specialVal);
}

const taskTwo = () => {
    let a = 13, b = 37;
    let sum = 0;

    console.log(sum = a+b);
}

const taskThree = () => {
    let x;
    console.log(x);
    // `undefined` oznacza, że do zmiennej nie została przypisana żadna wartość
    // lub sama zmienna nie została w ogóle zadeklarowana w programie
}


(() => {
    taskOne();
    taskTwo();
    taskThree();
})();