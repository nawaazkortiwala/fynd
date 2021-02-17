import Dropdown from './components/Dropdown/Dropdown'
import { arrayOfString, arrayOfObject } from './static/data'

const App = () => {
    // const [options, setOptions] = useState<Option[]>([])

    // const getSelectedOptions = (selected_options: Option[]) => {
    //     setOptions(selected_options)
    // }

    return <Dropdown data={arrayOfString} multiSelect={false} onSelect={(data) => console.log(data)} />
}

export default App
