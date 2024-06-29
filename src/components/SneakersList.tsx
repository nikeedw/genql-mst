import { observer } from 'mobx-react-lite'
import { FC, useEffect, useState } from 'react'
import { SneakersItem } from './SneakersItem'
import { useSneakersStore } from '../mst/RootProvider'
import { useLoading } from '../hooks/useLoading'
import { Loader } from './common-components/Loader'
import { ISneakersModel$ } from '../mst/types'
import { SneakersToolbar } from './toolbar-components/SneakersToolbar'
import { SneakersView } from './SneakersView'

interface Props {
    onSelectSneakers: (sneaker: ISneakersModel$) => void
}

export const SneakersList: FC<Props> = observer(({ onSelectSneakers }) => {
    const { getAllSneakers, filteredSneakers, searchTerm, setSearchTerm } = useSneakersStore()
    const { loading, startLoading, stopLoading } = useLoading()
    const [isAddingSneakers, setIsAddingSneakers] = useState(false)

    useEffect(() => {
        startLoading()
        getAllSneakers().finally(() => stopLoading())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, filteredSneakers])

    return (
        <div className='flex flex-col gap-4 min-h-64 min-w-64 items-center justify-center'>
            <SneakersToolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setIsAddingSneakers={setIsAddingSneakers}
                isAddingSneakers={isAddingSneakers}
            />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {isAddingSneakers ? (
                        <SneakersView setIsAddingSneakers={setIsAddingSneakers} />
                    ) : (
                        <>
                            {filteredSneakers.length > 0 ? (
                                <div className='bg-gray-800 p-4 rounded border flex gap-2 flex-col'>
                                    {filteredSneakers.map((sneakers_one) => (
                                        <SneakersItem
                                            key={sneakers_one.id}
                                            sneakers_one={sneakers_one}
                                            onSelectSneakers={onSelectSneakers}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>Error fetching sneakers</div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    )
})
