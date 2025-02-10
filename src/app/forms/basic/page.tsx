'use client'

import { submitBasicForm } from '@/app/actions/basic'
import { FormFields } from '@/components/forms'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { BASIC_FORM_FIELDS, FEEDBACK_TYPE_OPTIONS_VALUES } from '@/constants/basic'
import { FieldType } from '@/types/basic'
import { useActionState } from 'react'

export default function BasicForm() {
  const [state, formAction] = useActionState(submitBasicForm, null)
  const { error, payload, success } = state ?? {}

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="card">
        <h1 className="mb-6 text-center text-2xl font-bold">Basic Form</h1>
        <form action={formAction} className="flex flex-col space-y-3">
          {BASIC_FORM_FIELDS.map((field) => (
            <FormFields
              key={field.name}
              field={field}
              value={payload?.get(field.name) as string}
              error={error?.[field.name as keyof typeof error]}
              options={
                field.type === FieldType.SELECT ? FEEDBACK_TYPE_OPTIONS_VALUES : undefined
              }
            />
          ))}
          <SubmitButton />
          {Boolean(success) && <p className="text-green-600">{success}</p>}
        </form>
      </div>
    </main>
  )
}
