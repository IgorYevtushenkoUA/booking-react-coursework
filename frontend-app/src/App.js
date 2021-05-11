import React, {Component} from "react";
import "./i18n.js"
import {BrowserRouter} from "react-router-dom";
import NavBar from "./app/component/navbar/NavBar";
import AppRouter from "./app/component/router/AppRouter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import firebase from "./firebase";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
};


// export class App extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             files: null,
//         }
//     }
//
//     handlerChange = (files) => {
//         this.setState({
//             files: files
//         })
//         console.log(files)
//         debugger
//     }
//
//     handleSave = () => {
//         let bucketName = 'images'
//         let files = this.state.files
//         for (let i = 0; i < files.length; i++) {
//             let storageRef = firebase.storage().ref(`${bucketName}/${files[i].name}`)
//             let uploadTask = storageRef.put(files[i]);
//             uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//                 () => {
//                     let downloadURL = uploadTask.snapshot.downloadURL

//                 })
//         }
//
//     }
//
//     showImage = () => {
//         let storageRef = firebase.storage().ref();
//         for (let i = 0; i < this.state.files.length; i++) {
//             let address = 'images/21/' + this.state.files[i].name;
//             console.log("address :" + address)
//             debugger
//             storageRef.child(address).getDownloadURL().then((url) => {
//                 console.log("url :" + url);
//                 debugger
//                 // document.getElementById('new-img').src = url
//             });
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="file" multiple onChange={(e) => {
//                     this.handlerChange(e.target.files)
//                 }}/>
//                 <button onClick={this.handleSave}> Save</button>
//                 <button onClick={this.showImage}>Show Image</button>
//                 <img id="new-img"/>
//             </div>
//         );
//     }
// }

export default App;
