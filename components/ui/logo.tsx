import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <img src="/images/logo.png" alt="logo" style={{ height: "55px" }} />
    </Link>
  )
}
