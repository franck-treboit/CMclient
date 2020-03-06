import React from 'react';
import AsideLine from './AsideLine'

export default function Aside({socket}) {


    return (
        <aside>
            <h2>was passiert???</h2>


        <AsideLine socket = {socket} />
        

        </aside>
    )
}
