import { FEEDBACK_TYPE_OPTIONS_VALUES } from '@/constants/basic'
import { ActionResponse } from '@/types/common'
export type BasicFormValues = {
  name?: string
  email?: string
  feedbackType?: typeof FEEDBACK_TYPE_OPTIONS_VALUES
  comment?: string
}

export type BasicFormErrors = Partial<Record<keyof BasicFormValues, string[]>>

export type BasicFormResponse = ActionResponse<BasicFormErrors>
