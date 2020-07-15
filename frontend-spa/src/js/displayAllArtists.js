export {
    displayAllArtists
}

const displayAllArtists = (artists) => {
    const mainSection = document.createElement("main")

    mainSection.classList.add('artists');
    mainSection.innerHTML = 
    `
    <container class="all-artists-container">
      <ul>
        // <li>
        //  <a href="./artist-template.html">
        //     <p>Naruto Artist</p>
        //     <img class="artist-art" src="src/images/naruto-artist.jpg" />
        //   </a> 
        // </li>
        // <li>
        //   <a href="./artist-template.html">
        //     <p>DeathNote Artist</p>
        //     <img class="artist-art" src="src/images/deathnote-artist.jpg" />
        //   </a>
        // </li>
        // <li>
        //   <a href="./artist-template.html">
        //     <p>Darling in the Franxx Artist</p>
        //     <img class="artist-art" src="src/images/darling-artist.jpg" />
        //   </a>
        // </li>
        // <li>
        //   <a href="./artist-template.html">
        //     <p>Cowboy Bebop Artist</p>
        //     <img class="artist-art" src="src/images/cowboy-artist.jpg" />
        //   </a>
        // </li>
      </ul>
    </container>
    `
    return mainSection
}