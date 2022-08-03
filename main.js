let search = document.querySelector('.search');
let but = document.querySelector('.submit');
let res = document.querySelector("#result");

const fetch = (inp, cb) => {
    let url = `https://restcountries.com/v3.1/name/${inp.value}?fullText=true`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                console.log(data);
                cb(data);
            } else {
                res.textContent = ``
                const divbig = document.createElement("div");
                divbig.classList = "contA";
                divbig.textContent = "Not found";
                res.appendChild(divbig);
            }
        }
    };
    xhr.open("GET", url);
    xhr.send();
};
const htm = (data) => {
    res.textContent = ``
    console.log(data);
    let la = data[0].languages;
    const divbig = document.createElement("div")
    divbig.classList = "sa"
    const img = document.createElement("img")
    const div = document.createElement("div")
    div.classList = "cont"
    const divbig1 = document.createElement("div")
    const fet = document.createElement("h2");
    const h1 = document.createElement("h2");
    const h2 = document.createElement("h2");
    const h5 = document.createElement("h2")

    // div.textContent=
    img.src = data[0].flags.png;
    h1.textContent = `Name : ${data[0].name.common}`;
    fet.textContent = `Fifa : ${data[0].fifa}`;
    h2.textContent = `Capital : ${data[0].capital[0]}`;
    h5.textContent = `Language: ${Object.values(la)[0]}`;
    res.appendChild(div)
    div.appendChild(divbig1)
    div.appendChild(divbig);
    divbig.appendChild(img);

    divbig1.appendChild(h1);
    divbig1.appendChild(h5);
    divbig1.appendChild(h2);
    divbig1.appendChild(fet);

}
// fetch(search, htm);
but.addEventListener('click', () => {
    fetch(search, htm);
})




