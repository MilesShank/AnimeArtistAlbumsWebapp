package org.wcci.apimastery;

import org.springframework.stereotype.Service;

@Service
public class AlbumStorage {
    private AlbumRepository albumRepo;

    public AlbumStorage(AlbumRepository albumRepo) {
        this.albumRepo = albumRepo;
    }
    public Album save(Album album){
        return albumRepo.save(album);
    }
}
