import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { User, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

const MainHeader: React.FC = () => {
  console.log('MainHeader loaded');

  return (
    <header className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      {/* Navigation buttons - can be wired up to react-router history later */}
      <div className="hidden md:flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-grow" />

      {/* User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              {/* Placeholder for user avatar image */}
              <AvatarImage src="/placeholder-user.jpg" alt="@doraemon" />
              <AvatarFallback className="bg-blue-400 text-white">D</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Doraemon</p>
              <p className="text-xs leading-none text-muted-foreground">
                doraemon@future.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
             <User className="mr-2 h-4 w-4" />
             <span>Profile</span>
          </DropdownMenuItem>
          <Link to="/settings">
            <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default MainHeader;