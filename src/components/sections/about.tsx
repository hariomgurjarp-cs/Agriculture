import { aboutUsContent } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="text-center">
       <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">ℹ️ {aboutUsContent.title}</h2>
      </div>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
        {aboutUsContent.text}
      </p>
    </section>
  );
}
