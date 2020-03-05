import React from 'react';
import './../../styles/aside.css';
import Avatar from './../Avatar';



export default function AsideLine({socket}) {

console.log("console log du socket problématique", socket)

    return (
    //     <li> 
    //         props.backgroundColor
    // <p><span className="aside-span" >{props.username}</span> has {props.action}</p>
    //     </li>


<li> 

<Avatar socket = {socket} />

<p><span className="aside-span" >Machintruc</span> has prouted</p>
</li>
    )
}
