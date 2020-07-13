package org.wcci.apimastery;

import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AlbumStorage {
    private AlbumRepository albumRepo;

    public Collection<Album> retrieveAllAlbums(){
        return (Collection<Album>) albumRepo.findAll();
    }
    public Album retrieveAlbumById(long id){
        return albumRepo.findById(id).get();
    }
    public AlbumStorage(AlbumRepository albumRepo) {
        this.albumRepo = albumRepo;
    }
    public Album save(Album album){
        return albumRepo.save(album);
    }
    public void delete(long id){
        albumRepo.deleteById(id);
    }


}
