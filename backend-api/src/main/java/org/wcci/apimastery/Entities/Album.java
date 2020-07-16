package org.wcci.apimastery.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String imageSource;
    private String title;
    private String recordLabel;
    @JsonIgnore
    @ManyToOne
    private Artist artist;
    @OneToMany
    private Collection<Song> songs;

    protected Album() {
    }

    public Album(String title, Artist artist, String recordLabel, String imageSource) {
        this.imageSource = imageSource;
        this.artist = artist;
        this.title = title;
        this.recordLabel = recordLabel;
    }

    public Long getId() {
      return id;
    }

    public String getImageSource() {
        return imageSource;
    }

    public String getTitle() {
        return title;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public Collection<Song> getSongs() {
        return songs;
    }

    public Artist getArtist() {
        return artist;
    }
}
