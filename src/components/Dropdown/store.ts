import { createContext } from 'react'
import { TCollapseOp, TFormattedData, TOptionsOp } from './types'

type DropDownContextProps = {
    collapsed: TCollapseOp
    options: TOptionsOp
    multiSelect: boolean
}

declare const collapsed: boolean
declare const options: TFormattedData

const DropdownContext = createContext<DropDownContextProps>({
    collapsed: {
        get() {
            return collapsed
        },
        set(_collapsed: boolean) {},
    },
    options: {
        get() {
            return options
        },
        set(_options: TFormattedData) {},
        submit() {
            return
        },
    },
    multiSelect: false,
})

export default DropdownContext
