import React from 'react';
import {Card, Form} from "react-bootstrap";

const InfoBlock = (props) => {
    let data = props.elem;

    const styleCard = {
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 3fr',
        marginLeft: '25px',
        paddingBottom: '20px',
    }

    const styleTitle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '25px',
        paddingTop: '10px',
        paddingBottom: '20px',
    }
    const style = {
        marginTop: '2px',
        borderBottom: '1px solid grey'
    }

    const styleNotData = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10px'
    }

    return (
        <div style={style}>
            <div style={styleTitle}>
                {props.name}
            </div>

            {data.length !== 0 ?
                <div style={styleCard}>

                    {data.map((item) => (
                        <div>
                            <img style={{maxWidth: '20px', maxHeight: '20px'}}
                                 src="https://w7.pngwing.com/pngs/811/919/png-transparent-check-mark-computer-icons-blue-check-mark-angle-text-logo-thumbnail.png"
                                 alt="icon"/>
                            <label key={item.id}>
                                {item.name}
                            </label>
                        </div>
                    ))}
                </div>

                : <div style={styleNotData}>
                    Даних немає
                </div>
            }
        </div>
    );
};


export default InfoBlock;