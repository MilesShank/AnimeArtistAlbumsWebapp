package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Storage.AlbumStorage;
import org.wcci.apimastery.Storage.ArtistStorage;
import org.wcci.apimastery.Entities.Album;
import org.wcci.apimastery.Entities.Artist;

import java.util.Collection;

@RestController
public class ArtistController {

    ArtistStorage artistStorage;
    AlbumStorage albumStorage;

    public ArtistController(ArtistStorage artistStorage, AlbumStorage albumStorage) {
        this.artistStorage = artistStorage;
        this.albumStorage = albumStorage;
    }

    @GetMapping("/api/artists/")
    public Collection<Artist> retrieveAllArtists(){
        return artistStorage.retrieveAllArtists();
    }

    @GetMapping("/api/artist/{id}/")
    public Artist retrieveArtistById(@PathVariable long id){
        return artistStorage.retrieveArtistById(id);
    }

    @PostMapping("/api/artists/add/")
    public Collection <Artist> createNewArtist(@RequestBody Artist artist){
        artistStorage.save(artist);
        return artistStorage.retrieveAllArtists();
    }

    @PatchMapping("/api/artist/{artistId}/addAlbum/")
    public Artist addAlbumToArtist(@PathVariable long artistId, @RequestBody Album album){
        Artist artist = artistStorage.retrieveArtistById(artistId);
        Album albumToAdd = new Album(album.getTitle(), artist, album.getRecordLabel(), album.getImageSource());
        albumStorage.save(albumToAdd);
        return albumToAdd.getArtist();
    }
    @DeleteMapping("/api/artists/{artistId}/")
    public Collection<Artist> deleteArtist(@PathVariable long artistId){
        artistStorage.delete(artistId);
        return artistStorage.retrieveAllArtists();
    }

}
