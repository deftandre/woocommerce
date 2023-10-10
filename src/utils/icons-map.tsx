import * as SvgIconsComponent from '@/components/icons'
import { IconName } from '@/components/layouts/footer/types'

type ComponentsMapType = { [key in IconName]?: React.ElementType }

/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @returns {*}
 */
export const getIconComponentByName = (name: IconName) => {
  const ComponentsMap: ComponentsMapType = {
    facebook: SvgIconsComponent.Facebook,
    twitter: SvgIconsComponent.Twitter,
    instagram: SvgIconsComponent.Instagram,
    youtube: SvgIconsComponent.Youtube
  } as any

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name]
    if (IconComponent) {
      return <IconComponent />
    }
  } else {
    return null
  }
}
