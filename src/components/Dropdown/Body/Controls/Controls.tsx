import { FunctionComponent, useContext } from 'react'
import DropdownContext from '../../store'

const Controls: FunctionComponent = () => {
    const { options, multiSelect } = useContext(DropdownContext)

    const onClearClick = () => {
        const modified_options = options.get().map((option) => {
            option.selected = false
            return option
        })

        options.set(modified_options)
    }

    const onSubmitClick = () => {
        options.submit()
    }

    if (!multiSelect) return <></>

    return (
        <>
            <button onClick={onClearClick}>Clear</button>
            <button onClick={onSubmitClick}>Submit</button>
        </>
    )
}

export default Controls
