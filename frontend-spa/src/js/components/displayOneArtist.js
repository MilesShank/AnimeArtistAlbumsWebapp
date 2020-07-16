export{
    displayOneArtist
}
import{
    clearElementChildren
}from "../domHelper.js"
const displayOneArtist = (artistContainer, artist) =>{
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
</div>
`
const artistGridItem2 = document.createElement("div");
artistGridItem2.classList.add("artist-grid-item2");
const singleArtistArt = new Image;
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
li.innerHTML = `
<p>${album.title}</p>
`
const albumArt = new Image;
albumArt.classList.add("album-art");
albumArt.src = album.imageSource;
li.appendChild(albumArt);
li.addEventListener('click',() =>{
    alert(`you clicked on ${album.title}`)
    displayOneAlbum(artistContainer,album);
})
albumUl.appendChild(li);
});
artistContainer.appendChild(albumUl);
}