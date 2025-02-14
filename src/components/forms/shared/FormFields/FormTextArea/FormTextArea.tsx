import { FormField } from '@/types/common'
import { FieldValues } from 'react-hook-form'

import { UseFormRegister } from 'react-hook-form'

interface FormTextAreaProps {
  register: UseFormRegister<FieldValues>
  field: FormField
  value: string
}

export const FormTextArea = ({ register, field, value }: FormTextAreaProps) => {
  const { name, placeholder, label } = field
  return (
    <textarea
      {...(register && register(name))}
      name={name}
      rows={4}
      required
      placeholder={placeholder}
      id={name}
      aria-label={label}
      className="input"
      defaultValue={value || ''}
    />
  )
}
