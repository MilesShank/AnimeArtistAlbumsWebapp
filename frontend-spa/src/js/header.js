export {
     createHeader
}

import {
  fetchArtists, fetchAlbums
} from "./fetchArtists.js"

import {
  displayAllArtists
} from "./components/displayAllArtists.js"

import {
  displayAllAlbums
}from "./components/displayAllAlbums.js"

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add('header')
    // header.innerHTML = `
    // <nav>
    //   <ul>
    //    <li class="title"> NarutoTheme.jpg </li>
    //    <li> <a href="index.html">Home</a> </li>
    //    <li> <a href="allAlbums-template.html"> Albums </a></li>
    //    <li> <a href="allArtists-template.html"> Defunct </a></li>
    //   </ul>
    // </nav>
    // `
    const nav = document.createElement("nav");
    const ulHeader = document.createElement("ul");
    nav.appendChild(ulHeader);
    const liTitle = document.createElement("li");
    liTitle.classList.add("title");
    liTitle.innerHTML = `NarutoTheme.jpg`;
    ulHeader.appendChild(liTitle);
    header.append(nav);
    const liHome = document.createElement("li");
    liHome.classList.add("liHome");
    liHome.innerHTML = `Home`
    ulHeader.appendChild(liHome);
    liHome.addEventListener('click', () => {
      fetchArtists()
        .then(artists => displayAllArtists(artists)) 
    })
    const liAlbum = document.createElement("li");
    liAlbum.classList.add("liAlbum");
    liAlbum.innerHTML = `Albums`
    ulHeader.appendChild(liAlbum);
    liAlbum.addEventListener('click', () => {
      alert("Boom Boom")
      fetchAlbums()
        .then(albums => displayAllAlbums(document.querySelector(".all-artists-container"), albums)) 
    })

    return header;
}