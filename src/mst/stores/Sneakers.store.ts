import { flow, toGenerator, types, cast } from 'mobx-state-tree'
import { SneakersModel } from '../models/Sneakers.model'
import { getAllSneakers, ISneakers } from '../../graphql/queries/getAllSneakers.query'
import { ISneakersInfo, getSneakersByPk } from '../../graphql/queries/getSneakersByPk.query'
import { SneakersInfoModel } from '../models/SneakersInfo.model'
import { updateSneakersByPk } from '../../graphql/mutations/updateSneakersByPk.mutation'
import { ISneakers$ } from '../../interfaces/ISneakers'
import { addSneakers } from '../../graphql/mutations/addSneakers.mutation'
import { deleteSneakersByPk } from '../../graphql/mutations/deleteSneakersByPk.mutation'

export const SneakersStore$ = types
    .model('SneakersStore', {
        sneakers: types.optional(types.array(SneakersModel), []),
        selectedSneakers: types.maybe(SneakersInfoModel),
        searchTerm: types.optional(types.string, '')
    })
    .actions((self) => ({
        setSearchTerm(text: string) {
            self.searchTerm = text
        },
        getAllSneakers: flow(function* () {
            try {
                const fetchedSneakers: ISneakers[] = yield* toGenerator(getAllSneakers())
                if (!fetchedSneakers) throw new Error('error: SneakerStore/getAllSneakers')

                const processedSneakers = fetchedSneakers.map(sneakers_one => SneakersModel.create(sneakers_one));
                self.sneakers.replace(processedSneakers);
            } catch (error) {
                console.error(error)
            }
        }),
        getSneakersByPk: flow(function* (sneakersId: string) {
            try {
                const sneakers_one: ISneakersInfo | null = yield* toGenerator(getSneakersByPk(sneakersId))
                if (!sneakers_one) throw new Error('error: SneakerStore/getSneakersByPk')

                self.selectedSneakers = cast(sneakers_one)
            } catch (error) {
                console.error(error)
            }
        }),
        updateSneakerByPk: flow(function* (sneakersId: string, updatedData: ISneakers$) {
            try {
                const updatedFields = yield* toGenerator(updateSneakersByPk(sneakersId, updatedData))
                if (!updatedFields) throw new Error('error: SneakerStore/updateSneakerByPk')

                self.selectedSneakers = cast(updatedFields)
            } catch (error) {
                console.error(error)
            }
        }),
        addSneaker: flow(function* (createdData: Omit<ISneakers$, 'id'>) {
            try {
                const createdFields = yield* toGenerator(addSneakers(createdData))
                if (!createdFields) throw new Error('error: SneakerStore/addSneaker')

                self.sneakers.push(createdFields)
            } catch (error) {
                console.error(error)
            }
        }),
        deleteSneakersByPk: flow(function* (sneakersId: string) {
            try {
                const deletedSneakers = yield* toGenerator(deleteSneakersByPk(sneakersId))
                if (!deletedSneakers) throw new Error('error: SneakerStore/deleteSneakersByPk')
            } catch (error) {
                console.error(error)
            }
        })
    }))
    .views((self) => ({
        get filteredSneakers() {
            const term = self.searchTerm.trim().toLowerCase()

            if (!term) {
                return [...self.sneakers]
            }
            return self.sneakers.filter((sneaker) => sneaker.searchText.includes(term))
        }
    }))
