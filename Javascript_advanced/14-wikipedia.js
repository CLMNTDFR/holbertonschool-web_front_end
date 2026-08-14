function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const request = new XMLHttpRequest();
    request.open(
        'GET',
        'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    );
    request.onload = function () {
        const response = JSON.parse(request.responseText);
        const pages = response.query.pages;
        const pageId = Object.keys(pages)[0];
        callback(pages[pageId].extract);
    };
    request.send();
}

queryWikipedia(createElement);
