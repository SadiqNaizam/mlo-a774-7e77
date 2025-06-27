import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PlayCircle } from 'lucide-react';

// Interface for a single item in the grid
interface ContentItem {
  id: string | number;
  slug: string;
  title: string;
  description: string; // e.g., Artist name or "Playlist"
  imageUrl: string;
}

// Props for the ContentGrid component
interface ContentGridProps {
  title: string;
  items: ContentItem[];
}

const ContentGrid: React.FC<ContentGridProps> = ({ title, items }) => {
  console.log('ContentGrid loaded with title:', title);

  if (!items || items.length === 0) {
    return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 px-4 md:px-0">{title}</h2>
        <p className="text-muted-foreground px-4 md:px-0">Nothing to display here yet.</p>
      </section>
    );
  }

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 px-4 md:px-0">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4 md:px-0">
        {items.map((item) => (
          <Link to={`/playlist/${item.slug}`} key={item.id} className="group relative block">
            <Card className="w-full overflow-hidden transition-all duration-300 hover:bg-muted/50 hover:shadow-lg">
              <CardHeader className="p-0">
                <AspectRatio ratio={1 / 1} className="relative">
                  <img
                    src={item.imageUrl || 'https://placehold.co/300x300/9ca3af/ffffff?text=Album'}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-3">
                <CardTitle className="text-sm font-semibold truncate hover:underline">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs truncate">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;