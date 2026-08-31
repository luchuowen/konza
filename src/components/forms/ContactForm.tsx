'use client';

import { useActionState, useState, type FormEvent } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/Button';
import { SelectField, TextAreaField, TextField } from '@/components/forms/fields';
import { CheckIcon } from '@/components/ui/ContactIcons';
import {
  CONTACT_REASONS,
  validateContactForm,
  type ContactFormValues,
  type FieldErrors,
} from '@/lib/validate-lead';
import { submitContactLead } from '@/app/actions/submit-lead';
import { initialSubmitLeadState } from '@/lib/lead-form-state';

const emptyValues: ContactFormValues = { name: '', phone: '', email: '', reason: '', message: '' };

const WHAT_TO_EXPECT = [
  'We read and personally respond to every message.',
  'Include your phone number so we can call you back quickly.',
  'For anything urgent, message us on WhatsApp instead.',
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="cta"
      disabled={pending}
      className="w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? 'Sending…' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactLead, initialSubmitLeadState);
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [clientErrors, setClientErrors] = useState<FieldErrors<ContactFormValues>>({});

  const serverErrors = state.status === 'invalid' ? (state.errors as FieldErrors<ContactFormValues>) : undefined;
  const errors = serverErrors ?? clientErrors;

  function field<K extends keyof ContactFormValues>(key: K) {
    return {
      name: key,
      value: values[key],
      error: touched[key] || serverErrors ? errors[key] : undefined,
      onBlur: () => {
        setTouched((t) => ({ ...t, [key]: true }));
        setClientErrors(validateContactForm({ ...values }));
      },
    };
  }

  function handleChange<K extends keyof ContactFormValues>(key: K, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setClientErrors(validateContactForm(next));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const validation = validateContactForm(values);
    setClientErrors(validation);
    setTouched({ name: true, phone: true, email: true, reason: true, message: true });
    if (Object.keys(validation).length > 0) {
      e.preventDefault();
    }
  }

  if (state.status === 'success') {
    return (
      <div
        className="flex h-full flex-col justify-center rounded-xl border border-line-light bg-white p-8 text-center sm:text-left"
        role="status"
      >
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red">Message Sent</p>
        <h3 className="mt-3 font-serif text-2xl font-bold text-navy-950">Thanks for reaching out.</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          We&rsquo;ve received your message and will get back to you by phone or WhatsApp. For anything
          urgent, call us directly using the numbers alongside this form.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="flex h-full flex-col rounded-xl border border-line-light bg-white p-6 sm:p-8"
    >
      {state.status === 'error' && (
        <p role="alert" className="mb-6 rounded-md bg-red/10 p-3 text-sm font-medium text-red">
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="Full Name"
          required
          autoComplete="name"
          {...field('name')}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextField
          label="Phone Number"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          {...field('phone')}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          {...field('email')}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <SelectField
          label="Reason for Contact"
          required
          options={CONTACT_REASONS}
          {...field('reason')}
          onChange={(e) => handleChange('reason', e.target.value)}
        />
        <div className="sm:col-span-2">
          <TextAreaField
            label="Message"
            required
            {...field('message')}
            onChange={(e) => handleChange('message', e.target.value)}
          />
        </div>
      </div>

      <div className="mt-8">
        <SubmitButton />
      </div>

      <div className="mt-8 flex flex-1 flex-col justify-center border-t border-line-light pt-6">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">What to Expect</p>
        <ul className="mt-4 flex flex-col gap-3">
          {WHAT_TO_EXPECT.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
