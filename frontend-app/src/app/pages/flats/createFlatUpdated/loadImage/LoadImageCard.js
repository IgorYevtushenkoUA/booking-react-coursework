import React, {useState} from 'react';

const LoadImageCard = (props) => {

    const styleCard = {
        marginTop: '20px'
    }

    const style = {
        width: '100%',
        height: '40vh',
        border: '5px dashed black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const style2 = {
        width: '100%',
        height: '40vh',
        border: '5px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const dragStartHandler = (e) => {
        props.dragStartHandler(e);
    }

    const dragLeaveHandler = (e) => {
        props.dragLeaveHandler(e);
    }

    const onDropHandler = (e) => {
        props.onDropHandler(e);
    }

    return (
        <div style={styleCard}>
            {props.drag
                ? <div
                    className='drop-area' style={style}
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >Load Images</div>
                : <div
                    style={style2}
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >Перетащите фотки</div>
            }
        </div>
    );
};

export default LoadImageCard;