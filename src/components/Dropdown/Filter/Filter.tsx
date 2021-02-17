import { ChangeEvent, FunctionComponent } from 'react'
import { TFilterProps } from './types'

const Filter: FunctionComponent<TFilterProps> = ({ onChange }) => {
    const handleOnChange = ({ currentTarget }: ChangeEvent<HTMLInputElement> ) => {
        onChange(currentTarget.value)
    }
    return (
        <>
            <input type="text" onChange={handleOnChange} />
        </>
    )
}

export default Filter
