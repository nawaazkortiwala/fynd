import { FunctionComponent, useContext } from 'react'
import Filter from './Filter/Filter'
import Controls from './Controls/Controls'
import MultiSelect from './MultiSelect/MultiSelect'
import Options from './Options/Options'
import DropdownContext from 'src/store/Dropdown.context'
import './Body.scss'

// Contains the expanded dropdown
const Body: FunctionComponent = () => {
    const { collapsed } = useContext(DropdownContext)
    if (collapsed.get()) return <></>
    return (
        <div className="dropdown-body">
            <Filter />
            <MultiSelect />
            <Options />
            <Controls />
        </div>
    )
}

export default Body
