function finding(){
    var input = document.getElementById('inp');
    var result = document.getElementById('result');
    const getRandomLinks = () => {
        const value = input.value;
        result.innerHTML = "";
        fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + value + '&origin=*', {
            method: 'GET'
        }).then(response => response.json()).then(data => {
            Object.keys(data.query.pages).map(function (key) {
                const {
                    title,
                    extract
                } = data.query.pages[key];
                const li = document.createElement('li');
                const text = li.textContent;
                li.textContent = '';
                const a = document.createElement('a');
                a.href = `https://en.wikipedia.org/wiki/${title}`;
                a.setAttribute('target', '_blank');
                a.textContent = text;
                a.innerHTML = `${title}<br>${extract}`;
                li.appendChild(a);
                result.appendChild(li);
            });
        })
    }

    getRandomLinks();
}

let ruLanguageErr = 'Извините, сейчас сайт доступен только на английском языке Sorry, the page is currently only available in English';

function detectLanguage() {
    let inputText = document.getElementById('inp').value;
    let outputElement = document.getElementById('result');
    if (/[а-я]/.test(inputText.toLowerCase())) {
        outputElement.textContent = ruLanguageErr;
    } else {
        finding();
    }
}

function rotateRectangle() {
    let rectangle = document.getElementById('enseclopLines1');
    let rotation = Math.floor(Math.random() * (280 - (-280) + 1)) + (-280);
    rotation = Math.max(Math.abs(rotation), 30) * (rotation < 0 ? -1 : 1);
    rectangle.style.transition = 'transform 3s'; rectangle.style.transform = 'rotate(' + rotation + 'deg)';
}
function rotateRectangle2() {
    let rectangle2 = document.getElementById('enseclopLines2');
    let rotation2 = Math.floor(Math.random() * (360 - (-360) + 1)) + (-360);
    rotation2 = Math.max(Math.abs(rotation2), 30) * (rotation2 < 0 ? -1 : 1);
    rectangle2.style.transition = 'transform 4s'; rectangle2.style.transform = 'rotate(' + rotation2 + 'deg)';
}

function rotateRectangle3() {
    let rectangle3 = document.getElementById('enseclopLines3');
    let rotation3 = Math.floor(Math.random() * (300 - (-300) + 1)) + (-180);
    rotation3 = Math.max(Math.abs(rotation3), 30) * (rotation3 < 0 ? -1 : 1);
    rectangle3.style.transition = 'transform 3s'; rectangle3.style.transform = 'rotate(' + rotation3 + 'deg)';
}

setInterval(rotateRectangle, 2900);
setInterval(rotateRectangle2, 3700);
setInterval(rotateRectangle3, 2800);