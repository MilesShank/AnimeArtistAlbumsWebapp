export {
    displayAllArtists
}
import {
  fetchArtists, postNewArtist
}from "../fetchArtists.js"
import{
  clearElementChildren
}from "../domHelper.js"
import{
  displayOneArtist
}from "./displayOneArtist.js"

const displayAllArtists = (artists) => {
  clearElementChildren(allArtistsContainer);
  const ulSection = document.createElement("ul");
  allArtistsContainer.appendChild(ulSection);
  for (let i = 0; i < artists.length; i++) {
    const liSection = document.createElement("li");
    liSection.classList.add('artist');
    liSection.innerHTML = ` <p>${artists[i].name}</p> `;
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
  drawArtistForm(allArtistsContainer);
}

function drawArtistForm(allArtistsContainer) {
  const inputContainer = document.createElement('container');
  inputContainer.classList.add('input-container');
  const artistNameInput = document.createElement('input');
  artistNameInput.type = 'text';
  artistNameInput.placeholder = 'Enter new artist name';
  artistNameInput.classList.add('input-box');
  inputContainer.appendChild(artistNameInput);
  const artistDescriptionInput = document.createElement('input');
  artistDescriptionInput.type = 'text';
  artistDescriptionInput.placeholder = 'Enter new artist description';
  artistDescriptionInput.classList.add('input-box');
  inputContainer.appendChild(artistDescriptionInput);
  const artistRecordLabelInput = document.createElement('input');
  artistRecordLabelInput.type = 'text';
  artistRecordLabelInput.placeholder = 'Enter new artist record label';
  artistRecordLabelInput.classList.add('input-box');
  inputContainer.appendChild(artistRecordLabelInput);
  const artistImageInput = document.createElement('input');
  artistImageInput.type = 'text';
  artistImageInput.placeholder = 'Enter image url';
  artistImageInput.classList.add('input-box');
  inputContainer.appendChild(artistImageInput);
  const submitButton = document.createElement('button');
  submitButton.innerText = 'Submit New Artist';
  submitButton.classList.add('input-box-submit');
  inputContainer.appendChild(submitButton);
  allArtistsContainer.appendChild(inputContainer);

  submitButton.addEventListener('click', () => {
    const artist = {
      "name": artistNameInput.value,
      "description": artistDescriptionInput.value,
      "recordLabel": artistRecordLabelInput.value,
      "imageSource": artistImageInput.value
    }
    postNewArtist(artist)
          .then(artists => {
        displayAllArtists(allArtistsContainer, artists)
          })
    fetchArtists()
      .then(artists => {
        displayAllArtists(allArtistsContainer, artists)
      })
  })
}


const allArtistsContainer = document.querySelector(".all-artists-container")