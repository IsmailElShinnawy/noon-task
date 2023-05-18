import { Card } from "@/components"
import { products as productsFromApi } from "@/data/products"
import { Product } from "@/types"

type HomeProps = {
  products: Array<Product>
}

const Home = ({products}: HomeProps) => {
  return <main>
    {products.map(product => <Card key={product.id} product={product}/>)}
  </main>
}

Home.getInitialProps = async () => {
  return {
    products: productsFromApi
  }
}

export default Home;