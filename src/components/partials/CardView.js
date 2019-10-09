import React, { Component } from 'react'
import { connect } from 'react-redux';
import Clipboard from 'clipboard';
import Notification from '../notification/notification';
import PartialCard from './users/PartialCard';
import '../../styles/CardView.css';
import logo from './../../assets/signlogo.png';
import facebook from './../../assets/icons/facebook.png';
import github from './../../assets/icons/github.png';
import instagram from './../../assets/icons/instagram.png';
import linkedin from './../../assets/icons/linkedin.png';
import skype from './../../assets/icons/skype.png';

new Clipboard('.btn-cb');

class CardView extends Component {
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
        const {form} = this.props
        return (
            <div className="w-1/2 h-12 ml-4">
                <p className="font-semibold text-lg py-4 pl-6 title-bloc">Aperçu de la signature</p>
                <div className="preview-card bg-white shadow-md rounded-lg px-6 pt-6 pb-8 flex flex-col">
                    <div className="header w-full overflow-hidden py-1">
                        <p className="pl-6 pb-4">Nouveau message</p>
                    </div>
                    <div id="clipboard-box">
                    <div className="md:flex bg-white rounded-lg p-6 mt-20" style={{fontFamily:form.font}}>
                         <PartialCard/>
                    </div>
                  </div>
                </div>
                <div className="form-info px-8 pt-6 pb-8 mb-4 flex flex-col"
                style={{position:'relative'}}>
                    <button 
                    onClick={this.NotificationShow.bind(this, 'notify')}
                    data-clipboard-target="#clipboard-box"
                    className="bg-black-600  w-full text-white font-bold py-4 px-6 mt-4 rounded-full next-button btn-cb">
                    Copier la signature dans le presse-papier
                    </button>
                </div>
                {this._renderSubComp()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })
  
  
export default connect(mapStateToProps)(CardView)