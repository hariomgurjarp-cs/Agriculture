import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">🧑‍🌾 Farmers Feedback</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {testimonials.map((testimonial, index) => {
          const image = getPlaceholderImage(testimonial.image);
          return (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-8 text-center">
                <blockquote className="text-xl italic text-foreground mb-6">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  {image && (
                    <Avatar>
                      <AvatarImage
                        src={image.imageUrl}
                        alt={testimonial.author}
                        data-ai-hint={image.imageHint}
                      />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.area}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
        <p className="text-center text-muted-foreground mt-4">(Agar real customers hain to unke naam + area add karo — bohot impact hota hai)</p>
    </section>
  );
}
