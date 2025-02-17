export const MAILCHIMP_CONFIG = {
  key: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
  audience: process.env.MAILCHIMP_AUDIENCE,
}

export const FORM_MESSAGES = {
  CONFIG_ERROR: 'Server configuration error',
  INTERNAL_ERROR: 'An error occurred',
  SUBSCRIBE_SUCCESS: 'Successfully subscribed!',
  SUBSCRIBE_FAILED: 'Failed to subscribe. Please try again.',
} as const
