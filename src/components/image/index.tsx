import Img from 'next/image'
import cx from 'classnames'
import { DEFAULT_IMG_URL } from '@/utils/constants/images'

type TImage = {
  alt?: string
  title?: string
  width?: number
  height?: number
  sourceUrl?: string
  className?: string
  layout?: 'fill' | 'intrinsic' | 'responsive' | 'fixed'
  objectFit?: string
  containerClassNames?: string
  showDefault?: boolean
}

const Image = (props: TImage) => {
  const {
    alt,
    title,
    width = 0,
    height = 0,
    sourceUrl,
    className,
    layout,
    containerClassNames,
    showDefault,
    ...rest
  } = props

  if (!sourceUrl && !showDefault) {
    return null
  }

  if (layout === 'fill') {
    const attributes = {
      alt: alt || title || '',
      src: sourceUrl || (showDefault ? DEFAULT_IMG_URL : ''),
      layout: 'fill',
      className: cx('object-cover', className),
      ...rest
    }

    return (
      <div className={cx('relative', containerClassNames)}>
        <Img {...attributes} />
      </div>
    )
  } else {
    const attributes = {
      alt: alt || title || '',
      src: sourceUrl || (showDefault ? DEFAULT_IMG_URL : ''),
      width: width,
      height: height,
      className,
      ...rest
    }
    return (
      <Img
        {...attributes}
        style={
          width === 0 && height === 0
            ? { width: 'auto', height: 'auto' }
            : undefined
        }
      />
    )
  }
}

export default Image
