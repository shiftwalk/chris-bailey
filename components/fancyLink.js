import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${className}`}>
        {label}
      </a>
    </Link>
  )
}