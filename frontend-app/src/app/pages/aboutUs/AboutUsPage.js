import React, {useState} from 'react';
import {FormLabel} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const AboutUsPage = () => {

    const { t } = useTranslation();
    const [readMore, setReadMore] = useState(false);

    let info = t("about_page.text1_2");

    return (
        <div className="about_us_page">
            <div>
                <div className="about-us" style={{display: "grid", gridTemplateColumns: "5fr 7fr"}}>
                    <div className="info-img">
                    </div>
                    <div className="info-text mt-4">
                        <h1 style={{color:"black", fontWeight:"bold"}}>{t("about_page.text1_1")}</h1>
                        <p style={{fontSize:"1.3em"}}>
                            {readMore ? info : `${info.substring(0, 120)}...`}
                            <FormLabel style={{color:'black', fontWeight:"bold"}} onClick={() => setReadMore(!readMore)}>
                                {readMore ? 'show less' : '  read more'}
                            </FormLabel>
                        </p>
                        <div className="small-block" style={{fontWeight:"bold", fontSize:"0.7em"}}>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/circle.png" alt=""/>
                                <p>{t("about_page.text1_3_1")}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/circle.png" alt=""/>
                                <p>{t("about_page.text1_3_2")}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/circle.png" alt=""/>
                                <p>{t("about_page.text1_3_3")}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                                <img style={{width:"45px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/circle.png" alt=""/>
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