import React, {useState} from 'react';
import {FormLabel} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const AboutUsPage = () => {

    const { t } = useTranslation();
    const [readMore, setReadMore] = useState(false);

    let info = t("about_page.text1_2");

    return (
        <div className="classic-form-page">
            <div>
                <div className="about-us" style={{display: "grid", gridTemplateColumns: "5fr 7fr"}}>
                    <div className="info-img">
                    </div>
                    <div className="info-text mt-4">
                        <h2 style={{color:"black", fontWeight:"bold"}}>{t("about_page.text1_1")}</h2>
                        <p style={{fontSize:"1.3em"}}>
                            {readMore ? info : `${info.substring(0, 120)}...`}
                            <FormLabel style={{color:'red', fontWeight:"bold"}} onClick={() => setReadMore(!readMore)}>
                                {readMore ? 'show less' : '  read more'}
                            </FormLabel>
                        </p>
                        <div className="small-block" style={{fontWeight:"bold", fontSize:"0.7em"}}>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://www.flaticon.com/svg/vstatic/svg/0/14.svg?token=exp=1618855688~hmac=d345a87d0a3e9b1802aae784ccd998d4" alt=""/>
                                <p>{t("about_page.text1_3_1")}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://www.flaticon.com/svg/vstatic/svg/0/14.svg?token=exp=1618855688~hmac=d345a87d0a3e9b1802aae784ccd998d4" alt=""/>
                                <p>{t("about_page.text1_3_2")}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://www.flaticon.com/svg/vstatic/svg/0/14.svg?token=exp=1618855688~hmac=d345a87d0a3e9b1802aae784ccd998d4" alt=""/>
                                <p>{t("about_page.text1_3_3")}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://www.flaticon.com/svg/vstatic/svg/0/14.svg?token=exp=1618855688~hmac=d345a87d0a3e9b1802aae784ccd998d4" alt=""/>
                                <p>{t("about_page.text1_3_4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;