const taskOne = () => {
    console.log("Zadanie 1");

    const person = {
        imie: "Jan",
        nazwisko: "Kowalski",
        wiek: 42,
        kraj: "Polska",
        miasto: "Szczecin",
        showAll() {
            console.log(...Object.values(this).filter(pr => typeof pr != "function"));
        },
        oldify() {
            this.wiek += 1;
            const age = Object.keys(this).map(a => a == "wiek" ? this[a] : 0).filter(af => af > 0);
            console.log(this.imie, ...age);
        }
    };

    const person2 = {
        imie: "John",
        nazwisko: "Smith",
        wiek: 17,
        kraj: "USA",
        miasto: "New York",
        showAll() {
            console.log(...Object.values(this).filter(pr => typeof pr != "function"));
        },
        oldify() {
            this.wiek += 1;
            const age = Object.keys(this).map(a => a == "wiek" ? this[a] : 0).filter(af => af > 0);
            console.log(this.imie, ...age);
        }
    };

    person.showAll();
    person2.showAll();

    person.oldify();
    person.oldify();
    person.oldify();

    person2.oldify();
    person2.oldify();
    person2.oldify();
}

const taskTwo = () => {
    console.log("Zadanie 2");

    const person = {
        imie: "Jan",
        nazwisko: "Kowalski",
        wiek: 42,
        kraj: "Polska",
        miasto: "Szczecin",
        jedzenie: new Array()
    };

    const person2 = {
        imie: "John",
        nazwisko: "Smith",
        wiek: 17,
        kraj: "USA",
        miasto: "New York",
        jedzenie: ["Jabłko", "Truskawka"]
    };


    const showFood = person => {
        const food = Object.values(person).filter(f => typeof f == "object");
        console.log(person.imie, ...food);
    }; 
    
    const addFood = (person, food) => {
        person.jedzenie.push(food);
    }

    showFood(person);
    showFood(person2);

    addFood(person, "Makaron");
    addFood(person2, "Wołowina");

    showFood(person);
    showFood(person2);
}

const taskThree = () => {
    console.log("Zadanie 3");

    const mathObj = (a, b) => new Object({a, b});
        const add = obj => obj.a + obj.b;
        const sub = obj => obj.a - obj.b;
        const mul = obj => obj.a * obj.b;
        const div = obj => obj.b == 0 ? "Nie dzielimy przez zero" : obj.a / obj.b;

    const mo = mathObj(10, 2);
        console.log(add(mo));
        console.log(sub(mo));
        console.log(mul(mo));
        console.log(div(mo));

    const moZero = mathObj(10, 0);
        console.log(div(moZero));
}

const taskFour = () => {
    console.log("Zadanie 4");

    const ladderSteps = 7;
    const person = {
        isOnTop: false,
        currentStep: 0,
        isClimbing: true,
        climb(ladderSteps) {
            while(!this.isOnTop && this.isClimbing) {
                console.log("Szczebel: ", this.currentStep);
                if(this.currentStep < ladderSteps) this.currentStep++;
                else {this.isClimbing = false; this.isOnTop = true; console.log("Wszedłeś na szczyt!");}
            }
    
            while(this.isOnTop && !this.isClimbing) {
                console.log("Szczebel: ", this.currentStep);
                if(this.currentStep > 0) this.currentStep--;
                else {this.isClimbing = true; this.isOnTop = false; console.log("Zszedłeś na sam dół!");}
            }
        }
    }; person.climb(ladderSteps);
}


(() => {
    taskOne();
    taskTwo();
    taskThree();
    taskFour();
})();