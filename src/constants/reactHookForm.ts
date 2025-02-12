import { FieldType, FormField } from '@/types/common'

export const REACT_HOOK_FORM_FIELDS: FormField[] = [
  {
    label: 'Name  ',
    name: 'name',
    type: FieldType.INPUT,
    placeholder: 'Enter your name',
  },
  {
    label: 'Email',
    name: 'email',
    type: FieldType.INPUT,
    placeholder: 'Enter your email',
  },
  {
    label: 'Date of Birth',
    name: 'dateOfBirth',
    type: FieldType.DATE,
    placeholder: 'Enter your date of birth',
  },
  {
    label: 'Shopping Preference',
    name: 'shoppingPreference',
    type: FieldType.SELECT,
    placeholder: 'Select a shopping preference',
  },
] as const

export const SHOPPING_PREFERENCE_OPTIONS_VALUES = {
  trainers: 'Trainers',
  running: 'Running',
  training: 'Training',
  fashion: 'Fashion',
}
