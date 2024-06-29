import { createGenqlClient } from "../../../generated/createGenqlClient"
import { ISneakers$ } from "../../interfaces/ISneakers";

export async function addSneakers(createdData: Omit<ISneakers$, 'id'>) {
    const client = await createGenqlClient();

    const res = await client.mutation({
        insert_sneakers_items_one: {
            __args: {
                object: {
                    title: createdData.title,
                    price: Number(createdData.price),
                    image_url: createdData.image_url,
                }
            },
            id: true,
            title: true,
            price: true,
            image_url: true,
        }
    });

    return res.insert_sneakers_items_one
}
