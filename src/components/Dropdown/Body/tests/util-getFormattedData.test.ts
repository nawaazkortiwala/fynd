import { Option } from 'src/common/types'
import { TFormattedData } from '../../Dropdown.types'
import { getFormattedData } from '../../Dropdown.utils'

test('should return TFormattedData with arrayOfString', () => {
    const input = ['red', 'green']
    const output = [
        {
            id: 0,
            value: 'red',
            selected: false,
            visible: true,
        },
        {
            id: 1,
            value: 'green',
            selected: false,
            visible: true,
        },
    ]

    expect(getFormattedData(input)).toMatchObject(output)
})

test('should return TFormattedData with arrayOfObject', () => {
    const input = [
        { title: 'button', path: 'demo-button' },
        { title: 'Selection Control', path: 'demo-selection-control' },
    ]
    const output = [
        {
            id: 0,
            value: 'button',
            selected: false,
            visible: true,
        },
        {
            id: 1,
            value: 'Selection Control',
            selected: false,
            visible: true,
        },
    ]

    expect(getFormattedData(input)).toMatchObject(output)
})

test('should return TFormattedData with no items in it', () => {
    const input: Option[] = []
    const output: TFormattedData = []

    expect(getFormattedData(input)).toMatchObject(output)
})
