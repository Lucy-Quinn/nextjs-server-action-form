import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className="submit-button" disabled={pending}>
      {pending ? 'Subscribing' : 'Subscribe'}
    </button>
  )
}
