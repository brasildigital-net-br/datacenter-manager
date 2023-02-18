import React, {useState} from  "react";
import "./styles1.css";
function DefaultPage(){
    const [values, setValues] = useState()


    const handleChangeValues = (value) => {
        setValues((prevValue)=>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        console.log(values);
    };

    return(
        <div className="app-container">
            <div className="register-container">
                <h1 className="register-title">Rede Pon</h1>
                <input 
                 type="text"
                 name = "de" 
                 placeholder="from"
                 className="register-input"
                 onChange={handleChangeValues}
                 />
                 <input 
                 type="text"
                 name = "to" 
                 placeholder="to"
                 className="register-input"
                 onChange={handleChangeValues}
                 />
                 <input 
                 type="text"
                 name = "energy-ac" 
                 placeholder="ac"
                 className="register-input"
                 onChange={handleChangeValues}
                 />
                 <input 
                 type="text"
                 name = "energy-dc" 
                 placeholder="dc"
                 className="register-input"
                 onChange={handleChangeValues}
                 />
                <button className="button-add" onClick={() =>handleClickButton}>ADD</button>
                <button className="button-edit">EDIT</button>
                <button className="button-del">DEL</button>
            </div>
        </div>
    )

}

export default DefaultPage;
