import { FunctionComponent, useContext } from 'react'
import DropdownContext from 'src/store/Dropdown.context'

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
        <div className="control-container">
            <button className="control-button" onClick={onClearClick}>Clear</button>
            <button className="control-button control-submit" onClick={onSubmitClick}>Submit</button>
        </div>
    )
}

export default Controls
