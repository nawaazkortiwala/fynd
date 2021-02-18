import { FunctionComponent, useContext } from 'react'
import DropdownContext from 'src/store/Dropdown.context'
import { TFormattedDataNode } from '../../Dropdown.types'
import Option from './Option/Option'
import { updateSingleSelectedOption, updateMultiSelectedOption } from './Options.utils'
import './Options.scss'

const Options: FunctionComponent = () => {
    const { options, multiSelect } = useContext(DropdownContext)

    const onOptionSingleClick = (option: TFormattedDataNode) => {
        const modified_options = updateSingleSelectedOption(
            options.get(),
            option
        )
        options.set(modified_options)
        options.submit()
    }

    const onOptionMultiClick = (option: TFormattedDataNode) => {
        const modified_options = updateMultiSelectedOption(
            options.get(),
            option
        )
        options.set(modified_options)
    }

    const visible_options = options.get().filter((option) => option.visible)
    const render_options = visible_options.map((option) => {
        return (
            <Option
                key={option.id}
                option={option}
                selectable={multiSelect}
                onClick={multiSelect ? onOptionMultiClick : onOptionSingleClick}
            />
        )
    })

    return <div className="option-container">{render_options}</div>
}

export default Options
