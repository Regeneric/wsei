const taskOne = () => {
    console.log("Zadanie 1");

    let cnt = 0;
    const int = setInterval(() => {
        if(cnt < 15) {
            console.log("Cześć po raz ", cnt+1);
            cnt++;
        } else clearInterval(int);
    }, 3000);
}

const taskTwo = () => {
    console.log("Zadanie 2");

    const arr = [1, 2, 3, 4, 5];
    let tmo = setTimeout(() => {
        console.log(...arr);
        clearTimeout(tmo);
    }, 2000);

    let cnt = 0;
    const int = setInterval(() => {
        if(cnt < arr.length) {
            console.log(arr[cnt]);
            cnt++;
        } else clearInterval(int);
    }, 3000); 
}


(() => {
    taskOne();
    taskTwo();
})()