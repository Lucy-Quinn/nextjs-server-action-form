import { FormField } from '@/types/common'
import Image from 'next/image'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface FormInputProps {
  register: UseFormRegister<FieldValues>
  field: FormField
  value: string
}

export const FormInput = ({ register, field, value }: FormInputProps) => {
  const {
    name,
    type,
    placeholder,
    label,
    image: { src, alt } = { src: '', alt: '' },
  } = field
  return (
    <div className="flex">
      {src.length > 0 && (
        <span className="rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
          <Image src={src} alt={alt} width={20} height={20} />
        </span>
      )}
      <input
        {...(register && register(name))}
        type={type}
        name={name}
        id={name}
        aria-label={label}
        placeholder={placeholder}
        className="input"
        defaultValue={value || ''}
        required
      />
    </div>
  )
}
