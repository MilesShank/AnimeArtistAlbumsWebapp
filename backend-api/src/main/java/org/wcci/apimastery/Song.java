package org.wcci.apimastery;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String songTitle;
    private String songLink;
    private String songDuration;
    @ManyToOne
    private Album albums;
    @ManyToOne
    private Artist artists;

    public Song(String songTitle, String songLink, String songDuration) {
        this.songTitle = songTitle;
        this.songLink = songLink;
        this.songDuration = songDuration;
    }

    protected Song(){}

    public long getId() {
        return id;
    }

    public String getSongTitle() {
        return songTitle;
    }

    public String getSongLink() {
        return songLink;
    }

    public String getSongDuration() {
        return songDuration;
    }

    public Album getAlbums() {
        return albums;
    }

    public Artist getArtists() {
        return artists;
    }
}
