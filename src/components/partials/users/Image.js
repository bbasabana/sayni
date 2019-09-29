import React, { Component } from 'react'

export class Image extends Component {
    render() {
        return (
            <div className="image">
                <div className="flex items-center mb-4">
                    <div className="border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">3</div>
                    <h2 className="text-lg title-bloc">Ajoutez une photo</h2>
                </div>
                <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <form className="w-full max-w-lg">
                        <div className="md:flex bg-white rounded-lg p-6 mt-4">
                            <div className="image-profile">
                                <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://pbs.twimg.com/profile_images/1113391996406829056/5EAomi6X_400x400.jpg"/>
                            </div>
                            <div className="text-center md:text-left  text-gray-800 pl-4">
                                <p className="text-sm pb-3 text-gray-800 user-title">
                                   Téléchargez les images en format jpg, png ou gif.</p>
                                <button className="px-8 py-2 rounded-sm text-white bg-indigo-900">Ajoutez une image</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Image
