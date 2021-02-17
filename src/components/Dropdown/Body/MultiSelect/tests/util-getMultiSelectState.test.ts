import { arrayOfObject, arrayOfString } from '../../../../../static/data'
import { getFormattedData } from '../../../util'
import { getMultiSelectState } from '../util'

const formatted_data_strings = getFormattedData(arrayOfString)
const formatted_data_objects = getFormattedData(arrayOfObject)

test('should return state as 0', () => {
    const input_1 = formatted_data_strings
    const input_2 = formatted_data_objects

    const output = 0

    expect(getMultiSelectState(input_1)).toBe(output)
    expect(getMultiSelectState(input_2)).toBe(output)
})

test('should return state as 1', () => {
    const input_1 = formatted_data_strings.map((option, index) => {
        if (index < formatted_data_strings.length / 2) {
            option.selected = true
        }
        return option
    })
    const input_2 = formatted_data_objects.map((option, index) => {
        if (index < formatted_data_objects.length / 2) {
            option.selected = true
        }
        return option
    })

    const output = 1

    expect(getMultiSelectState(input_1)).toBe(output)
    expect(getMultiSelectState(input_2)).toBe(output)
})

test('should return state as 2', () => {
    const input_1 = formatted_data_strings.map((option) => {
        option.selected = true
        return option
    })
    const input_2 = formatted_data_objects.map((option) => {
        option.selected = true
        return option
    })

    const output = 2

    expect(getMultiSelectState(input_1)).toBe(output)
    expect(getMultiSelectState(input_2)).toBe(output)
})
