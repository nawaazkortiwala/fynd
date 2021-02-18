import { FunctionComponent, MouseEvent } from 'react'
import { TRowProps } from './Row.types'
import './Row.scss'

/**
 * This is basically the most used component in the Dropdown component.
 * Row, as the name suggest, create a horizontal, interactive row for Preview and Option component.
 * All the click events of the prescribed components are catered buy this component.
 */
const Row: FunctionComponent<TRowProps> = ({ children, onClick }) => {
    const onRowClick = (e: MouseEvent<HTMLButtonElement>) => {
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
