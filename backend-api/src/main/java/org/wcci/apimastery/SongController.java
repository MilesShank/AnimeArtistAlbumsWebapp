package org.wcci.apimastery;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongController {

    SongStorage songStorage;

    public SongController(SongStorage songStorage) {
        this.songStorage = songStorage;

        }

    @GetMapping("/api/song/{id}/")
    public Song retrieveSongById(@PathVariable long id){
        return songStorage.retrieveSongById(id);
    }
}
