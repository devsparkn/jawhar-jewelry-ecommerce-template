type IconProps = {
  className?: string;
};

function iconClassName(className?: string) {
  return `h-5 w-5 ${className ?? ""}`.trim();
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={iconClassName(className)}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={iconClassName(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={iconClassName(className)}
      aria-hidden="true"
    >
      <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={iconClassName(className)}
      aria-hidden="true"
    >
      <path d="M4.5 8.5h15l-1.2 11H5.7L4.5 8.5Z" />
      <path d="M8.5 8.5a3.5 3.5 0 0 1 7 0" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={iconClassName(className)}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName(className)}
      aria-hidden="true"
    >
      <path d="m12 3.5 2.74 5.56 6.14.89-4.44 4.33 1.05 6.12L12 17.53 6.51 20.4l1.05-6.12L3.12 9.95l6.14-.89L12 3.5Z" />
    </svg>
  );
}

export function FrontViewIcon({}: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" />
      <circle
        cx="32"
        cy="32"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <path d="M24 24 L32 14 L40 24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 40 L32 50 L40 40" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SideViewIcon({}: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="32"
        cy="32"
        rx="10"
        ry="18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="32"
        x2="42"
        y2="32"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="26"
        x2="42"
        y2="26"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export function DetailViewIcon({}: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="32,12 46,28 32,52 18,28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="18"
        y1="28"
        x2="46"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="32"
        y1="12"
        x2="18"
        y2="28"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="32"
        y1="12"
        x2="46"
        y2="28"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function WornViewIcon({}: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 48 Q32 18 46 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="32" cy="24" r="7" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
