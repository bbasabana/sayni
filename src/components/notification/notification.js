import React, { Component } from 'react'
import success from '../../assets/success.png';
import '../../styles/Notification.css';

export class notification extends Component {
    render() {
        return (
            <div className="flex items-center bg-green-500 text-white shadow-md rounded-lg text-sm font-bold px-4 py-3 alert-success " role="alert">
               <img className="svg-icon p-2" alt="icon" src={success}/>
                <p>Votre signature a été copié dans le presse-passe.</p>
            </div>
        )
    }
}

export default notification
