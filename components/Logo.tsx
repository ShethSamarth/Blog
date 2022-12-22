import Image from "next/image"

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://cdn.sanity.io/images/vygh6q91/production/30c4bc0dbd2737652b7169e1861da2a47886c846-5184x3456.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
