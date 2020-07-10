package org.wcci.apimastery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Artist {
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany(mappedBy = "artist")
    private Collection<Album> albums;
    private String description;
    private String recordLabel;
    private String imageSource;
    private String name;

    public Artist(Long id, String description, String recordLabel, String imageSource, String name) {
        this.id = id;
        this.description = description;
        this.recordLabel = recordLabel;
        this.imageSource = imageSource;
        this.name = name;
    }

    protected Artist() {
    }

    public Long getId() {
        return id;
    }

    public Collection<Album> getAlbums() {
        return albums;
    }

    public String getDescription() {
        return description;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public String getImageSource() {
        return imageSource;
    }

    public String getName() {
        return name;
    }
}
