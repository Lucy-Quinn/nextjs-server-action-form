import { SHOPPING_PREFERENCE_OPTIONS_VALUES } from '@/constants/reactHookForm'
import { reactHookFormSchema } from '@/lib/schemas/reactHookForm'
import { ActionResponse } from '@/types/common'
import { z } from 'zod'

export type ReactHookFormFields = {
  name: string
  email: string
  shoppingPreference: typeof SHOPPING_PREFERENCE_OPTIONS_VALUES
  dateOfBirth: string
}

export type ReactHookFormErrors = {
  [K in keyof ReactHookFormFields]?: string[]
}

export type ReactHookFormResponse = ActionResponse<ReactHookFormErrors>

export type Inputs = z.infer<typeof reactHookFormSchema>
