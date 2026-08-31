'use client';

import type { ChangeEvent, FocusEvent } from 'react';

const labelClass = 'mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-navy-950';
const inputClass =
  'min-h-[52px] w-full rounded-xl border bg-paper px-4 py-3 text-[0.95rem] text-navy-950 shadow-[inset_0_1px_2px_rgba(10,22,40,0.04)] transition-all duration-200 placeholder:text-slate/50 focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-red/15';
const selectExtraClass =
  "appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27%230A1628%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpath%20d=%27M6%209l6%206%206-6%27/%3E%3C/svg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10";
const errorInputClass = 'border-red focus:ring-red/20';
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
        className={`${inputClass} ${selectExtraClass} ${error ? errorInputClass : okInputClass}`}
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
