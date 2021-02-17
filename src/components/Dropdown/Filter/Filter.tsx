import { ChangeEvent, FunctionComponent, useContext } from 'react'
import DropdownContext from '../store'

const Filter: FunctionComponent = () => {
    const { options } = useContext(DropdownContext)

    const handleOnChange = ({
        currentTarget,
    }: ChangeEvent<HTMLInputElement>) => {
        const filter_text = currentTarget.value
        const filtered_options = options.get().map((option) => {
            if (!option.value.match(new RegExp(filter_text, 'ig'))) {
                option.visible = false
            } else option.visible = true

            return option
        })

        options.set(filtered_options)
    }
    // Add a cross to clear text
    return (
        <>
            <input type="text" onChange={handleOnChange} />
        </>
    )
}

export default Filter
