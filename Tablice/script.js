const taskOne = () => {
    console.log("Zadanie 1");

    const arr = [1, 2, 3, 4, 5];
    console.log(...arr);
}

const taskTwo = () => {
    console.log("Zadanie 2");

    const arr = ["1", 2, "3", 4, "5", 6];
        console.log(arr[0], arr[1]);
        console.log(arr[arr.length-1]);
        console.log(...arr);
        console.log(...arr.filter(a => Number(!(a&1))));
        console.log(...arr.filter(a => typeof a == "string"));
        console.log(...arr.filter(a => typeof a == "number"));
}

const taskThree = () => {
    console.log("Zadanie 3");

    const arr = [1, 2, 3, 4, 5];
    console.log(arr.reduce((a, b) => a+b));
    console.log(arr.reduce((a, b) => a-b));
    console.log(arr.reduce((a, b) => (a+b)/arr.length));
    console.log(...arr.filter(a => !(a&1)));
    console.log(...arr.filter(a => a&1));
    console.log(arr.reduce((a, b) => a > b ? a : b));
    console.log(arr.reduce((a, b) => a < b ? a : b));
    console.log(...arr.reverse());
}

const taskFour = () => {
    console.log("Zadanie 4");

    const arr = [1, 2, 3, 4, 5];
    const sumArr = arr => {
        console.log(arr.reduce((a, b) => a+b));
    }; sumArr(arr);
}

const taskFive = () => {
    console.log("Zadanie 5");
    
    const arr = [1, 2, 3, 4, 5];
    const sumAvgArr = arr => {
        const sum = arr.reduce((a, b) => a+b);
        const avg = arr.reduce((a, b) => (a+b)/arr.length);

        console.log(sum*avg);
    }; sumAvgArr(arr);
}

const taskSix = () => {
    console.log("Zadanie 6");
    
    const arr = [1, 2, 3, 4, 5];
    const pos = arr.filter(a => !(a&1));

    console.log(pos.reduce((a, b) => (a+b)/pos.length));
}

const taskSeven = () => {
    console.log("Zadanie 7");

    const arr = [2, 1, 3, 7];
    const sortArr = arr => arr.sort();

    console.log(...sortArr(arr));
}

const taskEight = () => {
    console.log("Zadanie 8");
    
    const arrOne = [1, 2, 3, 4];
    const arrTwo = [4, 5, 6, 7];

    const sumIndexes = (arrOne, arrTwo) => {
        let aoInd = arrOne.map(ao => arrOne.indexOf(ao));
        const atInd = arrTwo.map(at => arrTwo.indexOf(at));
    
        aoInd = [...aoInd, ...atInd].sort().reduce((a, b) => a+b);
        console.log(aoInd);
    }; sumIndexes(arrOne, arrTwo);
}

taskNine = () => {
    console.log("Zadanie 9");

    const arr = [1, 2, 3, 4, 5];
    const makeNewArr = (arr, elem) => arr.filter(a => a != elem);
    
    const newArr = makeNewArr(arr, arr[1]);
    console.log(...newArr);  
}

taskTen = () => {
    console.log("Zadanie 10");

    const arr = [1, -2, 3, -4, 5];
    const opSign = arr => arr.map(a => a > 0 ? -Math.abs(a) : Math.abs(a));

    console.log(...opSign(arr));
}


(() => {
    taskOne();
    taskTwo();
    taskThree();
    taskFour();
    taskFive();
    taskSix();
    taskSeven();
    taskEight();
    taskNine();
    taskTen();
})();