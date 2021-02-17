import Dropdown from './components/Dropdown/Dropdown'
import { arrayOfString, arrayOfObject } from './static/data'

const App = () => {
    // const [options, setOptions] = useState<Option[]>([])

    // const getSelectedOptions = (selected_options: Option[]) => {
    //     setOptions(selected_options)
    // }

    return (
        <>
            <Dropdown
                label="Colors"
                data={arrayOfString}
                multiSelect={false}
                onSelect={(data: any) => console.log(data)}
            />
            <br/>
            <Dropdown
                label="Colors"
                data={arrayOfString}
                multiSelect={true}
                onSelect={(data: any) => console.log(data)}
            />
            <br />
            <Dropdown
                label="Colors"
                data={arrayOfObject}
                multiSelect={false}
                onSelect={(data: any) => console.log(data)}
            />
            <br />
            <Dropdown
                label="Colors"
                data={arrayOfObject}
                multiSelect={true}
                onSelect={(data: any) => console.log(data)}
            />
        </>
    )
}

export default App
