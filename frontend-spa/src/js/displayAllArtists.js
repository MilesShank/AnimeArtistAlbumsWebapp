//START AT LINE 92

export {
    displayAllArtists
}

import {
  fetchArtists
}from "./fetchArtists.js"

const displayAllArtists = (milesUl, artists) => { 
  clearElementChildren(milesUl); //this function is defined on line 31.
  for (let i = 0; i < artists.length; i++) { //we loop through our array of JSON objects that the API gave us. 
    const liSection = document.createElement("li"); //we create an <li> and call it liSection
    liSection.classList.add('artist'); //we give our <li> a class name of 'artist'. I think this has to do with the CSS but I didn't actually check. 
    liSection.innerHTML = ` 
    
    <p>${artists[i].name}</p>
    
    `;
     //inside the <li> called liSection, we define the html inside the <li> tag. <li>innerHTML GOES HERE</li>. 
    //we put the artist name in a p tag. We are getting the artist name by iterating through an array called artists we got from fetchArtists/our API.  
    //${arrayName[i].pojoVariableName} is the syntax for how to grab information from a JSON file while defining innerHTML.

   
    let img = new Image; //we also want there to be our artist image! this states that an img variable is going to exist.
    img.src = artists[i].imageSource; //the src link for that image will come from our JSON object.
    // Since we aren't inside an innerHTML tag, we don't need the ${} to get information from our JSON object.
    img.classList.add('artist-art'); //we give our image its class name so that our CSS remembers the formatting.
    liSection.append(img); //we add our newly created image into our <li> tag.
    liSection.addEventListener('click', () => { //instead of an <a> tag which link us to a new page, we add an event listener, which calls the function which will generate the page content. 
      alert("you clicked "+ artists[i].name) //this is just to confirm the eventListener works proper
      displayOneArtist(allArtistsContainer, artists[i]) //this calls a function at the bottom of this document which I did not comment as thoroughly. 
    });

    milesUl.append(liSection); //we add our <li> tag to our <ul> tag.

  };
  };
  

const clearElementChildren = element => { 
  //this bit is taken from bens code. As long as there is an HTML element inside the element this function is given
  //it will keep removing elements. Once there is no firstChild inside the element (aka there are no children at all)
  //it will stop running. 
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

const milesUl = document.createElement("ul"); //WE START HERE FOR SOME REASON. 
//Making the <ul> element we will populate with artists.
milesUl.classList.add("milesUl"); //I named it after myself, now the html element we created on line 94 has the same class name as our javascript constant.
const allArtistsContainer = document.querySelector(".all-artists-container"); 
//telling javascript that the container in the index called all-artists-container exists, and defining it by the name allArtistsContainer.
allArtistsContainer.append(milesUl) //now we have added the <ul> we made to the container we defined above. 
fetchArtists() //we call our api.
.then(artists => { //this is the promise stuff I don't understand as well, but if we call the displayAllArtists function here in this promise,
//the displayAllArtists function successfully recieves information from our API
  console.log(artists); //this is a print statement for debugging purposes.
  displayAllArtists(milesUl, artists) //we call the function that's near the top of the page on line 11.
})


//when we actually make this for real this should prolly get put in a different javascript file I'm just really bad with imports and exports~~~

const displayOneArtist = (container,artist) =>{ //this is really just the same thing over again. Importantly: you can't append things to elements created by the 'innerHTMl' method.
clearElementChildren(container);
container.classList.remove("all-artists-container");
container.classList.add("artist-container");
const artistInfo = document.createElement("section");
artistInfo.classList.add("artist-info");

artistInfo.innerHTML = `
<div class="artist-grid">
<ul>
  <li><h2>${artist.name}</h2></li>
  <li>${artist.description}</li>
  <li>${artist.recordLabel}</li>
</ul>
</div>
`

const artistgridItem2 = document.createElement("div");
artistgridItem2.classList.add("artist-grid-item2"); 
var singleArtistArt = new Image;
singleArtistArt.src = artist.imageSource;
singleArtistArt.classList.add("single-artist-art");
artistgridItem2.append(singleArtistArt);
artistInfo.append(artistgridItem2)
container.append(artistInfo)


const artistAlbums = document.createElement("section");
artistAlbums.classList.add("artist-albums");
const albumUl = document.createElement("ul");
artist.albums.forEach((album) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <p>${album.title}</p>
  `
  var albumArt = new Image;
  albumArt.classList.add("album-art")
  albumArt.src = album.image;
  li.append(albumArt)
  li.addEventListener('click', () => {
    alert(`You clicked on ${album.title}!`)
    displayOneAlbum(container,album)
  })
  albumUl.append(li);
})
container.append(albumUl)
}

const displayOneAlbum = (container, album)=> { //etc etc I really don't need to add all this stuff. I just wanted to make sure I got it down. 
clearElementChildren(container);
const artistInfo = document.createElement("section");
artistInfo.classList.add("artist-info");
artistInfo.innerHTML = `
<div class="artist-grid">
<h1>${album.title}</h1>
<ol>
    <li><a href="./song-template.html">Haruka Kanata</a></li>
    <li>Fighting Dreamers</li>
    <li>Track 3</li>
    <li>Track 4</li>
    <li>Track 5</li>
    <li>Track 6</li>git status
    
    <li>Track 7</li>

</ol>
</div>`
container.append(artistInfo)
}