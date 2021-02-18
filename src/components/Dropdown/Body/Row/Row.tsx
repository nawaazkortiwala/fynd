import { FunctionComponent, MouseEvent } from 'react'
import { TRowProps } from './Row.types'
import './Row.scss'

const Row: FunctionComponent<TRowProps> = ({ children, onClick }) => {
    const onRowClick = (e: MouseEvent<HTMLButtonElement>) => {
        // e.stopPropagation()
        onClick(e)
    }
    return (
        <div className="dropdown-row">
            <button className="button" onClick={onRowClick}>
                {children}
            </button>
        </div>
    )
}

export default Row
