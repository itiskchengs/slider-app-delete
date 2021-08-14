import React, {useState} from 'react';
import ColorSlider from '../slider/ColorSlider';
import ColorOutput from '../output/ColorOutput';


const ColorBrowser = () => {
    const[colors, setColors] = useState({
        red: 55,
        green: 150,
        blue: 25
    })

    const updateColor = (name, value) => {
        setColors({...colors, [name]: value})
    }

    return(
        <div>
        <ColorSlider name="red" value={colors.red} updateColor={updateColor} />
        <ColorSlider name="green" value={colors.green} updateColor={updateColor} />
        <ColorSlider name="blue" value={colors.blue} updateColor={updateColor} />
        <ColorOutput colors = {colors}/>
        </div>
    )
}

export default ColorBrowser;