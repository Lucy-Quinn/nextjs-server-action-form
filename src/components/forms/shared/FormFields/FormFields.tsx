import { FormField } from '@/types/common'
import clsx from 'clsx'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
import { renderInputFields } from './renderInputFields'

interface FormFieldsProps {
  field: FormField
  value: string
  error?: string[]
  options?: Record<string, string>
  showLabel?: boolean
  control?: Control<FieldValues>
  register?: UseFormRegister<FieldValues>
}

export const FormFields = ({
  field,
  value = '',
  error,
  options,
  showLabel = false,
  control,
  register,
}: FormFieldsProps) => {
  return (
    <>
      <div className={clsx('flex gap-1', !showLabel && 'sr-only')}>
        <label htmlFor={field.name} aria-required="true">
          {field.label}
        </label>
        <span aria-hidden="true">*</span>
      </div>

      {renderInputFields({ field, value, options, control, register })}
      {Boolean(error) && <p className="text-red-500">{error}</p>}
    </>
  )
}
