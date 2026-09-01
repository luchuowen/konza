import { SOCIAL_LINKS } from '@/lib/constants';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const iconLinkClasses =
  'flex h-11 w-11 items-center justify-center rounded-full border border-navy-800 bg-navy-900 text-slate-dark transition-colors hover:border-red hover:text-red';

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string | null;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <span className={`${iconLinkClasses} cursor-default opacity-40`} role="img" aria-label={`${label} — coming soon`}>
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={iconLinkClasses}>
      {children}
    </a>
  );
}

export function SocialLinksRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
        <FacebookIcon className="h-5 w-5" />
      </SocialIcon>
      <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
        <InstagramIcon className="h-5 w-5" />
      </SocialIcon>
      <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
        <LinkedInIcon className="h-5 w-5" />
      </SocialIcon>
      <WhatsAppButton />
    </div>
  );
}
