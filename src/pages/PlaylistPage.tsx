import React from 'react';
import MainHeader from '@/components/layout/MainHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import PlayerFooter from '@/components/layout/PlayerFooter';
import SongListItem, { Song } from '@/components/SongListItem';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Play, MoreHorizontal, Clock, ListMusic, UserPlus, Trash2 } from 'lucide-react';

// Placeholder data for the playlist page
const playlistDetails = {
  name: "Doraemon's Favorites",
  creator: 'Doraemon',
  coverArtUrl: 'https://i.pinimg.com/736x/21/dc/9f/21dc9f37936d3579f1c7515598696d00.jpg',
  description: 'A collection of futuristic tunes and nostalgic melodies.',
};

const songs: Song[] = [
  {
    id: '1',
    trackNumber: 1,
    title: 'Yume o Kanaete Doraemon',
    artist: 'mao',
    album: 'Doraemon Theme Songs',
    duration: '3:56',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e0284f940384598227318c64a8e',
  },
  {
    id: '2',
    trackNumber: 2,
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    album: 'Stand by Me Doraemon',
    duration: '5:15',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e9a58c0e7f7f3a07e9a5d3c5',
  },
  {
    id: '3',
    trackNumber: 3,
    title: 'Boku Note',
    artist: 'Sukima Switch',
    album: 'Doraemon: Nobita\'s Dinosaur 2006',
    duration: '4:54',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02b7c6c1c4c1c2c8a1c8b3c3c1',
  },
  {
    id: '4',
    trackNumber: 4,
    title: 'Tomodachi no Uta',
    artist: 'BUMP OF CHICKEN',
    album: 'Doraemon: New Nobita\'s Great Demon',
    duration: '6:14',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a4b8a4b8a4b8a4b8a4b8a4b8',
  },
];

const PlaylistPage = () => {
  console.log('PlaylistPage loaded');

  return (
    <div className="flex h-screen bg-background text-foreground">
      <LeftSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <MainHeader />
        <ScrollArea className="flex-1">
          <div className="pb-28"> {/* Padding for the fixed PlayerFooter */}
            {/* Playlist Header */}
            <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-b from-blue-300/60 dark:from-blue-800/60 to-transparent">
              <img
                src={playlistDetails.coverArtUrl}
                alt={playlistDetails.name}
                className="w-48 h-48 md:w-56 md:h-56 rounded-lg shadow-2xl object-cover"
              />
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="text-sm font-bold">Playlist</span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">{playlistDetails.name}</h1>
                <p className="text-muted-foreground">{playlistDetails.description}</p>
                <p className="text-sm mt-2">
                  Created by <span className="font-semibold text-primary">{playlistDetails.creator}</span>
                  <span className="mx-2">&bull;</span>
                  {songs.length} songs
                </p>
              </div>
            </section>

            {/* Action Bar */}
            <div className="flex items-center gap-4 px-8 py-6">
              <Button size="lg" className="rounded-full w-14 h-14 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white">
                <Play className="h-7 w-7 fill-current" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-12 h-12">
                    <MoreHorizontal className="h-8 w-8 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <ListMusic className="mr-2 h-4 w-4" />
                    <span>Add to queue</span>
                  </DropdownMenuItem>
                   <DropdownMenuItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite collaborators</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500 focus:text-red-500">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete playlist</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Song List */}
            <div className="px-8">
                {/* Header Row */}
                <div className="grid grid-cols-[auto,1fr,1fr,auto] items-center gap-4 px-4 py-2 border-b border-muted text-muted-foreground text-sm font-semibold">
                    <div className="w-8 text-center">#</div>
                    <div>Title</div>
                    <div className="hidden md:block">Album</div>
                    <div className="flex justify-end pr-10">
                        <Clock className="h-4 w-4" />
                    </div>
                </div>
                {/* Songs */}
                <div className="mt-4 space-y-1">
                    {songs.map((song) => (
                        <SongListItem key={song.id} song={song} />
                    ))}
                </div>
            </div>
          </div>
        </ScrollArea>
      </main>
      <PlayerFooter />
    </div>
  );
};

export default PlaylistPage;