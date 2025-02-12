export type ActionResponse<T extends Record<string, string[]>> = {
  success: boolean
  message?: string
  error?: T
  payload?: FormData
}

export type FormField = {
  //FormFieldDefinition
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
  DATE = 'date',
}
