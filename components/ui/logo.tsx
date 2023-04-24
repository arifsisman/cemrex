import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <img src="/images/logo.webp" alt="Cemrex" style={{height: "55px"}} />
    </Link>
  )
}
