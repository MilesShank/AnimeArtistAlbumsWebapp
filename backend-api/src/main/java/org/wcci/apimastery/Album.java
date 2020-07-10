package org.wcci.apimastery;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private long id;
    private String image;
    private String title;
    private String recordLabel;
    @ManyToOne
    private Artist artist;
    @OneToMany
    private Collection<Song> songs;

    protected Album() {
    }

    public Album(String image, String title, String recordLabel) {
        this.image = image;
        this.title = title;
        this.recordLabel = recordLabel;
    }

    public long getId() {
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
