export {
     createHeader
}

const createHeader = (artist) => {
    const header = document.createElement("header");
    header.classList.add('header')
    header.innerHTML = `
    <nav>
      <ul>
       <li class="title"> NarutoTheme.jpg </li>
       <li> <a href="index.html">Home</a> </li>
       <li> <a href="allAlbums-template.html">${artist.albums} </a></li>
       <li> <a href="allArtists-template.html">${artist.artists} </a></li>
      </ul>
    </nav>
    `
    return header;
}