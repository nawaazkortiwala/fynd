import { FunctionComponent, useContext } from 'react'
import DropdownContext from 'src/store/Dropdown.context'
import Checkbox from '../Checkbox/Checkbox'
import Row from '../Row/Row'
import { getMultiSelectState } from './MultiSelect.utils'

const MultiSelect: FunctionComponent = () => {
    const { options, multiSelect } = useContext(DropdownContext)

    if (!multiSelect) return <></>

    const state = getMultiSelectState(options.get())

    const onMultiSelectClick = () => {
        let selection: boolean = false
        
        if (state === 0 || state === 1) {
            selection = true
        } else selection = false
        
        const modified_options = options.get().map((option) => {
            option.selected = selection
            return option
        })
        
        options.set(modified_options)
    }

    return (
        <Row onClick={onMultiSelectClick}>
            <Checkbox state={state} />
        </Row>
    )
}

export default MultiSelect
