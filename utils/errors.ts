import { Error } from '@/types'

export function getErrorMessage(field: string, errors: Error[] | any[]) {
  const error = errors.find((error) => error.field === field)
  return error?.message || ''
}

export function clearError(field: string, errors: Error[] | any[]) {
  return errors.filter((error) => error.field !== field)
}
