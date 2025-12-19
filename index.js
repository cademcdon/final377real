const express = require('express');
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');
const dotenv = require('dotenv');

const app = express();
const port = 3006;
dotenv.config();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//initialize supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

//THIS DETERMINES OPENING HOME PAGE
app.get('/', (req,res) => {
    res.sendFile('public/artists.html', { root: __dirname});
});

app.get('/artists', async (req,res) => {
    console.log('Attempting to GET all artists');

    const {data, error} = await supabase.from('artist').select();

    if (error) {
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    } else {
        res.send(data);
    }
})

app.post('/artist', async (req,res) => {
    console.log('adding artist...');
    console.log('Request: ', req.body);

    const artistName = req.body.artistName;
    const bestSong = req.body.bestSong;
    const secondBest = req.body.secondBest;
    const thirdBest = req.body.thirdBest;
    const authorName = req.body.authorName;

    const {data, error} = await supabase.from('artist').insert({
        artist_name: artistName,
        best_song: bestSong,
        second_best: secondBest,
        third_best: thirdBest,
        author_name: authorName,
    }).select();

    if (error) {
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    } else {
        res.send(data);
    }
    
    res.send(req.body);
})

app.listen(port, () => {
    console.log('App is available on port: ', port);
})