import { ChangeEvent, FunctionComponent, useContext } from 'react'
import DropdownContext from 'src/store/Dropdown.context'
import './Filter.scss'
import { getFilteredOptions } from './Filter.utils'

const Filter: FunctionComponent = () => {
    const { options } = useContext(DropdownContext)

    const handleOnChange = ({
        currentTarget,
    }: ChangeEvent<HTMLInputElement>) => {
        const filtered_options = getFilteredOptions(
            options.get(),
            currentTarget.value
        )

        options.set(filtered_options)
    }
    // Add a cross to clear text
    return (
        <div className="dropdown-filter">
            <input type="text" className="input" onChange={handleOnChange} />
        </div>
    )
}

export default Filter
