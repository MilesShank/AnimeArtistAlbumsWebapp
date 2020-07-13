package org.wcci.apimastery;

import org.springframework.stereotype.Service;

@Service
public class SongStorage {

    private SongRepository songRepo;
    public SongStorage(SongRepository songRepo) {
        this.songRepo = songRepo;
    }

    public Song retrieveSongById(long id) {
        return songRepo.findById(id).get();
    }

    public Song save(Song song) {
        return songRepo.save(song);
    }

    public void delete(long id) {
        songRepo.deleteById(id);
    }
}
