import { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import Body from './Body/Body'
import Filter from './Filter/Filter'
import DropdownContext from './store'
import {
    TCollapseOp,
    TDropDownProps,
    TFormattedData,
    TOptionsOp,
} from './types'
import { getFormattedData, makeSubmissionData, setDataVisibility } from './util'
import View from './View/View'

const Dropdown: FunctionComponent<TDropDownProps> = ({
    label,
    data,
    multiSelect,
    onSelect,
}): ReactElement => {
    /**
     * Create an inline data represemtation
     * Create a state for selected options
     * Create a function to handle filtering of selected options based on filter text
     * Call 2 child elements:
     *  1. Filter
     *  2. Body
     */
    const [collapsed, setCollapsed] = useState(false)
    const [options, setOptions] = useState<TFormattedData>(
        getFormattedData(data)
    )

    const collapseOp: TCollapseOp = {
        get() {
            return collapsed
        },
        set(collapse: boolean) {
            setCollapsed(collapse)
        },
    }

    const optionsOp: TOptionsOp = {
        get() {
            return options
        },
        set(_options: TFormattedData) {
            setOptions(_options)
        },
        submit() {
            const submission_data = makeSubmissionData(data, options)
            onSelect(submission_data)

            collapseOp.set(true)

            const _options = setDataVisibility(options, true)
            setOptions(_options)
        },
    }

    useEffect(() => {
        console.log(
            options
                .filter((option) => option.visible)
                .map((option) => option.value)
                .join(' ')
        )
    }, [options])

    return (
        <DropdownContext.Provider
            value={{ collapsed: collapseOp, options: optionsOp, multiSelect }}
        >
            <View label={label}>
                <Filter />
                <Body />
            </View>
        </DropdownContext.Provider>
    )
}

export default Dropdown
