export {
    displayAllArtists
}

import {
  fetchArtists
}from "./fetchArtists.js"

const displayAllArtists = (artists) => {
    const mainSection = document.createElement("main")

    mainSection.classList.add('artists');
    mainSection.innerHTML = 
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

    return mainSection
}

