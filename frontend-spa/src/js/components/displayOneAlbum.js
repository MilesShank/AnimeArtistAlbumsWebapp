import { 
    clearElementChildren 
} from "../domHelper.js"
import {
    displayOneSong
} from "./displayOneSong.js"
export {
    displayOneAlbum
}



const displayOneAlbum = (artistContainer, album) =>{
    alert(`you clicked on ${album.title}`)
    clearElementChildren(artistContainer)

    const artistInfo = document.createElement("section")
    artistInfo.classList.add("artist-info")

    const div = document.createElement("div")
    div.classList.add("artist-grid")
    artistInfo.append(div)
    artistContainer.append(artistInfo)

    const h1 = document.createElement("h1")
    div.append(h1)
    h1.innerHTML=`${album.title}`

    const div2 = document.createElement("div")
    div2.classList = "artist-grid-item2"
    artistInfo.append(div2)
    const albumImg = document.createElement("img")
    div2.append(albumImg)
    albumImg.src= album.imageSource
    albumImg.classList = "single-artist-art"

    const ol = document.createElement("ol")
    album.songs.forEach(song => {
        const li = document.createElement("li")
        li.innerHTML= `<p>${song.songTitle}</p>`
        ol.append(li)
        li.addEventListener("click", () => {
            displayOneSong(artistContainer, song, album);
          });
    });

    const albumDetails = document.createElement("section")
    albumDetails.classList.add("album-details")  
    artistInfo.append(albumDetails)
    albumDetails.innerHTML = `
    <ul>
    <strong>
    <li>${album.recordLabel}</li>
    <li>${album.rating}</li>
    <li>${album.artist}</li>
     </strong>
     </ul> 
     <span class="album-description"> ${album.description}</span> `

    div.append(ol)


}