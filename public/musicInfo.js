function getInfo(artist) {
    return fetch(`https://musicbrainz.org/ws/2/artist?query=artist:${artist}&fmt=json`).then((result) => 
        result.json()
    );
}

function getLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((result) => 
        result.json()
    );
}

async function fillLyrics() {
    const artistWord = document.getElementById('artistWord').value.replace(/ /g, '%20');
    console.log(artistWord);
    const songWord = document.getElementById('songTitle').value.replace(/ /g, '%20');
    console.log(songWord);
    
    const response = await getLyrics(artistWord, songWord);
    console.log(response);

    document.getElementById("lyricArea").innerHTML = response.lyrics;

    let text = response.lyrics;
    let words = text.split(' ');
    let wordCount = {};

    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    console.log(wordCount); 

    let songLabels = Object.keys(wordCount);
    let songData = Object.values(wordCount);

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: songLabels,
        datasets: [{
            label: 'Word Count',
            data: songData,
            
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}


async function getCountry() {
    const artistname = document.getElementById('artistnametext').value;
    console.log(artistname);
    
    const response = await getInfo(artistname);

    const artistData = response;
    console.log('JSONtext-> ',artistData);

    const country = response.artists[0].area.name;
    console.log(country); 

    const city = response.artists[0]['begin-area'].name;
    console.log(city); 

    const tag1 = response.artists[0].tags[0].name;
    console.log(tag1);

    const tag2 = response.artists[0].tags[1].name;
    console.log(tag1);

    const tag3 = response.artists[0].tags[2].name;
    console.log(tag1);

    document.getElementById('textArea').innerHTML = `${artistname}'s country of origin is ${country} in ${city}. With their main genre desciptors being ${tag1}, ${tag2}, and ${tag3}.`;
    
    //const artistArea = document.getElementById('artistButtons');


}