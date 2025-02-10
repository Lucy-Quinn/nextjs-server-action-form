'use server'

import { basicFormSchema } from '@/lib/schemas/basic'
import { BasicFormResponse } from '@/types/basic'

export async function submitBasicForm(_: unknown, formData: FormData): Promise<BasicFormResponse> {
  const validatedFields = basicFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    feedbackType: formData.get('feedbackType'),
    comment: formData.get('comment'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
      payload: formData,
    }
  }

  return {
    success: true,
    message: 'Form successfully submitted!',
  }
}
