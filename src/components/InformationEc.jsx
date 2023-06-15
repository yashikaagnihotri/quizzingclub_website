import React, {useState} from "react";
import ec_info from "../allArrays/ec-info";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function InformationEc() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(2);

    const [name, setName] = useState(ec_info[count2].name);
    const [text, setText] = useState(ec_info[count2].text);

    const [img1, setImg1] = useState(ec_info[count1].img);
    const [img2, setImg2] = useState(ec_info[count2].img);
    const [img3, setImg3] = useState(ec_info[count3].img);

    function handleLeftClick(){
        setCount1(count1 - 1);
        setCount2(count2 - 1);
        setCount3(count3 - 1);
    }

    function handleRightClick(){

        setCount1(count1 + 1);
        setCount2(count2 + 1);
        setCount3(count3 + 1);
    }

    React.useEffect(() => {
        
        setImg1(ec_info[count1].img);
        setImg2(ec_info[count2].img);
        setImg3(ec_info[count3].img);

        setName(ec_info[count2].name);
        setText(ec_info[count2].text);

    }, [count1, count2, count3]);

    return(<div className="info-ec">
        <button style={{ opacity : (count1 === 0) ? 0 : 1 }} onClick={handleLeftClick}><KeyboardArrowLeftIcon /></button>
        <img style={{ opacity : (ec_info[count1].id === 0) ? 0 : 1 }} className="side-img" src={img1} alt="side-img1" />
        <img className="middle-img" src={img2} alt="middle-img" />
        <div className="middle-img-section">
        <h2>{name}</h2>
        <p>{text}</p>
        </div>      
        <img style={{ opacity : (ec_info[count3].id === ec_info.length-1) ? 0 : 1 }} className="side-img" src={img3} alt="side-img2" />
        <button style={{ opacity : (count3 === ec_info.length-1) ? 0 : 1 }} onClick={handleRightClick}><KeyboardArrowRightIcon /></button>
    </div>);
}

export default InformationEc;
