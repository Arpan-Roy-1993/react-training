import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCv7Sas3-tkw_b_sVQERxwsxhX7sWhSsMY",
    authDomain: "catch-of-the-day-arpan.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-arpan.firebaseio.com",
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())


export default base;