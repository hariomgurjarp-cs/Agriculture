import { Card, CardContent } from '@/components/ui/card';
import { whyUsReasons } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export function WhyUs() {
  return (
    <section id="why-us">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">✅ Kyun Humein Chunein?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {whyUsReasons.map((reason, index) => (
          <Card key={index} className="bg-card">
            <CardContent className="p-6 flex items-center gap-4">
              <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
              <p className="font-medium">{reason}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
