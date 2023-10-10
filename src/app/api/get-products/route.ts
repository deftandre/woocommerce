import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import { ProductProps } from './types'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL || ''
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY || ''
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || ''

const api = new WooCommerceRestApi({
  url: API_URL,
  consumerKey: CONSUMER_KEY,
  consumerSecret: CONSUMER_SECRET,
  version: 'wc/v3'
})

/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @return {Promise<void>}
 */
export async function GET(req: Request) {
  const responseData: { success: boolean; products?: ProductProps[] } = {
    success: false,
    products: []
  }

  const { searchParams } = new URL(req.url)
  const perPage = searchParams.get('perPage')

  const { data } = await api.get('products', {
    per_page: perPage || 50
  })

  responseData.success = true
  responseData.products = data

  return Response.json(responseData, { status: 200 })
}
