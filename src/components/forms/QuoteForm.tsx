'use client';

import { useActionState, useState, type FormEvent } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/Button';
import { SelectField, TextAreaField, TextField } from '@/components/forms/fields';
import {
  BUILDING_TYPES,
  PROJECT_TYPES,
  TIMELINES,
  validateQuoteForm,
  type FieldErrors,
  type QuoteFormValues,
} from '@/lib/validate-lead';
import { submitQuoteLead } from '@/app/actions/submit-lead';
import { initialSubmitLeadState } from '@/lib/lead-form-state';

const emptyValues: QuoteFormValues = {
  name: '',
  phone: '',
  email: '',
  buildingType: '',
  projectType: '',
  floorCount: '',
  timeline: '',
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="cta"
      disabled={pending}
      className="w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? 'Sending…' : 'Request My Quote'}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuoteLead, initialSubmitLeadState);
  const [values, setValues] = useState<QuoteFormValues>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<keyof QuoteFormValues, boolean>>>({});
  const [clientErrors, setClientErrors] = useState<FieldErrors<QuoteFormValues>>({});

  const serverErrors = state.status === 'invalid' ? (state.errors as FieldErrors<QuoteFormValues>) : undefined;
  const errors = serverErrors ?? clientErrors;

  function field<K extends keyof QuoteFormValues>(key: K) {
    return {
      name: key,
      value: values[key],
      error: touched[key] || serverErrors ? errors[key] : undefined,
      onBlur: () => {
        setTouched((t) => ({ ...t, [key]: true }));
        setClientErrors(validateQuoteForm({ ...values }));
      },
    };
  }

  function handleChange<K extends keyof QuoteFormValues>(key: K, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setClientErrors(validateQuoteForm(next));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const validation = validateQuoteForm(values);
    setClientErrors(validation);
    setTouched({
      name: true,
      phone: true,
      email: true,
      buildingType: true,
      projectType: true,
      floorCount: true,
      timeline: true,
      message: true,
    });
    if (Object.keys(validation).length > 0) {
      e.preventDefault();
    }
  }

  if (state.status === 'success') {
    return (
      <div className="rounded-xl border border-line-light bg-white p-8 text-center sm:text-left" role="status">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red">Request Received</p>
        <h3 className="mt-3 font-sans text-2xl font-bold text-navy-950">Thank you — we&rsquo;ve got your details.</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          Our team will review your project and contact you directly by phone or WhatsApp to discuss
          next steps and arrange a site visit where needed. If your enquiry is urgent, message us on
          WhatsApp in the meantime — it&rsquo;s the fastest way to reach us.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate className="rounded-xl border border-line-light bg-white p-6 sm:p-8">
      {state.status === 'error' && (
        <p role="alert" className="mb-6 rounded-md bg-red/10 p-3 text-sm font-medium text-red">
          {state.message}
        </p>
      )}

      <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red">Your Project</p>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          label="Building Type"
          required
          options={BUILDING_TYPES}
          {...field('buildingType')}
          onChange={(e) => handleChange('buildingType', e.target.value)}
        />
        <SelectField
          label="Project Type"
          required
          options={PROJECT_TYPES}
          {...field('projectType')}
          onChange={(e) => handleChange('projectType', e.target.value)}
        />
        <TextField
          label="Number of Floors"
          type="number"
          inputMode="numeric"
          {...field('floorCount')}
          onChange={(e) => handleChange('floorCount', e.target.value)}
        />
        <SelectField
          label="Timeline"
          required
          options={TIMELINES}
          {...field('timeline')}
          onChange={(e) => handleChange('timeline', e.target.value)}
        />
      </div>

      <p className="mt-8 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red">Your Details</p>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <div className="sm:col-span-2">
          <TextField
            label="Email (optional)"
            type="email"
            inputMode="email"
            autoComplete="email"
            {...field('email')}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <TextAreaField
            label="Message (optional)"
            {...field('message')}
            onChange={(e) => handleChange('message', e.target.value)}
          />
        </div>
      </div>

      <div className="mt-8">
        <SubmitButton />
      </div>
    </form>
  );
}
