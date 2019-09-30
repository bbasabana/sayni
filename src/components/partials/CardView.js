import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../../styles/CardView.css';
import facebook from './../../assets/icons/facebook.png';
import github from './../../assets/icons/github.png';
import instagram from './../../assets/icons/instagram.png';
import linkedin from './../../assets/icons/linkedin.png';
import skype from './../../assets/icons/skype.png';


class CardView extends Component {
    render() {
        const {form} = this.props
        const iconstyle = {
            width : '24px',
        }
        return (
            <div className="w-1/2 h-12 ml-4">
                <p className="font-semibold text-lg py-4 pl-6 title-bloc">Aperçu de la signature</p>
                <div className="preview-card bg-white shadow-md rounded-lg px-6 pt-6 pb-8 flex flex-col">
                    <div className="header w-full overflow-hidden py-1">
                        <p className="pl-6 pb-4">Nouveau message</p>
                    </div>
                    <div className="md:flex bg-white rounded-lg p-6 mt-20">
                        <div className="image-profile">
                            <img className="bg-gray-500 h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" 
                            src="https://pbs.twimg.com/profile_images/1113391996406829056/5EAomi6X_400x400.jpg"/>
                        </div>
                        <div className="text-center md:text-left  text-gray-800 pl-4"  style={{fontFamily:form.font}}>
                            <h2 className="text-lg text-gray-900 user-name"> {form.firstName} {form.lastName}
                            </h2>
                            <p className="text-sm pb-3 text-gray-900 user-title"> {form.profesional} | {form.enterpriseName} | {form.department}
                            </p>
                            <div className="text-gray-600 text-xs user-phone"> Téléphone(s): &nbsp;
                            <span style={{color: form.color}}>{form.phone}</span></div>
                            <div className="text-gray-600 text-xs">Email: &nbsp;
                             <span style={{color: form.color}}>{form.email}</span>
                            </div>
                            <div className="text-gray-600 text-xs">Site web: &nbsp;
                            <span style={{color: form.color}}>{form.website}</span> 
                            </div>
                            <div className="text-gray-600 text-xs">Adresse: &nbsp;
                                <span style={{color: form.color}}>{form.address}</span>
                            </div>
                            <div class="px-2 mt-4">
                        <div class="flex -mx-2">
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                    <a href={`https://web.facebook.com/${form.socialfacebook}`} target="_blank">
                                        <img src={facebook}  
                                        style={iconstyle} />
                                    </a>
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={github}  
                                name="github" 
                                style={iconstyle} 
                                 /> 
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                 <img src={instagram}
                                 style={iconstyle} 
                                 /> 
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={linkedin} 
                                style={iconstyle} 
                                 /> 
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={skype} 
                                style={iconstyle} 
                                 /> 
                                </div>
                            </div>
                        </div>
                    </div>
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