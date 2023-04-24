import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <img src="/images/logo.png" alt="Cemrex" style={{ height: "55px" }} />
    </Link>
  )
}
