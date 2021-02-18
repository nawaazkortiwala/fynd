import { FunctionComponent } from 'react'
import { TCheckboxProps } from './Checkbox.types'
import './Checkbox.scss'

const Checkbox: FunctionComponent<TCheckboxProps> = ({ state }) => {
    let checkbox_class: string
    let checkmark_class: string

    if (state === 0) {
        checkbox_class = 'checkbox'
        checkmark_class = 'checkmark'
    } else if (state === 1) {
        checkbox_class = 'checkbox checked'
        checkmark_class = 'checkmark intermediate'
    } else {
        checkbox_class = 'checkbox checked'
        checkmark_class = 'checkmark checked'
    }

    return (
        <span className="checkbox-container">
            <span className={checkbox_class} />
            <span className={checkmark_class} />
        </span>
    )
}

export default Checkbox
