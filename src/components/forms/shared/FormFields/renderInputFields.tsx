import { FieldType, FormField } from '@/types/common'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
import { ControlledSelect } from './ControlledSelect'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'
import { UncontrolledSelect } from './UncontrolledSelect'

interface RenderInputFieldsProps {
  field: FormField
  value: string
  options?: Record<string, string>
  control?: Control<FieldValues>
  register?: UseFormRegister<FieldValues>
}

export const renderInputFields = ({
  field,
  value,
  options,
  control,
  register,
}: RenderInputFieldsProps) => {
  return (() => {
    switch (field.type) {
      case FieldType.SELECT:
        return control ? (
          <ControlledSelect control={control} field={field} options={options ?? {}} />
        ) : (
          <UncontrolledSelect field={field} value={value} options={options ?? {}} />
        )
      case FieldType.TEXTAREA:
        return (
          <FormTextArea
            register={register as UseFormRegister<FieldValues>}
            field={field}
            value={value}
          />
        )
      default:
        return (
          <FormInput
            register={register as UseFormRegister<FieldValues>}
            field={field}
            value={value}
          />
        )
    }
  })()
}
