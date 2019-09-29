import React, { Component } from 'react'
import './../../../styles/Information.css';
import { connect } from 'react-redux';
import { handleInputChange } from '../../../store/actions';


class Information extends Component {
  inputHandler = (e) => {
    this.props.dispatch(handleInputChange(e.target))
  }

    render() {
      const { form } = this.props;
       return (
            <div className="information">
              <div className="flex items-center mb-4">
                  <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">1</div>
                  <h2 className="text-lg title-bloc">Ajoutez vos informations personnelles</h2>
              </div>
              <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
                  <form className="w-full max-w-lg" >
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nom
                          </label>
                          <input
                            name="lastName"
                            onChange={this.inputHandler} value={form.lastName}
                            className="appearance-none block w-full focus:bg-gray-200 border border-gray-400 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Basabana"
                            />
                        </div>
                        <div className="w-full md:w-1/2 dépx-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Prénom
                          </label>
                          <input name="firstName"  onChange={this.inputHandler} value={form.firstName} className="appearance-none block w-full focus:bg-gray-200 border border-gray-400 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="JBosco"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Profession
                            </label>
                            <input name="profesional" onChange={this.inputHandler} value={form.profesional} className="appearance-none block w-full focus:bg-gray-200 border border-gray-400 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="CTO"/>
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Departement
                            </label>
                            <input name="department" onChange={this.inputHandler} value={form.department} className="appearance-none block w-full focus:bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Informatique"/>
                          </div>
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Email
                            </label>
                            <input name="email" onChange={this.inputHandler} value={form.email} className="appearance-none block w-full focus:bg-gray-200 text-gray-700  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="email"/>
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Téléphone
                            </label>
                            <input name="phone" onChange={this.inputHandler} value={form.phone}  className="appearance-none block w-full focus:bg-gray-200 text-gray-700 border border-gray-400  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="+243......"/>
                          </div>
                      </div>
                  </form>
              </div>
              <button className="bg-black-600 text-white font-bold py-4 px-6 mt-4 rounded-full next-button">
                Suivant
              </button>
          </div>

        )
    }
}

const mapStateToProps = (state) => ({
  ...state,
})


export default connect(mapStateToProps)(Information)
