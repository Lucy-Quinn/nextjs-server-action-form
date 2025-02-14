import { FormField } from '@/types/common'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Control, Controller, FieldValues } from 'react-hook-form'

interface ControlledSelectProps {
  control: Control<FieldValues>
  field: FormField
  options: Record<string, string>
}

export const ControlledSelect = ({ control, field, options }: ControlledSelectProps) => {
  const { name, placeholder } = field
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Listbox value={field.value} onChange={field.onChange}>
          <div className="relative">
            <ListboxButton className="w-full rounded-md border bg-white p-2 shadow-sm focus:outline-none">
              {options?.[field.value] || placeholder}
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 w-full rounded-md border bg-white shadow-lg">
              {options &&
                Object.entries(options).map(([type, value]) => (
                  <ListboxOption
                    key={type}
                    value={type}
                    className="cursor-pointer p-2 hover:bg-blue-100"
                  >
                    {value}
                  </ListboxOption>
                ))}
            </ListboxOptions>
          </div>
        </Listbox>
      )}
    />
  )
}
