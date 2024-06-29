import { observer } from 'mobx-react-lite'
import { useLoading } from '../hooks/useLoading'
import { useSneakersStore } from '../mst/RootProvider'
import { ISneakersModel$ } from '../mst/types'
import { DeleteOutline } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { FC, MouseEvent } from 'react'

interface Props {
    sneakers_one: ISneakersModel$
    onSelectSneakers: (sneaker: ISneakersModel$) => void
}

export const SneakersItem: FC<Props> = observer(({ sneakers_one, onSelectSneakers }) => {
    const { deleteSneakersByPk } = useSneakersStore()
    const { startLoading, stopLoading } = useLoading()

    const handleDeleteSneakers = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        startLoading()
        deleteSneakersByPk(sneakers_one.id).finally(() => stopLoading())
    }

    return (
        <div className='flex items-center justify-between gap-4 cursor-pointer' onClick={() => onSelectSneakers(sneakers_one)}>
            <p className='hover:text-[cornflowerblue]'>{sneakers_one.title}</p>
            <Button variant='text' color='error' onClick={handleDeleteSneakers}>
                <DeleteOutline />
            </Button>
        </div>
    )
})
