const taskOne = () => {
    console.log("Udało się!");
}

const taskTwo = () => {
    const param = "Hello World!";
    const showParam = param => {console.log(param)};

    showParam(param);
}

const taskThree = () => {
    const arr = [1, 2, 3, 4, 5];
    const arrRt = arr => arr;
    
    console.log(arrRt(arr));
}

const taskFour = () => {
    const someString = "Hello World!";
    const repeat = val => {
        let cnt = 0;
        const int = setInterval(() => {
            if(cnt < 5) {
                console.log(val);
                cnt++;
            } else clearInterval(int);
        }, 3000);
    }; repeat(someString);
}


(() => {
    taskOne();
    taskTwo();
    taskThree();
    taskFour();
})();