import { useState } from 'react'
import { SneakersItemPage } from './components/SneakersItemPage'
import { SneakersList } from './components/SneakersList'
import { ISneakersModel$ } from './mst/types'
import { Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

export const App = () => {
    const [selectedSneakers, setSelectedSneakers] = useState<ISneakersModel$ | null>(null)

    return (
        <>
            <div className='fixed h-12 top-0 w-full bg-gray-600 flex'>
                {selectedSneakers && (
                    <Button onClick={() => setSelectedSneakers(null)} variant='text' color='warning' startIcon={<ArrowBack /> }>
                        Go Back
                    </Button>
                )}
            </div>
            <div className='h-screen w-screen flex justify-center items-center'>
                {selectedSneakers ? (
                    <SneakersItemPage sneakersId={selectedSneakers.id} />
                ) : (
                    <SneakersList onSelectSneakers={setSelectedSneakers} />
                )}
            </div>
        </>
    )
}
