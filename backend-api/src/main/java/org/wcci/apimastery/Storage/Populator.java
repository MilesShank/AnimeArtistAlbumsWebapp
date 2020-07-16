package org.wcci.apimastery.Storage;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.Entities.Album;
import org.wcci.apimastery.Entities.Artist;
import org.wcci.apimastery.Entities.Song;
import org.wcci.apimastery.Storage.AlbumStorage;
import org.wcci.apimastery.Storage.ArtistStorage;
import org.wcci.apimastery.Storage.SongStorage;

@Component
public class Populator implements CommandLineRunner {

    ArtistStorage artistStorage;
    AlbumStorage albumStorage;
    SongStorage songStorage;

    public Populator(ArtistStorage artistStorage, AlbumStorage albumStorage, SongStorage songStorage) {
        this.artistStorage = artistStorage;
        this.albumStorage = albumStorage;
        this.songStorage = songStorage;
    }

    @Override
    public void run(String...args) throws Exception {
        Artist artist1= new Artist("Asian Kung-Fu Generation", "Naruto Artist", "Kioon Record Label", "src/images/naruto-artist.jpg");
        Artist artist2= new Artist("Yoko Kanno", "Composer for the Cowboy Bebop Soundtrack", "Victor Entertainment", "src/images/cowboy-artist.jpg");
        Artist artist3= new Artist("Mika Nakashima", "Singer for Kiss Of Death, Darling in the Franxx OP", "Sony Music Entertainment", "src/images/darling-artist.jpg");
        Artist artist4= new Artist("Nightmare", "Band for the DeathNote OP", "Nippon Crown","src/images/deathnote-artist.jpg");
        artistStorage.save(artist1);
        artistStorage.save(artist2);
        artistStorage.save(artist3);
        artistStorage.save(artist4);

        Album narutoAlbum= new Album("Naruto Album", artist1, "Kioon", "src/images/naruto-image.jpg");
        Album cowboyAlbum= new Album("Cowboy Bebop", artist2, "Victor Entertainment", "src/images/cowboy-image.jpg");
        Album darlingAlbum= new Album("Kiss of Death", artist3, "Sony Music Entertainment Japan", "src/images/darling-image.jpg");
        Album deathnoteAlbum= new Album("The WORLD", artist4, "Nippon Crown", "src/images/deathnote-image.jpg");
        albumStorage.save(narutoAlbum);
        albumStorage.save(cowboyAlbum);
        albumStorage.save(darlingAlbum);
        albumStorage.save(deathnoteAlbum);

        Song narutoSong= new Song("Haruka Kanata", "https://www.youtube.com/watch?v=nJ6A6GC_ki4", "4:06");
        Song cowboySong= new Song("Tank","https://www.youtube.com/watch?v=n2rVnRwW0h8", "3:31");
        Song darlingSong= new Song("Kiss of Death", "https://www.youtube.com/watch?v=mzJqxT1UGho", "4:10");
        Song deathnoteSong= new Song("The WORLD", "https://www.youtube.com/watch?v=btD61Bq0XJo", "3:37");
        songStorage.save(narutoSong);
        songStorage.save(cowboySong);
        songStorage.save(darlingSong);
        songStorage.save(deathnoteSong);



    }

}
