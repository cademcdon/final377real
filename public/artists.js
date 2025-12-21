async function createArtist() {
    console.log('inside createArtist')
    await fetch('/artist', {
        method: 'POST',
        body: JSON.stringify({
            artistName: `${document.getElementById('artistName2').value}`,
            bestSong: `${document.getElementById('bestSong2').value}`,
            secondBest: `${document.getElementById('secondBest2').value}`,
            thirdBest: `${document.getElementById('thirdBest2').value}`,
            authorName: `${document.getElementById('authorName2').value}`,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });

    document.getElementById('artistButtons').innerHTML = '';

    await loadArtistData();
    await createButtons();
}

async function loadArtistData() {
    const result = await fetch('/artists');
    const resultJson = await result.json();
    console.log('in loadArtistData ', resultJson);
    return resultJson; 
}

async function createButtons() {
    const response = await loadArtistData();

    const artistData = response;
    console.log('in createButtons ',artistData);
    
    const artistArea = document.getElementById('artistButtons');

    artistData.forEach(person => {
        const human = document.createElement('button');
        human.innerHTML = `${person.artist_name} review by ${person.author_name}`;
        human.className = 'artistButton';
        human.onclick = () => infoClick(person.artist_name);
        artistArea.append(human);
    });
}

async function infoClick(name) {
    const response = await loadArtistData();

    const theSingerData = response;
    console.log('in infoclick ', theSingerData);

    const theSinger = theSingerData.find(human =>
        human.artist_name.toLowerCase() === name.toLowerCase()
    );


    document.getElementById('artistName').innerHTML = `${theSinger.author_name} is claiming that ${theSinger.artist_name}'s`;
    document.getElementById('bestSong').innerHTML = `best song is ${theSinger.best_song}`;
    document.getElementById('secondBest').innerHTML = `and their second best song is ${theSinger.second_best}`;
    document.getElementById('thirdBest').innerHTML = `then finally, their third best is ${theSinger.third_best}`;
    document.getElementById('author').innerHTML = `${theSinger.author_name} is also claiming that their top 3 is right, and yours is wrong`;
    document.getElementById('desBox').style.display = 'block';
}

window.onload = function() {
    //fetchArtists();
    createButtons();
}