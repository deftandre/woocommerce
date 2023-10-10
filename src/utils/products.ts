import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL || ''
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY || ''
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || ''

const api = new WooCommerceRestApi({
  url: API_URL,
  consumerKey: CONSUMER_KEY,
  consumerSecret: CONSUMER_SECRET,
  version: 'wc/v3'
})

export const getProductsData = async (perPage?: number) => {
  return await api.get('products', {
    per_page: perPage || 50
  })
}
