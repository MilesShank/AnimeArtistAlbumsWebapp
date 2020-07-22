import {
    fetchAlbums
} from "../fetchArtists.js"

import {
    clearElementChildren
} from "../domHelper.js"

import {
    displayOneAlbum
} from "./displayOneAlbum.js"

const displayAllAlbums = (albums) => {
    clearElementChildren(allArtistsContainer);
    const allAlbumsContainer = document.createElement("container");
    allAlbumsContainer.classList.add("all-albums-container");
    const ulSection = document.createElement("ul");
    allAlbumsContainer.appendChild(ulSection);
    for (i = 0; i < albums.length; i++) {
        const liSection = document.createElement("li");
        liSection.classList.add('album');
        liSection.innerHTML = `<p>${albums[i].title}</p>`
        const albumImg = new Image;
        albumImg.src = albums[i].imageSource;
        albumImg.classList.add("album-art");
        liSection.appendChild(albumImg);
        liSection.addEventListener('click', () => {
            alert("you clicked me");
            displayOneAlbum(allAlbumsContainer, albums[i]);
        })
        ulSection.appendChild(liSection);
    }
}

fetchAlbums()
    .then(albums => {
        displayAllAlbums(allAlbumsContainer, albums)
    })