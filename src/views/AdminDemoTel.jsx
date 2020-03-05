import React, {useState, useEffect} from "react";

import io from 'socket.io-client';
import './../styles/style.css';
import './../styles/device.css';

export default function AdminDemoTel() {
    const [socket, setSocket] = useState( io(`${process.env.REACT_APP_BACKEND_URL}`))

    useEffect(() => {
        socket.emit("registerAdmin", "iamadminmedia" );
    }, []);

    function handleAdminFront(xx) {
        console.log("lll",xx);
        socket.emit('FrontSequenceur', xx);
    }

    function handleAdminTel(xx) {
        console.log("222",xx)
        socket.emit('TelSequenceur', [0, xx, 0]);
    }

    return (
        <div>
                <div className="FrontAdmin">
                    <button onClick={() => handleAdminFront(1)}>1</button>
                    <button onClick={() => handleAdminFront(2)}>2</button>
                    <button onClick={() => handleAdminFront(3)}>3</button>
                    <button onClick={() => handleAdminFront(4)}>4</button>
                    <button onClick={() => handleAdminFront(5)}>5</button>
                    <button onClick={() => handleAdminFront(6)}>6</button>
                    <button onClick={() => handleAdminFront(7)}>7</button>
                    <button onClick={() => handleAdminFront(8)}>8</button>
                    <button onClick={() => handleAdminFront(9)}>9</button>
                    <button onClick={() => handleAdminFront(10)}>10</button>
                    <button onClick={() => handleAdminFront(11)}>11</button>
                </div>
            <div className="FrontAdmin">
                <button onClick={() => handleAdminTel(1)}>1</button>
                <button onClick={() => handleAdminTel(2)}>2</button>
                <button onClick={() => handleAdminTel(3)}>3</button>
                <button onClick={() => handleAdminTel(4)}>4</button>
                <button onClick={() => handleAdminTel(5)}>5</button>
                <button onClick={() => handleAdminTel(6)}>6</button>
                <button onClick={() => handleAdminTel(7)}>7</button>
                <button onClick={() => handleAdminTel(8)}>8</button>
                <button onClick={() => handleAdminTel(9)}>9</button>
                <button onClick={() => handleAdminTel(10)}>10</button>
                <button onClick={() => handleAdminTel(11)}>11</button>
            </div>
        </div>
    )
}
