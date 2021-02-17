import { FunctionComponent, useContext } from 'react'
import DropdownContext from '../../store'
import { TFormattedData, TFormattedDataNode } from '../../types'
import Option from './Option/Option'
import { updateSingleSelectedOption, updateMultiSelectedOption } from './util'

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

    return <>{render_options}</>
}

export default Options
