import { FunctionComponent, useCallback, useContext, useState } from 'react'
import DropdownContext from '../../store'
import Checkbox from '../Checkbox/Checkbox'
import Row from '../Row/Row'
import { TMultiSelectState } from './types'
import { getMultiSelectState } from './util'

const MultiSelect: FunctionComponent = () => {
    const { options, multiSelect } = useContext(DropdownContext)

    if (!multiSelect) return <></>

    const state = getMultiSelectState(options.get())

    const onMultiSelectClick = () => {
        let selection: boolean = false
        let next_state: TMultiSelectState = 0
        
        if (state === 0 || state === 1) {
            next_state = 2
            selection = true
        } else selection = false
        
        const modified_options = options.get().map((option) => {
            next_state = 0
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
