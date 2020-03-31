import React, { useState } from 'react'

import "../scss/index.scss"

const Index = () => {
    /* 记录ID值防止重复 */
    let [clac, setClac] = useState(0);

    /* 记录当前出入值 */
    let [inputValue, setInputValue] = useState("");

    /* 项目列表 */
    let [items, setItems] = useState({});
    
    return (
        <div style={{position: "relative"}}>
            <h1 style={{textAlign: "center", fontSize:'60px'}}>React Todos</h1>
            <div className="input-item-content">
                <div className="item-content">
                    <input type="text" className="item-input" onChange={
                        (input)=>{setInputValue(input.target.value);}
                    } value={inputValue}></input>
                    <div className="item-submite" onClick={() => {
                        if(inputValue) {
                            let $set = {};
                            $set[("item-"+clac)] = inputValue;
                            Object.assign(items, $set);

                            setInputValue("");
                            setItems(items);
                            setClac(++clac);
                        }
                    }}>Submit</div>
                </div>
                <div className="info-item-content">
                    {
                        Object.keys(items).map((key, index) => {
                            return(
                                <div className="info-content" key={index}>
                                    <div className="rmove-btn" onClick={(_OBJ)=>{
                                            let delkey = _OBJ.target.attributes["remove-key"].value;
                                            delete items[delkey];

                                            setItems(Object.assign({}, items));

                                        }} remove-key={key}>
                                        Rmove
                                    </div>
                                    <div className="item-title">{items[key]}</div>
                                </div>
                            );
                        })
                    }
                    
                </div>
            </div>
        </div>)
}
  export default Index