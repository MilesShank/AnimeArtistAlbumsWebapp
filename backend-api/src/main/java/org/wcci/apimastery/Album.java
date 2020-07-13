package org.wcci.apimastery;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String image;
    private String title;
    private String recordLabel;
    @ManyToOne
    private Artist artist;
    @OneToMany
    private Collection<Song> songs;

    protected Album() {
    }

    public Album(String title, String recordLabel, String image) {
        this.image = image;
        this.title = title;
        this.recordLabel = recordLabel;
    }

    public Long getId() {
      return id;
    }

    public String getImage() {
        return image;
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
}
