import { useSneakersStore } from '../mst/RootProvider'
import { useLoading } from '../hooks/useLoading'
import { ISneakers$ } from '../interfaces/ISneakers'
import { Button, TextField } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { HelpCenterRounded } from '@mui/icons-material'
import { textFieldProps } from '../helpers/textFieldProps'
import { Loader } from './common-components/Loader'

interface Props {
    setIsAddingSneakers: (value: boolean) => void
}

export const SneakersView: React.FC<Props> = observer(({ setIsAddingSneakers }) => {
    const { addSneaker } = useSneakersStore()
    const [formFields, setFormFields] = useState<Omit<ISneakers$, 'id'>>({
        title: '',
        price: '',
        image_url: '',
    })

    const { loading, startLoading, stopLoading } = useLoading()

    const handleAddSneaker = () => {
        startLoading()
        addSneaker(formFields).finally(() => {
            stopLoading()
            setIsAddingSneakers(false)
        })
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='bg-gray-800 border-2 flex flex-col gap-4 p-8 min-w-72 rounded-md'>
                    <TextField
                        size='small'
                        label='Name'
                        value={formFields.title}
                        onChange={(e) => setFormFields((prev) => ({ ...prev, title: e.target.value }))}
                        required
                        {...textFieldProps}
                    />
                    <TextField
                        size='small'
                        label='Price'
                        type='text'
                        value={formFields.price}
                        onChange={(e) => setFormFields((prev) => ({ ...prev, price: e.target.value }))}
                        required
                        {...textFieldProps}
                    />
                    <TextField
                        size='small'
                        label='Image URL'
                        helperText={
                            <p className='text-white'>
                                <HelpCenterRounded /> ex: img/sneakers/pair.jpg
                            </p>
                        }
                        value={formFields.image_url}
                        onChange={(e) => setFormFields((prev) => ({ ...prev, image_url: e.target.value }))}
                        {...textFieldProps}
                    />
                    <div className='flex gap-2 mt-4'>
                        <Button variant='outlined' onClick={() => setIsAddingSneakers(false)} className='w-full'>
                            Close
                        </Button>
                        <Button variant='contained' className='w-full' onClick={handleAddSneaker}>
                            Add pair
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
})
