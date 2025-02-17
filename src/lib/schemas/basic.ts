import { FEEDBACK_TYPE_OPTIONS_VALUES } from '@/constants/basic'
import { z } from 'zod'

export const basicFormSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  feedbackType: z.enum(
    Object.keys(FEEDBACK_TYPE_OPTIONS_VALUES) as [string, ...string[]],
    {
      message: 'Please select a valid feedback type',
    },
  ),
  comment: z
    .string()
    .nonempty('Comment is required')
    .min(10, { message: 'Message must be at least 10 characters' }),
})
