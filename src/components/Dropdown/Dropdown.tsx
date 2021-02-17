import { FunctionComponent, ReactElement, useState } from 'react'
import Body from './Body/Body'
import Filter from './Filter/Filter'
import { TDropDownProps, TFormattedData, TFormattedDataNode } from './types'
import { getFormattedData } from './util'

const Dropdown: FunctionComponent<TDropDownProps> = ({
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
    const [options, setOptions] = useState<TFormattedData>(
        getFormattedData(data)
    )

    const handleFilterTextChange = (filter_text: string): void => {
        const filtered_options = options.map((option) => {
            if (!option.value.match(new RegExp(filter_text, 'ig'))) {
                option.visible = false
            } else option.visible = true

            return option
        })
        setOptions(filtered_options)
    }

    const optionsOps = {
        get() {
            return options
        },
        add(option: TFormattedDataNode) {
            setOptions([...options, option])
        },
        remove(option: TFormattedDataNode) {
            setOptions(options.filter((_option) => _option.id !== option.id))
        },
        submit() {
            return options.filter((option) => {
                if (option.selected) return data[option.id]    
                return false
            })
        },
    }

    return (
        <>
            <Filter onChange={handleFilterTextChange} />
            <Body options={optionsOps} multiSelect={multiSelect} />
        </>
    )
}

export default Dropdown
