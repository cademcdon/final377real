# INST 377 Final Project: MUSIC ZONE

## Description:
### This is a site where people can gather information and store reviews about music and artists.
### The target browser would be a web browser.


# Developer Manual

### List of APIs: 
### https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
### https://musicbrainz.org/doc/MusicBrainz_API
### https://binaryjazz.us/genrenator-api/

### In the terminal, you need to install "@supabase/supabase-js", "body-parser". "dot-env", "express", and "nodemon".

### Inside the "index/js" file, you need to view the "port" variable and make sure that matches the port number in your url. So when you run "npm start" inside the terminal, you can enter in http://localhost:port/ in the browser to see the site.

### I do not have any literal tests in the code anymore, but there are console logs within each function.

### The GET endpoint is at /artists, which lists out all of the artist reviews written by users that is stored in the supabase. Then the /artist endpoint is the POST, where users can add a review to the supabase.

### There are some limitations with the outside APIs used for the "Music Info" section of the site. Not EVERY single music artist is available for the "Artist Info" function. So here is a list of artists that I have seen to work so far: Kenrick Lamar, Drake, Mac Miller, Daniel Caesar, Jeff Buckley, JID, Bon Iver, Radiohead, and George Harrison. Where it displays that artist's country of origin, and their top 3 most popular "tags" that represent their genre of music. Which all comes from the MusicBrainz API. There are a lot more artists that can be discovered.

### For the "Song Lyrics" funciton sometimes you need to refresh if nothing appears for the lyrics, but known combinations I have found are: Jeff Buckley / Everybody Here Wants You, Dijon / Baby!, George Harrison / My Sweet Lord, Tyler, The Creator / Sugar On My Tongue. And those all come from the Lyrics.ovh API. While there can be more to be discovered. Then below the output of the full lyrics, there is a Chart.JS bar graph showing the volume of each instance of a word is used in that song.

### Things to be improved on in the future, is to perhaps choose a different API that has the same function of gathering artist information that has a more wide range of access of information. Then to also find a solution for when an artist is not found, providing an alternate musician that is in a similar genre.