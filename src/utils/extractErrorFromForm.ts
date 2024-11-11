import { FieldErrors } from 'react-hook-form';

export default function extractErrorFromForm<T extends object>(
  errors: FieldErrors<T>,
  name: keyof T,
) {
  return Object.fromEntries(Object.entries(errors?.[name]?.types ?? {}));
}
