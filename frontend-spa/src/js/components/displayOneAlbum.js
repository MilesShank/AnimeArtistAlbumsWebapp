import { 
    clearElementChildren 
} from "../domHelper.js"
import {
    displayOneSong
} from "./displayOneSong.js"
import {
    deleteAlbum, fetchArtists
} from "../fetchArtists.js"
import {
    displayAllArtists
} from "./displayAllArtists.js"
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
    div.append(ol)

    const albumDetails = document.createElement("section")
    albumDetails.classList.add("album-details")  
    artistInfo.append(albumDetails)
    
     const ulAlbum = document.createElement("ul");
     albumDetails.append(ulAlbum);
     ulAlbum.innerHTML = `
    <strong>
    <li>${album.recordLabel}</li>
    <li>${album.rating}</li>
    </strong>
     `
     const span = document.createElement("span");
     span.classList.add("album-description")
     albumDetails.append(span);
     span.innerHTML = `${album.description}`
     
    

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X Delete Album";
    deleteButton.classList.add("delete-box-submit");
    albumDetails.appendChild(deleteButton);
    
    deleteButton.addEventListener ("click", ()=>{
       deleteAlbum(album,album.id).then((updatedAlbumList)=>{
        fetchArtists()
        .then(artists => {
            displayAllArtists(artists)
        })

       } );
    })
}