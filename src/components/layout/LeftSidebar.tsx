import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Search, Library, PlusCircle, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-4 py-2 rounded-md transition-colors text-sm font-medium ${
      isActive
        ? 'bg-muted text-primary'
        : 'text-muted-foreground hover:bg-muted/50 hover:text-primary'
    }`;
  
  // Placeholder data for user playlists
  const playlists = [
    { id: '1', name: "Doraemon's Favorites" },
    { id: '2', name: 'Chill Vibes' },
    { id: '3', name: '22nd Century Beats' },
    { id: '4', name: 'Study with Nobita' },
    { id: '5', name: 'Anywhere Door Adventures' },
    { id: '6', name: 'Time Machine Grooves' },
    { id: '7', name: 'Sentimental Dorayaki' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-background border-r h-screen sticky top-0">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-blue-500" />
          <h1 className="text-xl font-bold">DoraeTunes</h1>
        </Link>
      </div>
      
      <nav className="flex flex-col p-4 space-y-2">
        <NavLink to="/" className={navLinkClasses}>
          <Home className="h-5 w-5" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/search" className={navLinkClasses}>
          <Search className="h-5 w-5" />
          <span>Search</span>
        </NavLink>
        <NavLink to="/library" className={navLinkClasses}>
          <Library className="h-5 w-5" />
          <span>Your Library</span>
        </NavLink>
      </nav>

      <Separator className="mx-4 my-2" />
      
      <div className="flex-1 flex flex-col p-4 pt-0 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight">Playlists</h2>
            <Button variant="ghost" size="icon">
                <PlusCircle className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Create Playlist</span>
            </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-1 pr-4">
            {playlists.map((playlist) => (
              <Button
                key={playlist.id}
                variant="ghost"
                className="w-full justify-start font-normal text-muted-foreground"
                asChild
              >
                <Link to={`/playlist`}>
                  {playlist.name}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default LeftSidebar;