export { displayOneArtist };
import { clearElementChildren } from "../domHelper.js";
import { displayOneAlbum } from "./displayOneAlbum.js";
import { fetchArtists, postNewAlbum, fetchAlbums } from "../fetchArtists.js";


const displayOneArtist = (artistContainer, artist) => {
  clearElementChildren(artistContainer);
  artistContainer.classList.remove("all-artists-container");
  artistContainer.classList.add("artist-container");
  const artistInfo = document.createElement("section");
  artistInfo.classList.add("artist-info");
  artistInfo.innerHTML = `
   <div class="artist-grid">
   <ul>
   <li><h2>${artist.name}</h2></li>
   <li>${artist.description}</li>
   <li>${artist.recordLabel}</li>
   </ul>
   </div>`;

  const artistGridItem2 = document.createElement("div");
  artistGridItem2.classList.add("artist-grid-item2");
  const singleArtistArt = new Image();
  singleArtistArt.src = artist.imageSource;
  singleArtistArt.classList.add("single-artist-art");
  artistGridItem2.appendChild(singleArtistArt);
  artistInfo.appendChild(artistGridItem2);
  artistContainer.appendChild(artistInfo);

  const artistAlbums = document.createElement("section");
  artistAlbums.classList.add("artist-albums");
  const albumUl = document.createElement("ul");
  artist.albums.forEach((album) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${album.title}</p>`;
    const albumArt = new Image();
    albumArt.classList.add("album-art");
    albumArt.src = album.imageSource;
    li.appendChild(albumArt);
    li.addEventListener("click", () => {
      displayOneAlbum(artistContainer, album);
    });
    albumUl.appendChild(li);
  });
  artistContainer.appendChild(albumUl);
  drawAlbumForm(artistContainer);

  function drawAlbumForm(artistContainer) {
    const inputContainer = document.createElement("container");
    inputContainer.classList.add("input-container");

    const albumNameInput = document.createElement("input");
    albumNameInput.type = "text";
    albumNameInput.placeholder = "Enter new album name";
    albumNameInput.classList.add("input-box");
    inputContainer.appendChild(albumNameInput);

    const albumDescriptionInput = document.createElement("input");
    albumDescriptionInput.type = "text";
    albumDescriptionInput.placeholder = "Enter new album description";
    albumDescriptionInput.classList.add("input-box");
    inputContainer.appendChild(albumDescriptionInput);

    const albumRecordLabelInput = document.createElement("input");
    albumRecordLabelInput.type = "text";
    albumRecordLabelInput.placeholder = "Enter new album record label";
    albumRecordLabelInput.classList.add("input-box");
    inputContainer.appendChild(albumRecordLabelInput);

    const albumRatingInput = document.createElement("input");
    albumRatingInput.type = "text";
    albumRatingInput.placeholder = "Enter new album rating";
    albumRatingInput.classList.add("input-box");
    inputContainer.appendChild(albumRatingInput);

    const albumImageInput = document.createElement("input");
    albumImageInput.type = "text";
    albumImageInput.placeholder = "Enter image url";
    albumImageInput.classList.add("input-box");
    inputContainer.appendChild(albumImageInput);

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit New Album";
    submitButton.classList.add("input-box-submit");
    inputContainer.appendChild(submitButton);
    artistContainer.prepend(inputContainer);

    submitButton.addEventListener("click", () => {
      const album = {
        artist: artist.id,
        title: albumNameInput.value,
        description: albumDescriptionInput.value,
        recordLabel: albumRecordLabelInput.value,
        rating: albumRatingInput.value,
        imageSource: albumImageInput.value,
      };
      console.log(album);
      postNewAlbum(album, artist.id).then((updatedArtist) => {
          console.log(updatedArtist)
        displayOneArtist(artistContainer, updatedArtist);
      });
    });
  }
}