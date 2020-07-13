package org.wcci.apimastery;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class AlbumController {

    AlbumStorage albumStorage;

    public AlbumController(AlbumStorage albumStorage){
        this.albumStorage = albumStorage;
    }

    @GetMapping("/api/albums/")
    public Collection<Album> retrieveAllAlbums(){
        return albumStorage.retrieveAllAlbums();
    }

    @GetMapping("/api/album/{id}/")
    public Album retrieveAlbumById(@PathVariable long id){
        return albumStorage.retrieveAlbumById(id);
    }
    @DeleteMapping("/api/album/{id}/")
    public Collection<Album> deleteAlbum(@PathVariable long id){
        albumStorage.delete(id);
        return albumStorage.retrieveAllAlbums();

    }


}
