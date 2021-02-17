import { FunctionComponent } from 'react'
import { checkboxes } from 'src/config/assets'
import { TCheckboxProps } from './type'

const Checkbox: FunctionComponent<TCheckboxProps> = ({ state }) => {
    const attr = (() => {
        if (state === 0) {
            return checkboxes.empty
        } else if (state === 1) {
            return checkboxes.partial
        } else if (state === 2) {
            return checkboxes.complete
        }
    })()
    return <img src={attr?.src} alt={attr?.alt}/>
}

export default Checkbox