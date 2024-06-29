import { types } from 'mobx-state-tree';

export const SneakersInfoModel = types.model('SneakersInfoModel', {
    id: types.identifier,
    title: types.string,
    image_url: types.string,
    price: types.number,
})
