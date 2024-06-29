import { createGenqlClient } from "../../../generated/createGenqlClient"

export async function deleteSneakersByPk(sneakersId: string) {
    const client = await createGenqlClient();

    const res = await client.mutation({
        delete_sneakers_items_by_pk: {
            __args: {
                id: sneakersId,
            },
            id: true,
        },
    });

    return res.delete_sneakers_items_by_pk;
}
