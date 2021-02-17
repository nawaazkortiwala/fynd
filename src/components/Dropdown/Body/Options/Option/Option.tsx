import { FunctionComponent } from 'react'
import Checkbox from '../../Checkbox/Checkbox'
import Row from '../../Row/Row'
import { TOptionProps } from './types'
import { getCheckboxState } from './util'

const Option: FunctionComponent<TOptionProps> = ({ option, selectable, onClick }) => {

    const checkbox = selectable ? <Checkbox state={getCheckboxState(option.selected)} /> : <></>

    const onOptionClick = () => {
        option.selected = !option.selected
        onClick(option)
    }

    return (
        <Row onClick={onOptionClick}>
            <span>{checkbox}</span>
            {option.value}
        </Row>
    )
}

export default Option
