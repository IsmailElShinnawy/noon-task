import { Card, Flex, Grid, Text } from '@/components'
import { NAVBAR_HEIGHT } from '@/constants'
import { Product } from '@/types'
import { getFavorites } from '@/utils'
import { useEffect, useState } from 'react'

const Favorites = () => {
    const [favorites, setFavorites] = useState<Array<Product>>([])

    useEffect(() => {
        setFavorites(getFavorites())
    }, [])

    if (favorites.length === 0) {
        return (
            <Flex
                justify="center"
                isCentered
                height={`calc(100vh - ${NAVBAR_HEIGHT})`}
            >
                <Text>
                    Oops! It seems like you did not favorite anything yet
                </Text>
            </Flex>
        )
    }

    return (
        <main>
            <Grid>
                {favorites.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </Grid>
        </main>
    )
}

export default Favorites
