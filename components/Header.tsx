import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src="https://cdn.sanity.io/images/vygh6q91/production/30c4bc0dbd2737652b7169e1861da2a47886c846-5184x3456.jpg"
            alt="logo"
          />
        </Link>
        <h1>The Blog Webapp</h1>
      </div>
      <div>
        <Link
          href="https://samarth-sheth.vercel.app/"
          target="_blank"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Portfolio
        </Link>
      </div>
    </header>
  )
}

export default Header
