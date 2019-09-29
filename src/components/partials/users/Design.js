import React, { Component } from 'react'
import { GithubPicker } from 'react-color';
import { connect } from 'react-redux';
import { handleInputChange } from '../../../store/actions';

export class Design extends Component {

    changeColorStyle = (e) =>{
        this.props.dispatch(handleInputChange({value: e.hex, name: 'color'}))
    }
    render() {
        const { color } = this.props.form;
        return (
            <div className="image">
            <div className="flex items-center mb-4">
                <div className="border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">5</div>
                <h2 className="text-lg title-bloc">Faites les choix des Couleurs et les Fonts</h2>
            </div>
            <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
                <form className="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                           Font family
                        </label>
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                     </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Couleur
                        </label>
                        <GithubPicker
                          color={color} 
                          onChangeComplete={ this.changeColorStyle }
                        />
                    </div>
                </div>
                </form>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })
  
  
export default connect(mapStateToProps)(Design)

