import { FieldType } from '@/types/basic'
import Image from 'next/image'

export const renderInputFields = (
  type: FieldType,
  name: string,
  value: string,
  options: Record<string, string> | undefined,
  placeholder: string,
  label: string,
  src: string,
  alt: string,
) => {
  return (() => {
    switch (type) {
      case FieldType.SELECT:
        return (
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
            <span className="rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
              <Image src={src} alt={alt} width={20} height={20} />
            </span>
            <input
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
