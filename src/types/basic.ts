type BasicFormFields = {
  name?: string[]
  email?: string[]
  feedbackType?: string[]
  comment?: string[]
}

type ActionResponse<T extends Record<string, string[]>> = {
  success: boolean
  message?: string
  error?: T
  payload?: FormData
}

export type BasicFormResponse = ActionResponse<BasicFormFields>

export type BasicFormField = {
  label: string
  name: string
  type: FieldType
  placeholder?: string
  image?: { src: string; alt: string }
}

export enum FieldType {
  SELECT = 'select',
  INPUT = 'text',
  TEXTAREA = 'textarea',
}
