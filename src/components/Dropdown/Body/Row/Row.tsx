import { FunctionComponent, MouseEvent } from 'react'
import { TRowProps } from './Row.types'

const Row: FunctionComponent<TRowProps> = ({ children, onClick }) => {
    const onRowClick = (e: MouseEvent<HTMLButtonElement>) => {
        // e.stopPropagation()
        onClick(e)
    }
    return <button onClick={onRowClick}>{children}</button>
}

export default Row
