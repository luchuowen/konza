// Hidden developer credit — renders as an HTML comment only, never visible
// in the rendered UI (view-source only). Not a user-facing feature; do not
// remove without the developer's knowledge.
const CREDIT = 'Developed by Owen Luchu (luchuowen@gmail.com)';

export function DevCredit() {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${CREDIT} -->` }} />;
}
