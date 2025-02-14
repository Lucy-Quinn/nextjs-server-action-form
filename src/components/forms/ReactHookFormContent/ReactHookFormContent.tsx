import { submitReactHookForm } from '@/app/actions/reactHookForm'
import { FormFields } from '@/components/forms/shared/FormFields'
import { SubmitButton } from '@/components/forms/shared/SubmitButton'
import {
  REACT_HOOK_FORM_FIELDS,
  SHOPPING_PREFERENCE_OPTIONS_VALUES,
} from '@/constants/reactHookForm'
import { FieldType } from '@/types/common'
import { ReactHookFormFields } from '@/types/forms/reactHookForm'
import { startTransition, useActionState } from 'react'
import { useForm } from 'react-hook-form'

export const ReactHookFormContent = () => {
  const [state, formAction] = useActionState(submitReactHookForm, null)
  const { error, payload, success, message } = state ?? {}

  const { control, register, handleSubmit } = useForm<ReactHookFormFields>({
    defaultValues: {
      name: '',
      email: '',
      shoppingPreference: '',
      dateOfBirth: '',
    },
  })

  const onSubmit = (data: ReactHookFormFields) => {
    startTransition(() => {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as unknown as string)
      })
      formAction(formData)
    })
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="card">
        <h1 className="mb-6 text-center text-2xl font-bold">React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
          {REACT_HOOK_FORM_FIELDS.map((field) => (
            <FormFields
              key={field.name}
              field={field}
              value={payload?.get(field.name) as string}
              error={error?.[field.name as keyof typeof error]}
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
          {Boolean(success) && <p className="text-green-600">{message}</p>}
        </form>
      </div>
    </main>
  )
}
