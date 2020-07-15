export{
    createSubHeader
}
const createSubHeader = (artist) => {
    const subHeader = document.createElement("subHeader");
    subHeader.classList.add('subHeader')
    subHeader.innerHTML = `
     <h1>Artists of the greatest OP's <br>
        <button class="add-artist-button"> + Add a new Artist</button>
        <button class="delete-artist-button"> x remove Artist</button>
     </h1>

    `
    return subHeader;
}