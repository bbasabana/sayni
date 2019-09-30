import React, { Component } from 'react'
import { Link } from "react-router-dom";
import facebook from './../../../assets/icons/facebook.png';
import github from './../../../assets/icons/github.png';
import instagram from './../../../assets/icons/instagram.png';
import linkedin from './../../../assets/icons/linkedin.png';
import skype from './../../../assets/icons/skype.png';
import { connect } from 'react-redux';
import { handleInputChange } from '../../../store/actions';


class Social extends Component {

    state = {
        social : ''
    }
    renderShowSocial = () => {
        const {form} = this.props;
        const {social} = this.state
        switch(social) {
            case 'facebook' : 
                return (
                    <div className="facebook">
                        <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 mb-4 flex flex-col">
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                <div class="flex -mr-px">
                                    <span class="flex items-center leading-normal bg-gray-800 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm">www.facebook.com/</span>
                                </div>	
                                <input type="text" 
                                  name="socialfacebook" 
                                  onChange={this.InputUrlSocial} 
                                  value={form.socialFacebook}
                                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 text-gray-800 relative" placeholder="nom d'utilisateur" />
                            </div>	
                        </div>
                    </div>
                );

            case 'github' :
                return (
                    <div className="github">
                        <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 mb-4 flex flex-col">
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                <div class="flex -mr-px">
                                    <span class="flex items-center leading-normal bg-gray-800 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm">www.github.com/</span>
                                </div>	
                                <input 
                                 name="socialgithub" 
                                  onChange={this.InputUrlSocial} 
                                  value={form.socialgithub}
                                type="text"
                                 class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 text-gray-800 relative" placeholder="nom d'utilisateur" />
                            </div>	
                        </div>
                    </div>
                );
            
            case 'instagram' : 
                 return (
                    <div className="instagram">
                        <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 mb-4 flex flex-col">
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                <div class="flex -mr-px">
                                    <span class="flex items-center leading-normal bg-gray-800 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm">www.instagram.com/</span>
                                </div>	
                                <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 text-gray-800 relative" placeholder="nom d'utilisateur" />
                            </div>	
                        </div>
                    </div>
                 );
            
            case 'linkedin' :
                return (
                    <div className="linkedin">
                        <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 mb-4 flex flex-col">
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                <div class="flex -mr-px">
                                    <span class="flex items-center leading-normal bg-gray-800 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm">www.linkedin.com/</span>
                                </div>	
                                <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 text-gray-800 relative" placeholder="nom d'utilisateur" />
                            </div>	
                        </div>
                    </div>
                );
            
            case 'skype' :
                return(
                    <div className="skype">
                        <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 mb-4 flex flex-col">
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                <div class="flex -mr-px">
                                    <span class="flex items-center leading-normal bg-gray-800 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm">@skype/</span>
                                </div>	
                                <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 text-gray-800 relative" placeholder="identifiant" />
                            </div>	
                        </div>
                    </div>
                )
            default :
              return;
            
        }
    }
    OnclickShowContainerSocial = (newsocial = '') => {
        this.props.dispatch(handleInputChange(newsocial))
        console.log(newsocial)
        const {social} = this.state;
        if(newsocial === social){
            this.setState({
                social : ''
            })
        }else{
            this.setState({
                social : newsocial
            })
        }
    }
    InputUrlSocial = (e) => {
        this.props.dispatch(handleInputChange(e.target))
    }
    render() {
        const {form} = this.props;
        const iconstyle = {
            width : '42px',
        }
        return (
            <div className="image">
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">4</div>
                    <h2 className="text-lg title-bloc">Ajoutez liens vers les reseaux sociaux</h2>
                </div>
                <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-8 flex flex-col">
                    <form className="w-full max-w-lg">
                    <div class="px-2">
                        <div class="flex -mx-2">
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={facebook}  
                                name="facebook" 
                                value={form.facebook}
                                style={iconstyle} onClick={()=>this.OnclickShowContainerSocial('facebook')}/>
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={github}  name="github" style={iconstyle} onClick={()=>this.OnclickShowContainerSocial('github')}/> 
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={instagram} style={iconstyle} onClick={()=>this.OnclickShowContainerSocial('instagram')}/> 
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={linkedin} style={iconstyle} onClick={()=>this.OnclickShowContainerSocial('linkedin')}/> 
                                </div>
                            </div>
                            <div class="w-1/3 px-2">
                                <div class="h-12">
                                <img src={skype} style={iconstyle} onClick={()=>this.OnclickShowContainerSocial('skype')}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>

                <div className="socialbloc"> 
                   {this.renderShowSocial()}
                </div>
                
                <Link  to="/design" className="bg-black-600 text-white font-bold py-4 px-6 rounded-full next-button">
                 Suivant
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })
  
  
export default connect(mapStateToProps)(Social)
