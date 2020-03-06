import React, {useState} from 'react';
import './../../styles/aside.css';


let tableau = [];

export default function AsideLine({socket}) {

    const [action, setAction] = useState([]);

socket.on('media_choisi', trucsrecus => {
    
    tableau = action;
    tableau.push(trucsrecus[1]);
    setAction(trucsrecus);
})

    return (
        //     <li>
        //         props.backgroundColor
        // <p><span className="aside-span" >{props.username}</span> has {props.action}</p>
        //     </li>
        <div>
        {
            tableau.reverse().map((e,k) => {
               return  <li key={k}>
                    {e} has voted
                </li>
            })

        }
        </div>
    )
}
