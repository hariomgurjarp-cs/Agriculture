'use server';

/**
 * @fileOverview A product description generation AI agent.
 *
 * - generateProductDescription - A function that generates a product description.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  companyName: z.string().describe('The name of the manufacturing company.'),
  category: z.string().describe('The category of the product (e.g., Insecticide, Fungicide, Herbicide, Plant Growth/Nutrition).'),
  crops: z.array(z.string()).describe('The crops for which the product is applicable (e.g., Cotton, Wheat, Rice, Corn, Vegetables).'),
  features: z.string().describe('Key features and benefits of the product.'),
});

export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling and informative product description.'),
});

export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(input: GenerateProductDescriptionInput): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are an expert in creating compelling product descriptions for agricultural products.

  Based on the following product details, generate a detailed and engaging product description that will attract farmers and highlight the product's key benefits. Mention the crops for which the product is applicable and its unique features. The product description must be in Urdu.

  Product Name: {{{productName}}}
  Company Name: {{{companyName}}}
  Category: {{{category}}}
  Crops: {{#each crops}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Features: {{{features}}}
  `,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
