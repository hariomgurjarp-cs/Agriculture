import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { productCategories, crops } from '@/lib/data';
import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export function ProductCategories() {
  return (
    <section id="products" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">🌾 Products Section</h2>
        <p className="text-muted-foreground mt-2">Hum in categories ki dawai faraham karte hain:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {productCategories.map((category) => {
          const image = getPlaceholderImage(category.image);
          return (
            <Card key={category.name} className="overflow-hidden text-center hover:shadow-lg transition-shadow">
              {image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <category.icon className="h-6 w-6 text-primary" />
                  <span>{category.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">({category.urduName})</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-headline font-semibold mb-4">Faslein:</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {crops.map((crop) => (
            <Badge key={crop} variant="outline" className="text-lg px-4 py-1 border-accent text-accent-foreground">
              {crop}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 text-lg">
        👉 Original packing, proper guidance ke sath.
        </p>
      </div>
    </section>
  );
}
