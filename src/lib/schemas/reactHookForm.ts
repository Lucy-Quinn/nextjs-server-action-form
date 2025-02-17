import { SHOPPING_PREFERENCE_OPTIONS_VALUES } from '@/constants/reactHookForm'
import { z } from 'zod'

export const reactHookFormSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  shoppingPreference: z.enum(
    Object.keys(SHOPPING_PREFERENCE_OPTIONS_VALUES) as [string, ...string[]],
    {
      message: 'Please select a valid shopping preference',
    },
  ),
  dateOfBirth: z.string().refine((dob) => {
    const date = new Date(dob)
    const today = new Date()
    const age = today.getFullYear() - date.getFullYear()
    return age >= 13
  }, 'You must be at least 13 years old'),
})
