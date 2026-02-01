// src/ai/flows/calculate-dosage.ts
'use server';
/**
 * @fileOverview A dosage calculator AI agent.
 *
 * - calculateDosage - A function that handles the dosage calculation process.
 * - CalculateDosageInput - The input type for the calculateDosage function.
 * - CalculateDosageOutput - The return type for the calculateDosage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CalculateDosageInputSchema = z.object({
  cropType: z.string().describe('The type of crop for which dosage is needed.'),
  area: z.string().describe('The area or region where the crop is grown.'),
  fieldConditions: z
    .string()
    .describe('The current field conditions, including weather, soil type, and pest presence.'),
  productName: z.string().describe('The name of the product to be used.'),
});
export type CalculateDosageInput = z.infer<typeof CalculateDosageInputSchema>;

const CalculateDosageOutputSchema = z.object({
  dosageRecommendation: z
    .string()
    .describe('The recommended dosage of the product based on the provided inputs.'),
  reasoning: z.string().describe('The reasoning behind the dosage recommendation.'),
});
export type CalculateDosageOutput = z.infer<typeof CalculateDosageOutputSchema>;

export async function calculateDosage(input: CalculateDosageInput): Promise<CalculateDosageOutput> {
  return calculateDosageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'calculateDosagePrompt',
  input: {schema: CalculateDosageInputSchema},
  output: {schema: CalculateDosageOutputSchema},
  prompt: `You are an expert agricultural advisor, skilled in recommending appropriate dosages for crop protection products.

  Based on the following information, provide a dosage recommendation for the specified product. Include a brief explanation of your reasoning.

  Crop Type: {{{cropType}}}
  Area: {{{area}}}
  Field Conditions: {{{fieldConditions}}}
  Product Name: {{{productName}}}

  Please provide the dosage recommendation and your reasoning.`,
});

const calculateDosageFlow = ai.defineFlow(
  {
    name: 'calculateDosageFlow',
    inputSchema: CalculateDosageInputSchema,
    outputSchema: CalculateDosageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
