package org.wcci.apimastery;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class ArtistController {

    ArtistStorage artistStorage;

    public ArtistController(ArtistStorage artistStorage) {
        this.artistStorage = artistStorage;
    }

    @GetMapping("/api/artists/")
    public Collection<Artist> retrieveAllArtists(){
        return artistStorage.retrieveAllArtists();
    }

    @GetMapping("/api/artist/{id}/")
    public Artist retrieveArtistById(@PathVariable long id){
        return artistStorage.retrieveArtistById(id);
    }

}
