export {
    displayAllArtists
}

import {
  fetchArtists
}from "./fetchArtists.js"

const displayAllArtists = (element, artists) => {
  clearElementChildren(element);
  for (let i = 0; i < artists.length; i++) {
    const ulSection = document.createElement("ul");
    ulSection.classList.add('artists');
    ulSection.innerHTML = `
    <p>${artists[i].name}</p>
    `;
  }
 
    `
    <container class="all-artists-container">
      <ul id = all-artists-ul> 
      <li>
      <a href="./artist-template.html">
         <p>Naruto Artist</p>
         <img class="artist-art" src="src/images/naruto-artist.jpg" />
       </a> 
     </li>
     <li>
       <a href="./artist-template.html">
         <p>DeathNote Artist</p>
         <img class="artist-art" src="src/images/deathnote-artist.jpg" />
       </a>
     </li>
     <li>
       <a href="./artist-template.html">
         <p>Darling in the Franxx Artist</p>
         <img class="artist-art" src="src/images/darling-artist.jpg" />
       </a>
     </li>
     <li>
       <a href="./artist-template.html">
         <p>Cowboy Bebop Artist</p>
         <img class="artist-art" src="src/images/cowboy-artist.jpg" />
       </a>
     </li>
     
    </ul>

    </container>
    `
    // const allArtistsUl = document.querySelector ('#all-artists-ul')
    // const li = document.createElement ('li')
    
    // function appendArtist(){
    //   for (i=0; i<fetchArtists.length; i++){
    //     let oneArtist =  json[i]
    //     let createdArtist = createArtist(oneArtist)
    //     allArtistsUl.appendChild(createdArtist)
    //   }
    // }

    // function createArtist(oneArtist){
    //   li.textContent =  naruto
 
    //     // <a href="./artist-template.html">
    //     //  <p>${oneArtist.name}</p>
    //     //  <img class="artist-art" src= "${oneArtist.imageSource}" />
    //     // </a>
         
    //     return li
    // }

    return ulSection
}

const clearElementChildren = element => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

const catalog = document.querySelector(".catalog")
fetchArtists()
  .then(artists => {
    console.log(artists);
    renderAllArtists(catalog, artists)
  })

