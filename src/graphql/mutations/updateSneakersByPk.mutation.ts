import { ISneakers$ } from "../../interfaces/ISneakers";
import { createGenqlClient } from "../../../generated/createGenqlClient"

export async function updateSneakersByPk(sneakersId: string, updatedData: ISneakers$) {
    const client = await createGenqlClient();

    const res = await client.mutation({
        update_sneakers_items_by_pk: {
            __args: {
                pk_columns: { id: sneakersId },
                _set: {
                    image_url: updatedData.image_url,
                    price: Number(updatedData.price),
                    title: updatedData.title,
                }
            },
            id: true,
            image_url: true,
            price: true,
            title: true,
        }
    });

    return res.update_sneakers_items_by_pk;
}
