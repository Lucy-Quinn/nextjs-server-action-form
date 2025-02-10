import { FieldType } from '@/types/basic'
import { renderInputFields } from './renderInputFields'

interface FormFieldsProps {
  field: {
    label: string
    name: string
    type: FieldType
    placeholder?: string
    image?: {
      src: string
      alt: string
    }
  }
  value?: string
  error?: string[]
  options?: Record<string, string>
}

export const FormFields = ({ field, value = '', error, options }: FormFieldsProps) => {
  const {
    label,
    name,
    type,
    placeholder = '',
    image: { src, alt } = { src: '', alt: '' },
  } = field

  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      {renderInputFields(type, name, value, options, placeholder, label, src, alt)}
      {Boolean(error) && <p className="text-red-500">{error}</p>}
    </>
  )
}
