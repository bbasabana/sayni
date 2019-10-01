import React, { Component } from 'react'


class Installation extends Component {
    render() {
        return (
            <div className="installation">
            <div className="flex items-center mb-4">
                <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">6</div>
                <h2 className="text-lg title-bloc">Faites les choix des Couleurs et les Fonts</h2>
            </div>
            <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
                
            </div>
            <button className="bg-black-600 text-white font-bold py-4 px-6 mt-4 rounded-full next-button">
                Suivant
              </button>
        </div>
        )
    }
}

export default Installation
