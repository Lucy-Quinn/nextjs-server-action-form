import { FormField } from '@/types/common'

interface UncontrolledSelectProps {
  field: FormField
  value: string
  options: Record<string, string>
}

export const UncontrolledSelect = ({
  field,
  value,
  options,
}: UncontrolledSelectProps) => {
  const { name } = field
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
}
