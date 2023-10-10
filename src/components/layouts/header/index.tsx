'use client'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { isEmpty } from 'lodash'

import { BurgerIcon, TailwindIcon, Bag, User, Wishlist } from '../../icons'
import { MenuItem } from '../footer/types'

type HeaderProps = {
  header?: {
    headerMenuItems?: MenuItem[]
    siteDescription?: string
    siteLogoUrl?: string
    siteTitle?: string
    favicon?: string
  }
}

const Header = ({ header }: HeaderProps) => {
  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } =
    header || {}

  const [isMenuVisible, setMenuVisibility] = useState(false)

  return (
    <>
      <Head>
        <title>{siteTitle || `Next's WooCommerce`}</title>
        <link rel="icon" href={favicon || '/favicon.ico'} />
      </Head>
      <div className="header">
        <nav className="bg-white p-4">
          <div className="flex items-center justify-between flex-wrap container mx-auto">
            <div className="flex items-center flex-shrink-0 text-black mr-20">
              {siteLogoUrl ? (
                <Link href="/">
                  <Image
                    className="mr-2"
                    src={siteLogoUrl}
                    alt={`${siteTitle} logo`}
                    width="86"
                    height="86"
                  />
                </Link>
              ) : (
                <TailwindIcon />
              )}
              <span className="ml-3">
                <Link href="/" className="font-semibold text-xl tracking-tight">
                  {siteTitle || 'WooNext'}
                </Link>
                {siteDescription ? <p>{siteDescription}</p> : null}
              </span>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
              >
                <BurgerIcon className="fill-current h-3 w-3" />
              </button>
            </div>
            <div
              className={`${
                isMenuVisible ? 'max-h-full' : 'h-0'
              } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm font-medium uppercase lg:flex-grow">
                {!isEmpty(headerMenuItems) && headerMenuItems?.length
                  ? headerMenuItems?.map((menuItem: MenuItem) => (
                      <Link
                        key={menuItem?.ID}
                        href={`/${menuItem?.pageSlug}` ?? '/'}
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                        dangerouslySetInnerHTML={{
                          __html: menuItem.title || ''
                        }}
                      />
                    ))
                  : null}
              </div>
              <div className="text-sm font-medium">
                <a
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <User className="mr-1 lg:mr-0" />
                    Profile
                  </span>
                </a>
                <a
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Wishlist className="mr-1 lg:mr-0" />
                    Wishlist
                  </span>
                </a>
                <a
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/cart/"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Bag className="mr-1 lg:mr-0" />
                    Bag
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
