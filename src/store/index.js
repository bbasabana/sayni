import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const user = JSON.parse(localStorage.getItem('user') || '{}');

const initialState = {
    form : {
        firstName: '',
        color: '',
        font:'',
        lastName: '',
        profesional:'',
        department:'',
        email:'',
        phone:'',
        socialfacebook:'',
        socialgithub:'',
        socialinstagram:'',
        socialLinkedin:'',
        socialskype:'',
        photo: '',
        ...user
      }
}
const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'SET_FORM_FIELD':
            const form = {
                ...state.form,
                [payload.name]: payload.value
            }
            localStorage.setItem('user', JSON.stringify(form));
            return {
                ...state,
                form: {
                    ...state.form,
                    [payload.name]: payload.value
                }
            }
        default:
            return state;
    }
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);


export default store;