import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroContent } from '@/lib/data';
import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = getPlaceholderImage('heroImage');

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
          {heroContent.headline}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
          {heroContent.subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={heroContent.cta1.href}>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              <heroContent.cta1.icon className="mr-2 h-5 w-5" />
              {heroContent.cta1.label}
            </Button>
          </Link>
          <Link href={heroContent.cta2.href} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <heroContent.cta2.icon className="mr-2 h-5 w-5" />
              {heroContent.cta2.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
