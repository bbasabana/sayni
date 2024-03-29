import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { GithubPicker } from 'react-color';
import { connect } from 'react-redux';
import { handleInputChange } from '../../../store/actions';

class Design extends Component {

    state = {
        fonts : [

        ]
    }

    changeColorStyle = (e) =>{
        this.props.dispatch(handleInputChange({value: e.hex, name: 'color'}))
    }
    handleChange = (e) => {
        this.props.dispatch(handleInputChange(e.target))
    }
    render() {
        const { color } = this.props.form;
        return (
            <div className="image">
            <div className="flex items-center mb-4">
                <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">5</div>
                <h2 className="text-lg title-bloc">Choose the Colors and Fonts</h2>
            </div>
            <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-8 flex flex-col">
                <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                           Font family
                        </label>
                        <select id="fonts" name="font" onChange={this.handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option value="arial">Arial</option>
                            <option value="georgia">Georgia</option>
                            <option value="helvetica">Helvetica</option>
                            <option value="Shrikhand">Rubik</option>
                        </select>
                     </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Color
                        </label>
                        <GithubPicker
                          color={color} 
                          onChangeComplete={ this.changeColorStyle }
                        />
                    </div>
                </div>
                </form>
            </div>
            <Link  to="/installation" className="bg-black-600 text-white font-bold py-4 px-6 rounded-full next-button">
                 Next
            </Link>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })
  
  
export default connect(mapStateToProps)(Design)

