import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { handleInputChange } from '../../../store/actions';
import './../../../styles/Image.css'


class Image extends Component {
    imageRef = React.createRef();
    onPhotoChange = (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            this.props.dispatch(handleInputChange({ name: 'photo', value: this.imageToDataUri(reader.result, 99, 99 ) }));

            
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    imageToDataUri = (data, width = 40, height = 40) => {
        // We create an image to receive the Data URI
        const img = document.createElement('img');

        img.onload = () => {
            // create an off-screen canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // set its dimension to target size
            canvas.width = width;
            canvas.height = height;

            // draw source image into the off-screen canvas:
            ctx.drawImage(img, 0, 0, width, height);

            // encode image to data-uri with base64 version of compressed image
            const image = canvas.toDataURL();
            this.props.dispatch(handleInputChange({ name: 'photo', value: image }));
            
            return image;
        };
        return img.src = data;
    }
    render() {
        const { photo } = this.props.form;
        return (
            <div className="image">
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">3</div>
                    <h2 className="text-lg title-bloc">Add a photo</h2>
                </div>
                <div className="form-info bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-8 flex flex-col">
                    <form className="w-full max-w-lg">
                        <div className="md:flex bg-white rounded-lg p-6 mt-4">
                            <div className="image-profile">
                                <img className="bg-gray-300 h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 image-profile" 
                                src={ photo || "https://image.flaticon.com/icons/svg/149/149071.svg"}/>
                            </div>
                            <input type="file" hidden onChange={this.onPhotoChange} ref={this.imageRef} />
                            <div className="text-center md:text-left  text-gray-800 pl-4">
                                <p className="text-sm pb-3 text-gray-800 user-title">
                                Download images in jpg, png or gif format.</p>
                                <button
                                    type="button"
                                    className="px-8 py-2 rounded-sm text-white bg-indigo-900"
                                    onClick={() => console.log(this.imageRef.current.click())}
                                >Add a picture</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Link  to="/social" className="bg-black-600 text-white font-bold py-4 px-6 rounded-full next-button">
                 Next
                </Link>
            </div>

        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Image);