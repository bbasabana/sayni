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
                   <p className="font-bold text-2xl text-gray-700">Ajouter votre signature électronique</p> 
                    <div className="p-6 text-gray-800 font-normal">
                     <span className="mb-4">
                       1. Cliquez sur votre signature électronique ci-dessus pour la copier.
                     </span>  <br/>
                     <span>
                       2. Accédez à vos paramètres de messagerie et collez votre signature dans l'éditeur de signature.
                     </span>
                    
                    <div className="px-6 py-2 text-gray-600">
                        <p className="bg-gray-200 px-6 py-2 text-gray-700 mb-4 text-sm">
                            Si vous utilisez l'application Mac Mail par défaut, désactivez l'option 
                            «Toujours faire correspondre la police de message par défaut» avant de coller.
                        </p>

                        <p className="bg-gray-200 px-6 py-2 text-gray-700 text-sm">
                            Si vous utilisez le site Web Gmail, ouvrez les <a href="https://mail.google.com/mail/u/0/#settings/general" target="_blank" className="text-blue-600">paramètres Gmail</a>. <br/>
                            Collez votre signature dans l’éditeur de signatures, cochez la case située sous l’éditeur de signatures, puis cliquez sur "Enregistrer les modifications".
                        </p>
                        
                    </div>
                     <p className="mt-4">
                      C'est ça! Maintenant, essayez d'envoyer un email avec votre nouvelle signature.🎉
                     </p>
                    </div>
                </div>
                {this._renderSubComp()}
            </div>
        )
    }
}

export default Installation
