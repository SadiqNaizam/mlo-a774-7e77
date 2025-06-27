import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Play, MoreHorizontal, PlusCircle, Heart } from 'lucide-react';
import { toast } from 'sonner';

// Define the shape of a song object
export interface Song {
  id: string;
  trackNumber: number;
  title: string;
  artist: string;
  album: string;
  duration: string; // e.g., "3:45"
  imageUrl: string;
}

interface SongListItemProps {
  song: Song;
  // In a real app, these would be function props like:
  // onPlay: (songId: string) => void;
  // onAddToPlaylist: (songId:string) => void;
}

const SongListItem: React.FC<SongListItemProps> = ({ song }) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log('SongListItem loaded for:', song.title);

  const handleAddToPlaylist = () => {
    toast.success(`'${song.title}' has been added to a playlist.`);
    // In a real app, this would likely open a playlist selection dialog.
    console.log(`Trigger add to playlist for song: ${song.id}`);
  };

  const handleAddToLiked = () => {
    toast.success(`Added '${song.title}' to your Liked Songs.`);
    console.log(`Added song to liked: ${song.id}`);
  };
  
  const handlePlay = () => {
    toast.info(`Playing '${song.title}' by ${song.artist}.`);
    // In a real app, this would trigger the music player context.
    console.log(`Playing song: ${song.id}`);
  };

  return (
    <div
      className="group grid grid-cols-[auto,1fr,1fr,auto] items-center gap-4 px-4 py-2 rounded-md hover:bg-blue-100/50 dark:hover:bg-blue-900/20 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track Number / Play Button */}
      <div className="flex items-center justify-center w-8 text-sm text-gray-500 dark:text-gray-400">
        {isHovered ? (
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePlay}>
            <Play className="h-4 w-4 fill-current" />
          </Button>
        ) : (
          <span>{song.trackNumber}</span>
        )}
      </div>

      {/* Title & Artist */}
      <div className="flex items-center gap-4 truncate">
        <img
          src={song.imageUrl || 'https://via.placeholder.com/40'}
          alt={song.album}
          className="h-10 w-10 rounded-sm object-cover"
        />
        <div className="truncate">
          <p className="font-semibold text-gray-800 dark:text-gray-100 truncate">{song.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{song.artist}</p>
        </div>
      </div>

      {/* Album */}
      <div className="truncate text-sm text-gray-600 dark:text-gray-400 hidden md:block">
        {song.album}
      </div>

      {/* Duration & Context Menu */}
      <div className="flex items-center justify-end gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span className="w-12 text-right">{song.duration}</span>
        <div className="w-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 ${isHovered ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleAddToPlaylist}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Add to playlist</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleAddToLiked}>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Add to Liked Songs</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SongListItem;