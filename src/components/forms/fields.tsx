'use client';

import type { ChangeEvent, FocusEvent } from 'react';

const labelClass = 'mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-navy-950';
const inputClass =
  'min-h-[44px] w-full rounded-md border bg-white px-4 py-2.5 text-sm text-navy-950 transition-colors focus:outline-none focus:ring-2 focus:ring-red/30';
const errorInputClass = 'border-red';
const okInputClass = 'border-line-light focus:border-red';
const errorTextClass = 'mt-1.5 text-xs font-medium text-red';

type BaseFieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
};

export function TextField({
  label,
  name,
  error,
  required,
  value,
  onChange,
  onBlur,
  type = 'text',
  inputMode,
  autoComplete,
}: BaseFieldProps & {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric';
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClass} ${error ? errorInputClass : okInputClass}`}
      />
      {error && (
        <p id={errorId} role="alert" className={errorTextClass}>
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  name,
  error,
  required,
  value,
  onChange,
  onBlur,
  options,
  placeholder = 'Select one',
}: BaseFieldProps & {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[];
  placeholder?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClass} ${error ? errorInputClass : okInputClass}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className={errorTextClass}>
          {error}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  error,
  required,
  value,
  onChange,
  onBlur,
  rows = 4,
}: BaseFieldProps & {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClass} resize-none ${error ? errorInputClass : okInputClass}`}
      />
      {error && (
        <p id={errorId} role="alert" className={errorTextClass}>
          {error}
        </p>
      )}
    </div>
  );
}
