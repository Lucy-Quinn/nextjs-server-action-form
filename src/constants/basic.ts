import { BasicFormField, FieldType } from '@/types/basic'

export const BASIC_FORM_FIELDS: BasicFormField[] = [
  {
    label: 'Name',
    name: 'name',
    type: FieldType.INPUT,
    placeholder: 'Enter your name',
    image: {
      src: '/person.svg',
      alt: 'person',
    },
  },
  {
    label: 'Email',
    name: 'email',
    type: FieldType.INPUT,
    placeholder: 'Enter your email',
    image: {
      src: '/email.svg',
      alt: 'email',
    },
  },
  {
    label: 'Feedback Type',
    name: 'feedbackType',
    type: FieldType.SELECT,
  },
  {
    label: 'Comment',
    name: 'comment',
    type: FieldType.TEXTAREA,
    placeholder: 'Write a comment',
  },
] as const

export const FEEDBACK_TYPE_OPTIONS_VALUES = {
  bug: 'Bug Report',
  feature: 'Feature Request',
  general: 'General Feedback',
  other: 'Other',
}
