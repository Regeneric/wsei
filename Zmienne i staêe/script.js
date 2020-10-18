const taskOne = () => {
    console.log("Zadanie 1");

    let someNumber = 42;
    let someWords = "Hello there!";
    let howToConcat = 2 + '2';
    let isTrue = true;
    let specialVal = NaN;

    console.log(someNumber, someWords, howToConcat, isTrue, specialVal);
}

const taskTwo = () => {
    console.log("Zadanie 2");

    let a = 13, b = 37;
    let sum = 0;

    console.log(sum = a+b);
}

const taskThree = () => {
    console.log("Zadanie 3");

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