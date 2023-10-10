export type MenuItem = {
  ID?: number
  pageSlug?: string
  title?: string
}

export type IconName = 'facebook' | 'twitter' | 'instagram' | 'youtube'

type SocialLink = {
  iconName?: IconName
  iconUrl?: string
}

export type FooterProps = {
  footer?: {
    copyrightText?: string
    footerMenuItems?: MenuItem[]
    sidebarOne?: string
    sidebarTwo?: string
    socialLinks?: SocialLink[]
  }
}
