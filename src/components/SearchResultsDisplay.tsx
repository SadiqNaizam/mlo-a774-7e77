import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Assuming these custom components already exist
import SongListItem from '@/components/SongListItem';
import ContentGrid from '@/components/ContentGrid';

// Mock data to simulate search results
const mockSongs = [
  { id: 's1', title: "Doraemon no Uta", artist: "Kumiko Osugi", album: "Doraemon Best Hits", duration: "2:55" },
  { id: 's2', title: "Yume wo Kanaete Doraemon", artist: "Mao", album: "Doraemon TV Theme Songs", duration: "4:06" },
  { id: 's3', title: "Aoi Sora wa Pocket sa", artist: "Kumiko Osugi", album: "Doraemon Best Hits", duration: "2:30" },
  { id: 's4', title: "Boku Doraemon", artist: "Nobuyo Ōyama", album: "Classic Doraemon", duration: "2:15" },
];

const mockArtists = [
  { id: 'a1', name: "Kumiko Osugi", imageUrl: 'https://via.placeholder.com/150/0077c2/ffffff?text=KO' },
  { id: 'a2', name: "Mao", imageUrl: 'https://via.placeholder.com/150/f9d423/000000?text=M' },
  { id: 'a3', name: "Nobuyo Ōyama", imageUrl: 'https://via.placeholder.com/150/d9534f/ffffff?text=NŌ' },
];

const mockAlbums = [
  { id: 'al1', title: "Doraemon Best Hits", artist: "Various Artists", imageUrl: 'https://via.placeholder.com/300/0077c2/ffffff?text=Hits' },
  { id: 'al2', title: "Doraemon TV Theme Songs", artist: "Various Artists", imageUrl: 'https://via.placeholder.com/300/f9d423/000000?text=Themes' },
  { id: 'al3', title: "Classic Doraemon", artist: "Nobuyo Ōyama", imageUrl: 'https://via.placeholder.com/300/d9534f/ffffff?text=Classic' },
  { id: 'al4', title: "Doraemon Movie Soundtracks", artist: "Various Artists", imageUrl: 'https://via.placeholder.com/300/5cb85c/ffffff?text=Movies' },
];


const SearchResultsDisplay: React.FC = () => {
  console.log('SearchResultsDisplay loaded');

  // In a real app, you might get results as a prop and show a "No results" message.
  // For this preview, we will assume there are always results.

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <Tabs defaultValue="songs" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
        </TabsList>

        <TabsContent value="songs" className="mt-4">
          <div className="flex flex-col">
            {mockSongs.map((song, index) => (
              <SongListItem
                key={song.id}
                trackNumber={index + 1}
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="artists" className="mt-4">
          <ContentGrid title="Top Artist Results">
            {mockArtists.map(artist => (
              <Card key={artist.id} className="w-full p-4 flex flex-col items-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                <Avatar className="w-28 h-28 mb-4 shadow-lg">
                  <AvatarImage src={artist.imageUrl} alt={artist.name} />
                  <AvatarFallback className="text-3xl">{artist.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <p className="text-md font-semibold">{artist.name}</p>
              </Card>
            ))}
          </ContentGrid>
        </TabsContent>

        <TabsContent value="albums" className="mt-4">
          <ContentGrid title="Top Album Results">
            {mockAlbums.map(album => (
              <Card key={album.id} className="w-full overflow-hidden group border-0 bg-transparent hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-0">
                  <AspectRatio ratio={1 / 1} className="mb-2">
                    <img src={album.imageUrl} alt={album.title} className="object-cover w-full h-full rounded-md" />
                  </AspectRatio>
                  <p className="font-semibold text-sm truncate">{album.title}</p>
                  <p className="text-xs text-muted-foreground">{album.artist}</p>
                </CardContent>
              </Card>
            ))}
          </ContentGrid>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchResultsDisplay;