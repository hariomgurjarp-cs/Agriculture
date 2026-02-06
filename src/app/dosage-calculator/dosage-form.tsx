'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getDosageRecommendation, dosageSchema } from './actions';
import { useToast } from '@/hooks/use-toast';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Loader2 } from 'lucide-react';

const initialState = {
  success: false,
  message: undefined,
  errors: undefined,
  recommendation: undefined,
  reasoning: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Recommendation...
        </>
      ) : (
        'Calculate Dosage'
      )}
    </Button>
  );
}

export function DosageForm() {
  const [state, formAction] = useFormState(getDosageRecommendation, initialState);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof dosageSchema>>({
    resolver: zodResolver(dosageSchema),
    defaultValues: {
      productName: '',
      cropType: '',
      area: '',
      fieldConditions: '',
    },
  });
  
  useEffect(() => {
    if (state.success === false) {
      if (state.errors) {
        state.errors.forEach((error) => {
          form.setError(error.path[0] as keyof z.infer<typeof dosageSchema>, {
            message: error.message,
          });
        });
      } else if (state.message) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: state.message,
        });
      }
    }
    if (state.success === true) {
      form.reset();
    }
  }, [state, form, toast]);


  return (
    <Card className="max-w-2xl mx-auto">
      <Form {...form}>
        <form
          action={formAction}
        >
          <CardHeader>
            <CardTitle>Crop Details</CardTitle>
            <CardDescription>Fill in the details to get a personalized dosage recommendation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. SuperGuard" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cropType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Crop Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Cotton" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area / Region</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Punjab" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fieldConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Conditions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe weather, soil type, and pest presence..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Form>

      {state.success && state.recommendation && (
        <Card className="max-w-2xl mx-auto mt-8 bg-secondary border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="text-primary" />
              AI Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Recommended Dosage:</h3>
              <p className="text-foreground">{state.recommendation}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Reasoning:</h3>
              <p className="text-muted-foreground">{state.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </Card>
  );
}
