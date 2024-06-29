import { types } from "mobx-state-tree";

export const SneakersModel = types.model('SneakersModel', {
    id: types.frozen(types.identifier),
    title: types.string,
})
.views((self) => ({
    get searchText() {
        return self.title.toLowerCase()
    }
}))
