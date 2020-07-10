package org.wcci.apimastery;

import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ArtistStorage {

    private ArtistRepository artistRepo;

    public ArtistStorage(ArtistRepository artistRepo) {
        this.artistRepo = artistRepo;
    }

    public Artist save(Artist artist) {
        return artistRepo.save(artist);
    }

    public void delete(long id) {
        artistRepo.deleteById(id);
    }

    public Collection<Artist> retrieveAllArtists() {
        return (Collection<Artist>) artistRepo.findAll();
    }

    public Artist retrieveArtistById(long id) {
        return artistRepo.findById(id).get();
    }
}
