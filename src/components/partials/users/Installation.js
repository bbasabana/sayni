import React, { Component } from 'react'
import Notification from '../../notification/notification';


class Installation extends Component {

    state = {
        render : ''
    }
    NotificationShow  = (compName, e) => {
        console.log(compName)
        this.setState({render:compName})
    }
    _renderSubComp(){
        switch(this.state.render){
            case 'notify': return <Notification/>
            default:
                return;
        }
    }
    render() {
        return (
            <div className="installation">
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">6</div>
                    <h2 className="text-lg title-bloc">Étapes à suivre pour appliquer votre signature</h2>
                </div>
                <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <p className="mt-6 p-6">
                    <span className="font-bold text-gray-800"> PS: Veuillez vous positionner à l'endroit indiquer pour mettre la signature selon votre client du mail. </span> 

                    <br/> <br/> <br/>
                    <span className="font-sm text-gray-800">
                    - Collez la signature copiée dans la section Modifier la signature (Ctrl + V).
                    </span>

                    </p>
                </div>
                {this._renderSubComp()}
            </div>
        )
    }
}

export default Installation
