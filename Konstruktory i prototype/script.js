const taskOne = () => {
    console.log("Zadanie 1");

    function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.kraj = kraj;
        this.miasto = miasto;
        this.jezyk = jezyk;

        this.changeAge = age => {this.wiek = age};
        this.changeCity = city => {this.miasto = city};
    }; 

    const jk = new Person("Jan", "Kowalski", 42, "Polska", "Szczecin", "polski");
        console.log(...Object.values(jk).filter(j => typeof j != "function"));
        jk.changeAge(50);
        jk.changeCity("Warszawa");
        console.log(...Object.values(jk).filter(j => typeof j != "function"));

    const js = new Person("John", "Smith", 17, "USA", "New York", "angielski");
        console.log(...Object.values(js).filter(j => typeof j != "function"));
        js.changeAge(22);
        js.changeCity("Georgia");
        console.log(...Object.values(js).filter(j => typeof j != "function"));

    const sa = new Person("Siemion", "Aakman", 66, "Rosja", "Irkuck", "rosyjski");
        console.log(...Object.values(sa).filter(s => typeof s != "function"));
        sa.changeAge(99);
        sa.changeCity("Iżewsk");
        console.log(...Object.values(sa).filter(s => typeof s != "function"));

    const jc = new Person("John", "Cena", 43, "USA", "West Newbury", "angielski");
        console.log(...Object.values(jc).filter(j => typeof j != "function"));
        jc.changeAge(34);
        jc.changeCity("Boston");
        console.log(...Object.values(jc).filter(j => typeof j != "function"));

    const gp = new Person("Gavrilo", "Princip", 24, "Bośnia i Hercegowina", "Obljaj", "serbski");
        console.log(...Object.values(gp).filter(g => typeof g != "function"));
        gp.changeAge(42);
        gp.changeCity("Sarajewo");
        console.log(...Object.values(gp).filter(g => typeof g != "function"));
}

const taskTwo = () => {
    console.log("Zadanie 2");

    function Calc(a, sign, b) {
        this.a = a;
        this.sign = sign;
        this.b = b;
    
        this.result = 0;
        switch(this.sign) {
            case '+': this.result = this.a + this.b; break;
            case '-': this.result = this.a - this.b; break;
            case '*': this.result = this.a * this.b; break;
            case '/': this.result = this.b == 0 ? "Nie dzielimy przez zero" : this.a / this.b; break;
        }

        this.clear = () => {this.result = 0};
        this.getResult = () => this.result;
    };

    const add = new Calc(2, '+', 5);
        console.log(add.getResult());
        add.clear();
        console.log(add.getResult());

    const div = new Calc(2, '/', 0);
        console.log(div.getResult());
        div.clear();
        console.log(div.getResult());
}

// Dokończyć zadanie 3

(() => {
    taskOne();
    taskTwo();
})();