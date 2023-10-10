import axios from 'axios'

import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import Products from '@/components/products'
import { HEADER_FOOTER_ENDPOINT } from '@/utils/constants/endpoints'
import { getProductsData } from '@/utils/products'

async function getHeaderFooter() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT)

  return data.data
}

export default async function Home() {
  const { header, footer } = await getHeaderFooter()
  const products = await getProductsData()

  return (
    <div>
      <Header header={header} />
      <main className="container mx-auto py-4 px-16 sm:px-2">
        <Products products={products.data} />
      </main>
      <Footer footer={footer} />
    </div>
  )
}
