import { FunctionComponent } from 'react'
import Controls from './Controls/Controls'
import MultiSelect from './MultiSelect/MultiSelect'
import Options from './Options/Options'

const Body: FunctionComponent = () => {
    

    return (
        <>
            <MultiSelect />
            <Options />
            <Controls />
        </>
    )
}

export default Body
