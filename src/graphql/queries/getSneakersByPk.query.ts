import { sneakers_items } from 'generated/schema'
import { createGenqlClient } from '../../../generated/createGenqlClient'

export async function getSneakersByPk(sneakersId: string) {
    const client = createGenqlClient()

    const res = await client.query({
        sneakers_items_by_pk: {
            __args: {
                id: sneakersId,
            },
            id: true,
            title: true,
            image_url: true,
            price: true,
        },
    })

    return res.sneakers_items_by_pk
}

export type ISneakersInfo = Pick<sneakers_items, 'id' | 'title' | 'image_url' | 'price'>
