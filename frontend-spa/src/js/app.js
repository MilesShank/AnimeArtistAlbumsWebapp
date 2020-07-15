import { 
    createHeader
}from "./header.js"

import {
    fetchArtists
}from "./fetchArtists.js"

fetchArtists()
    .then(artists => renderPage(artists))

const renderPage = (mainPageDisplay) => {
    const container = document.querySelector('.container');

    container.prepend(createHeader(mainPageDisplay))
    container.appendChild(displayAllArtists)(mainPageDisplay)
    
}