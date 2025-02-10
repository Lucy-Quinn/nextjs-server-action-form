import { z } from 'zod'

const FEEDBACK_TYPE_OPTIONS = ['bug', 'feature', 'general', 'other'] as const

export const basicFormSchema = z.object({
  name: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  feedbackType: z.enum(FEEDBACK_TYPE_OPTIONS, {
    message: 'Please select a valid feedback type',
  }),
  comment: z.string().min(10, 'Message must be at least 10 characters'),
})
