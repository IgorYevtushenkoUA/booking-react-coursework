import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createImage} from "../../../store/additional/flat/flatActions";

const LoadImageCard = (props) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        props.setImages(e.target.files);
        // if (e.target.files) {
        //     const filesArray = Array.from(e.target.files).map((file) =>
        //         URL.createObjectURL(file)
        //     );
        //
        //
        //     console.log("filesArray: ", filesArray);
        //     debugger
        //     setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        //
        //     Array.from(e.target.files).map(
        //         (file) => URL.revokeObjectURL(file)
        //     );
        //     debugger
        // }
    };

    const styleImage = {
        maxHeight: '90px',
        maxWeight: '45px',
    }

    const renderPhotos = (source) => {
        console.log("source: ", source);
        return source.map((photo) => {
            return <img src={photo} alt="" key={photo} style={styleImage}/>;
        });
    };

    return (
        <div className="image_loader">
            <div>
                <input  type="file" id="file" multiple onChange={handleImageChange}/>
                <div className="result">{renderPhotos(selectedFiles)}</div>
            </div>
        </div>
    );
};

export default LoadImageCard;