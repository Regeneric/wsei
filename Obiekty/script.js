const taskOne = () => {
    console.log("Zadanie 1");

    const car = {
        name: "Audi",
        model: "80",
        engine: "ABK",
        displacement: "1984cm3",
        power: "115KM",
        colour: "Black",
        productionDate: 1993
    }; console.log(...Object.values(car));
}

const taskTwo = () => {
    console.log("Zadanie 2");

    const car = {
        name: "Audi",
        model: "80",
        engine: "ABK",
        displacement: "1984cm3",
        power: "115KM",
        colour: "Black",
        productionDate: 1993,
        nameChange(name) {
            this.name = name;
        }
    }; 
    
    car.nameChange("BMW");
    console.log(...Object.values(car).filter(a => typeof a != "function"));
}

const taskThree = () => {
    console.log("Zadanie 3");

    const arr = [1, 2, 3, 4, 5];
    const sumObject = {
        sum: 0,
        sumArr(arr) {
            this.sum = arr.reduce((a, b) => a+b);
        }
    }; 

    sumObject.sumArr(arr);
    console.log(sumObject.sum);
}

const taskFour = () => {
    console.log("Zadanie 4");

    const car = {
        name: "Audi",
        model: "80",
        engine: "ABK",
        displacement: "1984cm3",
        power: "115KM",
        colour: "Black",
        productionDate: 1993
    }; console.log(car);
}

const taskFive = () => {
    console.log("Zadanie 5");

    const car = {
        name: "Audi",
        model: "80",
        engine: "ABK",
        displacement: "1984cm3",
        power: "115KM",
        colour: "Black",
        productionDate: 1993,
        productionPlace: {
            name: "Ingolstadt",
            country: "Germany"
        }
    }; console.log(car.productionPlace.name);
}

const taskSix = () => {
    console.log("Zadanie 6");

    const car = {
        name: "Audi",
        model: "80",
        engine: "ABK",
        displacement: "1984cm3",
        power: "115KM",
        colour: "Black",
        productionDate: 1993,
        productionPlace: {
            name: "Ingolstadt",
            country: "Germany"
        }
    }; 

    Object.defineProperty(car, "hello", {value: "Hello"});
    Object.defineProperty(car, "sayHello", {get: function() {console.log(this.hello)}})

    car.sayHello;
}


(() => {
    taskOne();
    taskTwo();
    taskThree();
    taskFour();
    taskFive();
    taskSix();
})();