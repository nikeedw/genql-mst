import { observer } from 'mobx-react-lite'

export const Loader: React.FC = observer(() => {
    return (
        <div className='flex justify-center items-center h-full bg-transparent'>
            Loading...
        </div>
    )
})
