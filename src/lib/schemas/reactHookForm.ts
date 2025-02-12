import { z } from 'zod'

const SHOPPING_PREFERENCE_OPTIONS = [
  'trainers',
  'running',
  'training',
  'fashion',
] as const

export const reactHookFormSchema = z.object({
  name: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  shoppingPreference: z.enum(SHOPPING_PREFERENCE_OPTIONS, {
    message: 'Please select a valid shopping preference',
  }),
  dateOfBirth: z.string().min(10, 'Date of birth must be at least 10 characters'),
})
