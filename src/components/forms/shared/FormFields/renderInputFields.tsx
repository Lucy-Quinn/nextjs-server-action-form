import { FieldType, FormField } from '@/types/common'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import Image from 'next/image'
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form'

export const renderInputFields = (
  field: FormField,
  value: string,
  options: Record<string, string> | undefined,
  control?: Control<FieldValues>,
  register?: UseFormRegister<FieldValues>,
) => {
  const {
    type,
    name,
    placeholder,
    label,
    image: { src, alt } = { src: '', alt: '' },
  } = field
  return (() => {
    switch (type) {
      case FieldType.SELECT:
        return control ? (
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
        ) : (
          <select
            name={name}
            id={name}
            className="input bg-white p-3 shadow-sm transition"
            required
            defaultValue={value ?? ''}
          >
            <option value="">Select a type...</option>
            {options &&
              Object.entries(options).map(([type, value]) => (
                <option key={type} value={type}>
                  {value}
                </option>
              ))}
          </select>
        )
      case FieldType.TEXTAREA:
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
      default:
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
  })()
}
