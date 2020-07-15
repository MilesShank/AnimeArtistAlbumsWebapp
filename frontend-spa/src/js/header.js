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
       <li> <a href="allAlbums-template.html"> Albums </a></li>
       <li> <a href="allArtists-template.html"> Defunct </a></li>
      </ul>
    </nav>
    `
    return header;
}