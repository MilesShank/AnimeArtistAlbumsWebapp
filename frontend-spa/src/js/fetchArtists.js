export {
    fetchArtists
}
export {
    postNewArtist
}

const fetchArtists = async () => {
    return fetch('http://localhost:8080/api/artists/')
    .then(response => response.json())
}

const postNewArtist = async (artist) => {
    console.log(artist);
    return fetch('http://localhost:8080/api/artists/add/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artist)
    }) .then(response => response.json())
}