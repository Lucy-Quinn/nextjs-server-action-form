import { submitReactHookForm } from '@/app/actions/reactHookForm'
import {
  REACT_HOOK_FORM_FIELDS,
  SHOPPING_PREFERENCE_OPTIONS_VALUES,
} from '@/constants/reactHookForm'
import { reactHookFormSchema } from '@/lib/schemas/reactHookForm'
import { FieldType } from '@/types/common'
import { Inputs } from '@/types/forms/reactHookForm'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormFields } from '../shared/FormFields/FormFields'
import { SubmitButton } from '../shared/SubmitButton'

export const ReactHookFormContent = () => {
  const [message, setMessage] = useState<{ success?: string; error?: string } | null>(
    null,
  )

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(reactHookFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      shoppingPreference: SHOPPING_PREFERENCE_OPTIONS_VALUES.trainers,
      dateOfBirth: '',
    },
  })

  const processForm = async (data: Inputs) => {
    setMessage(null)
    const result = await submitReactHookForm(data)

    if (!result) {
      setMessage({ error: 'Failed to submit form. Please try again later.' })
      return
    }

    const { success, message } = result
    setMessage((prev) => ({ ...prev, [success ? 'success' : 'error']: message }))

    if (success) {
      reset()
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="card">
        <h1 className="mb-6 text-center text-2xl font-bold">React Hook Form</h1>
        <form onSubmit={handleSubmit(processForm)} className="flex flex-col space-y-3">
          {REACT_HOOK_FORM_FIELDS.map((field) => (
            <FormFields
              key={field.name}
              field={field}
              error={errors[field.name as keyof typeof errors]?.message}
              options={
                field.type === FieldType.SELECT
                  ? SHOPPING_PREFERENCE_OPTIONS_VALUES
                  : undefined
              }
              showLabel
              control={control}
              register={register}
            />
          ))}
          <SubmitButton />
          {message && (
            <p className={clsx(message.success ? 'text-green-600' : 'text-red-500')}>
              {message.success || message.error}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}
