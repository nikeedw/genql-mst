import { type FC, useEffect, useState } from 'react'
import { useSneakersStore } from '../mst/RootProvider'
import { useLoading } from '../hooks/useLoading'
import { Loader } from './common-components/Loader'
import { Button, TextField } from '@mui/material'
import { Edit } from '@mui/icons-material'
import { observer } from 'mobx-react-lite'
import { ISneakers$ } from '../interfaces/ISneakers'
import { textFieldProps } from '../helpers/textFieldProps'

interface Props {
    sneakersId: string
}

export const SneakersItemPage: FC<Props> = observer(({ sneakersId }) => {
    const { getSneakersByPk, selectedSneakers, updateSneakerByPk } = useSneakersStore()
    const { startLoading, stopLoading, loading } = useLoading()
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState<Partial<ISneakers$>>({})

    useEffect(() => {
        startLoading()
        getSneakersByPk(sneakersId).finally(() => stopLoading())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (selectedSneakers) {
            setInputValue({ ...selectedSneakers })
        }
    }, [selectedSneakers])

    const handleFieldChange = (field: keyof ISneakers$, value: string) => {
        setInputValue((prev) => ({ ...prev, [field]: value }))
    }

    const handleSave = () => {
        startLoading()
        updateSneakerByPk(sneakersId, inputValue as ISneakers$).finally(() => {
            stopLoading()
            setIsEditing(false)
        })
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='flex flex-col gap-4 items-center'>
                    {!isEditing && (
                        <Button
                            variant='contained'
                            fullWidth
                            size='large'
                            startIcon={<Edit />}
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </Button>
                    )}
                    <div className='bg-gray-800 border-2 flex flex-col gap-4 p-8 min-w-72 rounded-md'>
                        {isEditing ? (
                            <div className='flex flex-col gap-4'>
                                <TextField
                                    label='Name'
                                    size='small'
                                    value={inputValue.title}
                                    onChange={(e) => handleFieldChange('title', e.target.value)}
                                    type='text'
                                    required
                                    {...textFieldProps}
                                />
                                <TextField
                                    label='Price'
                                    size='small'
                                    value={inputValue.price}
                                    onChange={(e) => handleFieldChange('price', e.target.value)}
                                    type='text'
                                    required
                                    {...textFieldProps}
                                />
                                <div className='w-full flex gap-2'>
                                    <Button className='flex-1' variant='outlined' onClick={() => {
                                        setIsEditing(false)
                                        setInputValue({ ...selectedSneakers })
                                    }}>
                                        Cancel
                                    </Button>
                                    <Button className='flex-1' variant='contained' onClick={handleSave}>
                                        Save
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1>{inputValue.title}</h1>
                                <p>Price: ${inputValue.price}</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
})
