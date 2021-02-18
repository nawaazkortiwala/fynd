import { Option } from 'src/common/types'
import {
    TCollapseOp,
    TFormattedData,
    TFormattedDataNode,
} from './Dropdown.types'

// Transform the data from the Dropdown implementing component to an usable format.
export const getFormattedData = (data: Option[]): TFormattedData => {
    const formatted_data: TFormattedData = []

    data.forEach((item, index) => {
        if (doesDataHasString(item)) {
            formatted_data.push(createFormattedDataNode(index, item))
        } else if (doesDataHasObject(item)) {
            formatted_data.push(createFormattedDataNode(index, item.title))
        }
    })
    return formatted_data
}

const createFormattedDataNode = (
    id: number,
    value: string,
    selected = false,
    visible = true
): TFormattedDataNode => {
    /**
     *  id - the index values from the original data array
     *  value - the text value. Either from the array index directly or from the "title" property
     *  selected - maintains the options selection attribute
     *  visible - used during filtering options
     */

    return {
        id,
        value: capitalize(value),
        selected,
        visible,
    }
}

const capitalize = (value: string): string => {
    return value[0].toUpperCase() + value.slice(1)
}

const doesDataHasString = (data: Option): data is string => {
    return typeof data === 'string'
}

const doesDataHasObject = (data: Option): data is { title: string } => {
    return typeof data === 'object'
}

// Returns the selected data from the selected options
export const makeSubmissionData = (
    data: Array<any>,
    options: TFormattedData
): Array<any> => {
    return options
        .filter((option) => option.selected)
        .map((option) => data[option.id])
}

// Sets the all options visibility based on the argument passed
export const setDataVisibility = (
    options: TFormattedData,
    visible: boolean
): TFormattedData => {
    return options.map((option) => {
        option.visible = visible
        return option
    })
}

// Collapsed the dropdown on click outside the dropdown
export function collapseDropdown() {
    const dropdown_el: HTMLDivElement = arguments[0]
    const collapsed: TCollapseOp = arguments[1]
    const multiSelect: boolean = arguments[3]
    const e = arguments[4]

    if (!multiSelect && !dropdown_el.contains(e.target)) {
        collapsed.set(true)
    }
}
