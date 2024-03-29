import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './../../../styles/Entreprise.css';
import { connect } from 'react-redux';
import { handleInputChange } from '../../../store/actions';

class Entreprise extends Component {

    inputHandlerEntreprise = (e) =>{
        this.props.dispatch(handleInputChange(e.target))
    }
    render() {
        const {form} = this.props;
        return (
            <div className="entreprise">
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">2</div>
                    <h2 className="text-lg title-bloc">Add company information</h2>
                </div>
                <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-8 flex flex-col">
                    <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          Company Name
                          </label>
                          <input
                            name="enterpriseName"
                            onChange={this.inputHandlerEntreprise} value={form.enterpriseName}
                            className="appearance-none block w-full focus:bg-gray-200 border border-gray-400 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enterprise"
                            />
                        </div>
                        <div className="w-full md:w-1/2 dépx-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                           Web site
                          </label>
                          <input 
                           name="website"
                           onChange={this.inputHandlerEntreprise} value={form.website}
                           className="appearance-none block w-full focus:bg-gray-200 border border-gray-400 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="www.sayni.com"
                          />
                        </div>
                      </div>
                        
                    <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Address
                            </label>
                            <input 
                             name="address"
                             onChange={this.inputHandlerEntreprise} value={form.address}
                             className="appearance-none w-full block focus:bg-gray-200 border border-gray-400  text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Address"/>
                            </div>
                    </div>
                    </form>
                </div>
                <Link  to="/image" className="bg-black-600 text-white font-bold py-4 px-6 rounded-full next-button">
                 Next
                </Link>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    ...state,
  })
  
  
export default connect(mapStateToProps)(Entreprise)
