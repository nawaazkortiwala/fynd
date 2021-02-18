import { FunctionComponent } from 'react'
import Checkbox from '../../Checkbox/Checkbox'
import Row from '../../Row/Row'
import { TOptionProps } from './Option.types'
import { getCheckboxState } from './Option.utils'

// The visible option on the screen.
const Option: FunctionComponent<TOptionProps> = ({ option, selectable, onClick }) => {
    const checkbox = selectable ? <Checkbox state={getCheckboxState(option.selected)} /> : <></>

    const onOptionClick = () => {
        option.selected = !option.selected
        onClick(option)
    }

    return (
        <Row onClick={onOptionClick}>
            {checkbox}
            <span>{option.value}</span>
        </Row>
    )
}

export default Option
