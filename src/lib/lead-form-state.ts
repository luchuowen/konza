import type { SubmitLeadState } from '@/app/actions/submit-lead';

// Split from submit-lead.ts because a "use server" file may only export
// async functions — a plain constant there breaks the build.
export const initialSubmitLeadState: SubmitLeadState = { status: 'idle' };
