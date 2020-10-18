const taskOne = () => {
    console.log("Zadanie 1");

    const lists = document.querySelectorAll(".list");
    lists.forEach(l => {console.log(l)})
}

const taskTwo = () => {
    console.log("Zadanie 1");

    const getElement = tagName => {
        const elements = document.querySelectorAll(tagName);
        elements.forEach(e => {console.log(e)});
    }; getElement("li");
}

const taskThree = () => {
    console.log("Zadanie 3");

    const list = document.querySelector("#list");
    console.log(list);
}

const taskFour = () => {
    console.log("Zadanie 4");
    
    const showdown = (lis, uls, spans, sid, sids) => {
        const allLis = document.querySelectorAll(lis);
        const allUls = document.querySelectorAll(uls);
        const allSpans = document.querySelectorAll(spans);

        const spanInDiv = document.querySelectorAll(sid);
        const spanInDivWID = document.querySelectorAll(sids);

        allLis.forEach(al => {console.log(al)});
        allUls.forEach(au => {console.log(au)});
        allSpans.forEach(as => {console.log(as)});

        spanInDiv.forEach(sid => {console.log(sid)});
        spanInDivWID.forEach(sidwid => {console.log(sidwid)});
    }; showdown("li", "ul", "span", "div.list span", "div#spans span");
}


(() => {
    taskOne();
    taskTwo();
    taskThree();
    taskFour();
})();