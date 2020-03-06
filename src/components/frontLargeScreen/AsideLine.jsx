import React, {useState} from 'react';
import './../../styles/aside.css';


let tableau = [];

export default function AsideLine({socket}) {

    const [action, setAction] = useState([]);

socket.on('media_choisi', trucsrecus => {
    
    tableau = action;
    tableau.push(trucsrecus[1]);
    console.log("trucs recus", tableau);
    setAction(trucsrecus);



    console.log("action", action)
})

    return (
    //     <li> 
    //         props.backgroundColor
    // <p><span className="aside-span" >{props.username}</span> has {props.action}</p>
    //     </li>
<div>
{
    
    tableau.map((e,k) => {
       return  <li key={k}> 
            {e} has voted
        </li>
    })
    
    }
</div>
    )
}
