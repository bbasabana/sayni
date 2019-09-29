import React, { Component } from 'react'
import { connect } from 'react-redux';

class CardView extends Component {
    render() {
        const {form} = this.props
        return (
            <div className="w-1/2 h-12 ml-4">
                <p className="font-semibold text-lg py-4 pl-6 title-bloc">Aperçu de la signature</p>
                <div className="preview-card bg-white shadow-md rounded-lg px-6 pt-6 pb-8 flex flex-col">
                    <div className="header w-full overflow-hidden py-1">
                        <p className="pl-6 pb-4">Nouveau message</p>
                    </div>
                    <div className="md:flex bg-white rounded-lg p-6 mt-20">
                        <div className="image-profile">
                            <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://pbs.twimg.com/profile_images/1113391996406829056/5EAomi6X_400x400.jpg"/>
                        </div>
                        <div className="text-center md:text-left  text-gray-800 pl-4">
                            <h2 className="text-lg text-gray-800 user-name"> {form.firstName} {form.lastName}</h2>
                            <p className="text-sm pb-3 text-gray-800 user-title"> {form.profesional} | {form.enterpriseName} | {form.department}</p>
                            <div className="text-gray-600 text-xs user-phone">Téléphone(s): </div>
                            <div className="text-gray-600 text-xs">Email: {form.email}</div>
                                <div className="text-gray-600 text-xs">Site web: {form.website} </div>
                                <div className="text-gray-600 text-xs">Adresse: {form.address}</div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })
  
  
export default connect(mapStateToProps)(CardView)