import axios from 'axios'

import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import { HEADER_FOOTER_ENDPOINT } from '@/utils/constants/endpoints'

export async function getHeaderFooter() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT)

  return data.data
}

export default async function Home() {
  const { header, footer } = await getHeaderFooter()

  return (
    <div>
      <Header header={header} />
      <main>
        <h1>WooCommerce</h1>
        <p className="text-green-500">Hello</p>
      </main>
      <Footer footer={footer} />
    </div>
  )
}
