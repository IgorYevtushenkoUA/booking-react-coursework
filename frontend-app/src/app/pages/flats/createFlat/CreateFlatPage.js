import React, {useState} from 'react';
import {Button, Card, Container, Form, FormCheck} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {usePreload} from "../../../hooks/usePreload";
import {
    loadAllAreas,
    loadAllCities,
    loadAllComforts,
    loadAllHeatings,
    loadAllInfrastructures,
    loadAllMultimedias,
    loadAllPeopleTypes,
    loadAllRules,
    loadAllStreets,
    loadAllWallTypes
} from "../../../store/additional/flat/flatActions";

const CreateFlatPage = () => {

    const [flatFloor, setFlatFloor] = useState('');
    const [squareAll, setSquareAll] = useState('');
    const [squareLiving, setSquareLiving] = useState('');
    const [priceMonth, setPriceMonth] = useState('');
    const [roomsNum, setRoomsNum] = useState('');
    const [balconiesNum, setBalconiesNum] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [mainDescription, setMainDescription] = useState('');
    const [pledge, setPledge] = useState('');

    let comfortsArr = [];
    let heatingsArr = [];
    let infrastructuresArr = [];
    let peopleTypesArr = [];
    let multimediasArr = [];
    let rulesArr = [];
    let wallTypesArr = [];

    const dispatch = useDispatch();

    usePreload(loadAllStreets);
    usePreload(loadAllAreas);
    usePreload(loadAllCities);
    usePreload(loadAllComforts);
    usePreload(loadAllHeatings);
    usePreload(loadAllInfrastructures);
    usePreload(loadAllPeopleTypes);
    usePreload(loadAllMultimedias);
    usePreload(loadAllRules);
    usePreload(loadAllWallTypes);

    const streets = useSelector(store => store.flat.streets)
    const areas = useSelector(store => store.flat.areas)
    const cities = useSelector(store => store.flat.cities)

    const comforts = useSelector(store => store.flat.comforts)
    const heatings = useSelector(store => store.flat.heatings)
    const infrastructures = useSelector(store => store.flat.infrastructures)
    const peopleTypes = useSelector(store => store.flat.peopleTypes)
    const multimedias = useSelector(store => store.flat.multimedias)
    const rules = useSelector(store => store.flat.rules)
    const wallTypes = useSelector(store => store.flat.wallTypes)


    const createFlat = () => {
        console.log("create flat man")
    }

    const changeWallType = (id) => {
        if (wallTypesArr.includes(id))
            wallTypesArr = wallTypesArr.filter(w => w != id);
        else wallTypesArr.push(id);
    }

    const changeHeating = (id) => {
        if (heatingsArr.includes(id))
            heatingsArr = heatingsArr.filter(w => w != id);
        else heatingsArr.push(id);
    }

    const changeComfort = (id) => {
        if (comfortsArr.includes(id))
            comfortsArr = comfortsArr.filter(w => w != id);
        else comfortsArr.push(id);
    }

    const changeInfrastructures = (id) => {
        if (infrastructuresArr.includes(id))
            infrastructuresArr = infrastructuresArr.filter(w => w != id);
        else infrastructuresArr.push(id);
    }

    const changePeopleType = (id) => {
        if (peopleTypesArr.includes(id))
            peopleTypesArr = peopleTypesArr.filter(w => w != id);
        else peopleTypesArr.push(id);
    }

    const changeMultimedia = (id) => {
        if (multimediasArr.includes(id))
            multimediasArr = multimediasArr.filter(w => w != id);
        else multimediasArr.push(id);
    }

    const changeRule = (id) => {
        if (rulesArr.includes(id))
            rulesArr = rulesArr.filter(w => w != id);
        else rulesArr.push(id);
    }

    const [drag, setDrag] = useState(false);

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
        e.preventDefault();
        setDrag(true);
    }
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        console.log(files);
        setDrag(false);
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center">
            <Card style={{width: 760}}>
                <h2>Створити квартиру</h2>
                <Form>

                    <Card>

                        {drag
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

                    </Card>

                    <Card>
                        DescriptionBlock
                    </Card>

                    <Card>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter area"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter street"/>

                        <Form.Control className="mt-3" placeholder="Enter house num"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter house year"/>

                        <Card>
                            Comforts
                            {comforts.map(c => (
                                <Form.Check key={c.comfort_id}
                                            label={c.name}
                                            onChange={() => changeComfort(c.comfort_id)}

                                />
                            ))}
                        </Card>

                        <Card>
                            Heatings
                            {heatings.map(h => (
                                <Form.Check key={h.heating_id}
                                            label={h.name}
                                            onChange={() => changeHeating(h.heating_id)}

                                />
                            ))}
                        </Card>

                        <Card>
                            Infastructure
                            {infrastructures.map(i => (
                                <Form.Check key={i.infrastructure_id}
                                            label={i.name}
                                            onChange={() => changeInfrastructures(i.infrastructure_id)}
                                />
                            ))}
                        </Card>

                        <Card>
                            PeopleType
                            {peopleTypes.map(p => (
                                <Form.Check key={p.people_type_id}
                                            label={p.name}
                                            onChange={() => changePeopleType(p.people_type_id)}
                                />
                            ))}
                        </Card>

                        <Card>
                            Multimedias
                            {multimedias.map(m => (
                                <Form.Check key={m.multimedia_id}
                                            label={m.name}
                                            onChange={() => changeMultimedia(m.multimedia_id)}
                                />
                            ))}
                        </Card>

                        <Card>
                            Rules
                            {rules.map(r => (
                                <Form.Check key={r.rule_id}
                                            label={r.name}
                                            onChange={() => changeWallType(r.rule_id)}

                                />
                            ))}
                        </Card>

                        <Card>
                            WallType
                            {wallTypes.map(wall => (
                                <Form.Check key={wall.wall_type_id}
                                            label={wall.name}
                                            onChange={() => changeWallType(wall.wall_type_id)}

                                />
                            ))}
                        </Card>

                        <Form.Control className="mt-3 ml-1" placeholder="Enter house type"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter num of floors"/>
                        <Form.Control className="mt-3" placeholder="Enter metro station"/>
                        <Form.Control className="mt-3" placeholder="Enter house advantage"/>

                        <div className="flat">

                            <div className="block">
                                <label>Поверх квартири</label>
                                <Form.Control className="mt-3" placeholder="Enter floor" value={flatFloor}
                                              onChange={e => setFlatFloor(e.target.value)}/>
                            </div>

                            <div className="block">
                                <label>Площа квартири</label>
                                <div className="d-flex flex-row">
                                    <Form.Control className="mt-3" placeholder="Enter square_all" value={squareAll}
                                                  onChange={e => setSquareAll(e.target.value)}/>
                                    <Form.Control className="mt-3 ml-3" placeholder="Enter square_living"
                                                  value={squareLiving}
                                                  onChange={e => setSquareLiving(e.target.value)}/>
                                </div>
                            </div>

                            <div className="block">
                                <label className="flex-grow: 2">Ціна за місяць :: </label>
                                <Form.Control className="flex-grow:2 mt-3" placeholder="Enter price_month"
                                              value={priceMonth}
                                              onChange={e => setPriceMonth(e.target.value)}/>
                            </div>

                            <div className="block">
                                <label>Застава</label>
                                <Form.Control className="mt-3" placeholder="Enter pledge" value={pledge}
                                              onChange={e => setPledge(e.target.value)}/>
                            </div>

                            <div className="block">
                                <label>Кількість кімнат</label>
                                <Form.Control className="mt-3" placeholder="Enter rooms_num" value={roomsNum}
                                              onChange={e => setRoomsNum(e.target.value)}/>
                                {/*<Form.Control className="mt-3" placeholder="Enter elements"/>*/}
                                {/*<Form.Control className="mt-3" placeholder="Enter rent type"/>*/}
                            </div>

                            <div className="block">
                                <label>Кількість балконів</label>
                                <Form.Control className="mt-3" placeholder="Enter balconies_num" value={balconiesNum}
                                              onChange={e => setBalconiesNum(e.target.value)}/>
                            </div>

                            <Form.Control className="mt-3" placeholder="Enter short description"
                                          value={shortDescription}
                                          onChange={e => setShortDescription(e.target.value)}/>
                            <Form.Control className="mt-3" placeholder="Enter main description" value={mainDescription}
                                          onChange={e => setMainDescription(e.target.value)}/>
                        </div>
                    </Card>


                </Form>
                <Button onClick={createFlat}>Створити</Button>
            </Card>

        </Container>
    );
};

export default CreateFlatPage;