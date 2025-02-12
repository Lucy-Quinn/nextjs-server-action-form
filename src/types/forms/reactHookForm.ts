import { ActionResponse } from '@/types/common'

export type ReactHookFormFields = {
  name?: string
  email?: string
  shoppingPreference?: string
  dateOfBirth?: string
}

export type ReactHookFormErrors = Partial<Record<keyof ReactHookFormFields, string[]>>

export type ReactHookFormResponse = ActionResponse<ReactHookFormErrors>
