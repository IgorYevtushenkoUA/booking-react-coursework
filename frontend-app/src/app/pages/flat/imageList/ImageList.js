import React, {useState} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import {FaQuoteRight} from 'react-icons/fa'
import '../../../style.css'

const ImageList = (props) => {
    const [index, setIndex] = useState(0)

    const nextImage = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > props.images.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = props.images.length - 1
            }
            return index
        })
    }

    return (
        <section className=''>
            <div className='block_center'>
                {props.images.map((image, imageIndex) => {
                    const {id, url} = image

                    let position = 'nextImage'
                    if (imageIndex === index) {
                        position = 'activeImage'
                    }
                    if (imageIndex === index - 1 || (index === 0 && imageIndex === props.images.length - 1)) {
                        position = 'lastImage'
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={url} className='img'/>
                        </article>
                    )
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft/>
                </button>
                <button className='next' onClick={nextImage}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    );
};

export default ImageList;