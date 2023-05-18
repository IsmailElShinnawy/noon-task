import { Card, Grid } from "@/components"
import { products as productsFromApi } from "@/data/products"
import { Product } from "@/types"

type HomeProps = {
  products: Array<Product>
}

const Home = ({products}: HomeProps) => {
  return <main>
    <Grid>
    {products.map(product => <Card key={product.id} product={product}/>)}
  </Grid>
  </main>
}

Home.getInitialProps = async () => {
  return {
    products: productsFromApi
  }
}

export default Home;