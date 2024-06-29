import { createGenqlClient } from "../../../generated/createGenqlClient"
import { sneakers_items } from '../../../generated/schema'

export async function getAllSneakers() {
    const client = await createGenqlClient()

    const res = await client.query({
        sneakers_items: {
            id: true,
            title: true,
        }
    })

    return res.sneakers_items
}

export type ISneakers = Pick<sneakers_items, 'id' | 'title'>
