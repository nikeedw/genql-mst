import { InsertLinkOutlined, SearchOutlined } from '@mui/icons-material'
import { Button, Input, InputAdornment } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React from 'react'

interface Props {
    searchTerm: string
    setSearchTerm: (value: string) => void
    setIsAddingSneakers: (value: boolean) => void
    isAddingSneakers: boolean
}

export const SneakersToolbar: React.FC<Props> = observer(
    ({ searchTerm, setSearchTerm, setIsAddingSneakers, isAddingSneakers }) => {
        return (
            <>
                {!isAddingSneakers && (
                    <>
                        <Button 
                            variant='contained' 
                            color='info' 
                            onClick={() => setIsAddingSneakers(true)} 
                            size='large'
                            startIcon={<InsertLinkOutlined />}
                        >
                            Add new sneaker
                        </Button>
                        <Input
                            type='text'
                            style={{ color: 'aliceblue' }}
                            placeholder='Search'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='px-2'
                            startAdornment={
                                <InputAdornment position='start'>
                                    <SearchOutlined color='info' />
                                </InputAdornment>
                            }
                        />
                    </>
                )}
            </>
        )
    },
)
