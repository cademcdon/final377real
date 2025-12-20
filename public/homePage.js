function getGenre() {
    return fetch(`https://binaryjazz.us/wp-json/genrenator/v1/genre/`).then((result) => 
        result.json()
    );
}

async function insertGenre() {
    const response = await getGenre();
    console.log(response);
    const genre = document.createElement('a');
    genre.className = 'genreText';
    genre.textContent = response;
    // document.getElementById('genreText').innerHTML = response;
    const query = transform(response);
    genre.href = `https://www.youtube.com/results?search_query=${query}`;
    document.getElementById('genreText').appendChild(genre);
}

function transform(phrase){
    var result = phrase.toLowerCase().replace(/ /g, '+').replace(/\//g, '%2F');
    console.log(result);
    result = result + '+genre';
    console.log(result);
    return result;
}

function createMap() {
    var map = L.map('map').setView([39.8283, -98.5795], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

window.onload = function(){
    createMap();
}