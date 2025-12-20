function getGenre() {
    return fetch(`https://binaryjazz.us/wp-json/genrenator/v1/genre/`).then((result) => 
        result.json()
    );
}

async function insertGenre() {
    document.getElementById('genreText').innerHTML = '';
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
