import { FormField } from '@/types/common'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { formatToDateInput } from 'utils'

interface DateInputProps {
  field: FormField
  register: UseFormRegister<FieldValues>
  value: string
}

export const DateInput = ({ field, register, value }: DateInputProps) => {
  const { name, type, label } = field

  const today = new Date()
  const maxDate = formatToDateInput(today)
  const minDate = formatToDateInput(
    new Date(today.setFullYear(today.getFullYear() - 100)),
  )

  return (
    <input
      {...(register && register(name))}
      max={maxDate}
      min={minDate}
      type={type}
      name={name}
      id={name}
      aria-label={label}
      className="input"
      defaultValue={value}
      required
    />
  )
}
