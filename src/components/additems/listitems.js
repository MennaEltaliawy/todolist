import React from "react";
import "./listitems.css" ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ListItems (props){
    const items = props.Items;
    const Listitems = items.map (item =>
        {
            return <div className="List" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.item}></input>

                    <span>
                    <FontAwesomeIcon className="iconn" onClick={() => {
                    props.deleteItem(item.key)
        }}              icon="trash" />              
                    
                </span>
                </p>
            </div>

        }
    )
        return (
            <div>{Listitems}</div>
        )
}

export default ListItems