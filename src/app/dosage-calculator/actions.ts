'use server';

import { z } from 'zod';
import { calculateDosage } from '@/ai/flows/calculate-dosage';

export const dosageSchema = z.object({
  productName: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
  cropType: z.string().min(3, { message: 'Crop type must be at least 3 characters.' }),
  area: z.string().min(3, { message: 'Area/Region must be at least 3 characters.' }),
  fieldConditions: z.string().min(10, { message: 'Field conditions must be at least 10 characters.' }),
});

type DosageState = {
  message?: string;
  recommendation?: string;
  reasoning?: string;
  success: boolean;
  errors?: z.ZodIssue[];
};

export async function getDosageRecommendation(
  prevState: DosageState,
  formData: FormData
): Promise<DosageState> {
  const validatedFields = dosageSchema.safeParse({
    productName: formData.get('productName'),
    cropType: formData.get('cropType'),
    area: formData.get('area'),
    fieldConditions: formData.get('fieldConditions'),
  });

  if (!validatedFields.success) {
    const firstError = validatedFields.error.errors[0];
    return {
      message: firstError.message,
      errors: validatedFields.error.errors,
      success: false,
    };
  }

  try {
    const result = await calculateDosage(validatedFields.data);
    if (result.dosageRecommendation) {
        return {
            recommendation: result.dosageRecommendation,
            reasoning: result.reasoning,
            success: true,
        };
    }
    return { message: 'Could not get a recommendation from the AI. Please try again.', success: false };
  } catch (error) {
    console.error('Error in getDosageRecommendation:', error);
    return { message: 'An unexpected server error occurred. Please try again later.', success: false };
  }
}
