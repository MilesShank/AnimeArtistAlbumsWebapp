export {
    displayAllArtists
}

import {
  fetchArtists
}from "../fetchArtists.js"
import{
  clearElementChildren
}from "../domHelper.js"

import{
  displayOneArtist
}from "./displayOneArtist.js"

const displayAllArtists = (ulContainer, artists) => {
  clearElementChildren(ulContainer);
  for (let i = 0; i < artists.length; i++) {
    const liSection = document.createElement("li");
    liSection.classList.add('artist');
    liSection.innerHTML = `
    <p>${artists[i].name}</p>
    `;
    const artistImg = new Image;
    artistImg.src = artists[i].imageSource;
    artistImg.classList.add("artist-art");
    liSection.appendChild(artistImg);
    liSection.addEventListener('click',() =>{
      alert("you clicked on " + artists[i].name);
      displayOneArtist(allArtistsContainer, artists[i]);
    })

    ulSection.appendChild(liSection);
  };
}




const allArtistsContainer = document.querySelector(".all-artists-container")
const ulSection = document.createElement("ul");
allArtistsContainer.appendChild(ulSection);
fetchArtists()
  .then(artists => {
    console.log(artists);
    displayAllArtists(ulSection, artists)
  })

