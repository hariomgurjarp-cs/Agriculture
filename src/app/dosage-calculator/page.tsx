import { DosageForm } from './dosage-form';

export default function DosageCalculatorPage() {
  return (
    <main className="container py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-headline mb-4">AI Dosage Calculator</h1>
        <p className="text-muted-foreground mb-8">
          Enter your crop details below to get an AI-powered dosage recommendation for your product.
          This tool helps you use the right amount for best results.
        </p>
      </div>
      <DosageForm />
    </main>
  );
}
