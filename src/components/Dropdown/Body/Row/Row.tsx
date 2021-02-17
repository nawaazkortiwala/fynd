import { FunctionComponent } from 'react'
import { TRowProps } from './type'

const Row: FunctionComponent<TRowProps> = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>
}

export default Row
