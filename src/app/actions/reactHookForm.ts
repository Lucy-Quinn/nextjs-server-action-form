'use server'

import { reactHookFormSchema } from '@/lib/schemas/reactHookForm'
import { ReactHookFormResponse } from '@/types/forms'

export async function submitReactHookForm(
  _: unknown,
  formData: FormData,
): Promise<ReactHookFormResponse> {
  const validatedFields = reactHookFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    shoppingPreference: formData.get('shoppingPreference'),
    dateOfBirth: formData.get('dateOfBirth'),
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
