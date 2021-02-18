import { FunctionComponent, useContext } from 'react'
import DropdownContext from 'src/store/Dropdown.context'
import Checkbox from '../Checkbox/Checkbox'
import Row from '../Row/Row'
import {
    getCurrentSelection,
    getMultiSelectState,
    markOptionsSelected,
} from './MultiSelect.utils'

/**
 * Selects and deselects options based on current state
 *
 * About the State:
 *      0 - No options selected
 *      1 - Some options selected
 *      2 - All options selected
 */
const MultiSelect: FunctionComponent = () => {
    const { options, multiSelect } = useContext(DropdownContext)

    if (!multiSelect) return <></>

    const state = getMultiSelectState(options.get())

    const onMultiSelectClick = () => {
        let selection: boolean = getCurrentSelection(state)

        const modified_options = markOptionsSelected(options.get(), selection)

        options.set(modified_options)
    }

    return (
        <Row onClick={onMultiSelectClick}>
            <Checkbox state={state} />
        </Row>
    )
}

export default MultiSelect
