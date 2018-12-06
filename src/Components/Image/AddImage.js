import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImages, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import "./AddImage.css";


class AddImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: "",
            imageValidate: {
                name: "",
                image: []
            }
        }
    }


    handleOnChange = event => {

        let files = Array.from(event.target.files)
        let formData = new FormData()
        files.forEach((file, i) => {
            formData.append(file, i)
        });
        this.setState({
            images: files
        })
    }

    removeImage = (id) => {

        let filterImage = this.state.images.filter(image => image !== id)
        this.setState({
            images: filterImage
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let image = [...this.state.images]

        let data = new FormData()
        image.forEach((image) => {
            data.append("name", this.state.name)
            data.append("files", image)
        })

        fetch('http://0.0.0.0:8000/api/face/upload/', {
            method: 'POST',
            body: data
        }).then(response => {
            if (response.ok)
                alert("Successfully Uploaded")

        })
    }

    handleInput = (e) => {
        let name = [...this.state.name]
        name = e.currentTarget.value;
        this.setState({
            name
        })
    }

    render() {
        const {images} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="col-lg-6 offset-2 form-group">
                    <h1>Alavya face training form</h1>
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <div>
                            <input
                                value={this.state.name}
                                onChange={this.handleInput}
                                className="form-control" id="name" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="clickable" required> Upload Image <br/>
                            <FontAwesomeIcon icon={faImages} color='#6d84b4' size='2x'/>
                            <input type='file' onChange={this.handleOnChange} multiple/>
                        </label>
                    </div>
                    <div className="row">
                        {images.map((image, i) =>
                            <div key={i} className="image-size">
                                <div onClick={() => this.removeImage(image, i)}>
                                    <FontAwesomeIcon icon={faTimesCircle} className="remove-button clickable"/>
                                </div>
                                <img src={URL.createObjectURL(image, i)} alt=""/>
                            </div>
                        )}
                    </div>
                    <button className="btn btn-secondary custom-submit-button float-right">Upload</button>
                </div>
            </form>
        );
    }
}

export default AddImage;