import React, { Component } from 'react'
import Notification from '../../notification/notification';
import { connect } from 'react-redux';

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
        const {form} = this.props
        return (
            <div className="installation">
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">6</div>
                    <h2 className="text-lg title-bloc">Steps to apply your signature</h2>
                </div>
                <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
                   <p className="font-bold text-2xl text-gray-700">Add your electronic signature</p> 
                    <div className="p-6 text-gray-800 font-normal">
                     <span className="mb-4">
                     1. Click on your electronic signature above to copy it.
                     </span>  <br/>
                     <span>
                     2. Go to your email settings and paste your signature in the signature editor.
                     </span>
                    
                    <div className="px-6 py-2 text-gray-600">
                        <p className="bg-gray-200 px-6 py-2 text-gray-700 mb-4 text-sm">
                        If you are using the default Mac Mail application, deactivate the option
                             "Always match the default message font" before pasting.
                        </p>

                        <p className="bg-gray-200 px-6 py-2 text-gray-700 text-sm">
                        If you're using the Gmail website, open them <a href="https://mail.google.com/mail/u/0/#settings/general" target="_blank" rel="noopener noreferrer" className="text-blue-600">Gmail settings</a>. <br/>
                        Paste your signature in the signature editor, check the box under the signature editor, then click on "Save changes".
                        </p>
                        
                    </div>
                     <p className="mt-4">
                     That's it! Now try to send an email with your new signature.🎉
                     </p>
                     <p className="mt-4">Future  <span className="font-bold">{form.firstName}</span>, will thank you. 🙏</p>
                    </div>
                </div>
                {this._renderSubComp()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })

export default connect(mapStateToProps)(Installation)
