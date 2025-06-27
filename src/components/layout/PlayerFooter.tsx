import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Heart,
  ListMusic
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PlayerFooter: React.FC = () => {
  console.log('PlayerFooter loaded');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t z-50">
      <div className="container mx-auto h-full grid grid-cols-3 items-center">
        {/* Song Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 rounded-md">
            <AvatarImage src="https://i.scdn.co/image/ab67616d00001e0284f940384598227318c64a8e" alt="Album Art" />
            <AvatarFallback className="rounded-md bg-blue-300"></AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm truncate">Yume o Kanaete Doraemon</p>
            <p className="text-xs text-muted-foreground">mao</p>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500" />
          </Button>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        {/* Volume and Queue */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="ghost" size="icon">
            <ListMusic className="h-5 w-5 text-muted-foreground" />
            <span className="sr-only">View Queue</span>
          </Button>
          <div className="flex items-center gap-2 w-32">
            <Volume2 className="h-5 w-5 text-muted-foreground" />
            <Slider defaultValue={[80]} max={100} step={1} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PlayerFooter;