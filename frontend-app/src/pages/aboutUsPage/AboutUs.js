import React, {useContext, useState} from 'react';
import {Card, Col, Container, FormLabel, Row} from "react-bootstrap";
import './AboutUs.css';
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

const AboutUs = observer(() => {
    const { t } = useTranslation();
    const [readMore, setReadMore] = useState(false);

    let info = t("about_page.text1_2");
    return (
        <Container>
            <div>
                <div className="about-us" style={{display: "grid", gridTemplateColumns: "5fr 5fr"}}>
                    <div className="info-img">

                    </div>
                    <div className="info-text">

                        <h2>{t("about_page.text1_1")}</h2>
                        <p>
                            {readMore ? info : `${info.substring(0, 120)}...`}
                            <FormLabel style={{color:'red'}} onClick={() => setReadMore(!readMore)}>
                                {readMore ? 'show less' : '  read more'}
                            </FormLabel>
                        </p>
                        <div className="card">
                            <Card>
                                <img src="" alt=""/>
                                <p>{t("about_page.text1_3_1")}</p>
                            </Card>
                            <Card>
                                <img src="" alt=""/>
                                <p>{t("about_page.text1_3_2")}</p>
                            </Card>
                            <Card>
                                <img src="" alt=""/>
                                <p>{t("about_page.text1_3_3")}</p>
                            </Card>
                            <Card>
                                <img src="" alt=""/>
                                <p>{t("about_page.text1_3_4")}</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
});

export default AboutUs;