'use server'

import { FORM_MESSAGES, MAILCHIMP_CONFIG } from '@/constants/serverActions'
import { reactHookFormSchema } from '@/lib/schemas/reactHookForm'
import { Inputs, ReactHookFormResponse } from '@/types/forms/reactHookForm'

export async function submitReactHookForm(
  formData: Inputs,
): Promise<ReactHookFormResponse> {
  const validatedFields = reactHookFormSchema.safeParse(formData)

  if (validatedFields.error) {
    console.error('[API] Validation error:', validatedFields.error.flatten().fieldErrors)
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    const { key, server, audience } = MAILCHIMP_CONFIG
    if (!key || !server || !audience) {
      console.error('[API] Missing Mailchimp configuration')
      return {
        success: false,
        message: FORM_MESSAGES.CONFIG_ERROR,
      }
    }

    const { name, email, shoppingPreference, dateOfBirth } = validatedFields.data

    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        NAME: name,
        PREFERENCE: shoppingPreference,
        BIRTHDAY: dateOfBirth,
      },
    }

    const url = `https://${server}.api.mailchimp.com/3.0/lists/${audience}/members`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const responseData = await response.json()
      console.error('[API] Mailchimp error:', responseData.detail)
      console.error('[API] Mailchimp errors:', responseData?.errors ?? [])
      return {
        success: false,
        message: FORM_MESSAGES.SUBSCRIBE_FAILED,
      }
    }

    console.log('[API] Successfully made a quote request with email address:', email)
    return {
      success: true,
      message: FORM_MESSAGES.SUBSCRIBE_SUCCESS,
    }
  } catch (error) {
    console.error('[API] Internal server error:', error)

    return {
      success: false,
      message: FORM_MESSAGES.INTERNAL_ERROR,
    }
  }
}
