import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import './AboutUs.css';


const AboutUs = () => {
    return (
        <Container>
            <div >
                <div className="about-us" style={{display:"grid", gridTemplateColumns:"5fr 5fr"}}>
                    <div className="info-img">

                    </div>
                    <div className="info-text">
                        <h2>Чим ми займаємося</h2>
                        <p>Flatty — це пошуковик нерухомості на вторинному ринку. Ми збираємо всі актуальні
                            оголошення,
                            групуємо дублікати та пропонуємо нашим користувачам у 29 країнах зручний інтерфейс для
                            перегляду всіх пропозицій в одному місці.</p>
                        <div class="card">
                            <Card>
                                <img src="" alt=""/>
                                <p>усі оголошення на ринку</p>
                            </Card>
                            <Card>
                                <img src="" alt=""/>
                                <p>дублікати оголошень згруповані</p>
                            </Card>
                            <Card>
                                <img src="" alt=""/>
                                <p>контроль якості оголошень</p>
                            </Card>
                            <Card>
                                <img src="" alt=""/>
                                <p>комфортний пошук</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;