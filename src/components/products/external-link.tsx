import Link from 'next/link'

type TExternalLink = {
  url: string
  text: string
}

const ExternalLink = ({ url, text }: TExternalLink) => {
  if (!url || !text) {
    return null
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block duration-500 text-xs sm:text-sm md:text-base text-gray-800 font-semibold py-1 sm:py-2 px-2 sm:px-4 border border-gray-400 rounded shadow bg-white hover:bg-gray-100"
    >
      {text}
    </Link>
  )
}

export default ExternalLink
