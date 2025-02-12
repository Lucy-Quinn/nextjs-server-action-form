import { ActionResponse } from '@/types/common'

export type BasicFormValues = {
  name?: string
  email?: string
  feedbackType?: string
  comment?: string
}

export type BasicFormErrors = Partial<Record<keyof BasicFormValues, string[]>>

export type BasicFormResponse = ActionResponse<BasicFormErrors>
