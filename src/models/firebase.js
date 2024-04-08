import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { REQUEST_EVENTS, REQUEST_STATUS, USERS } from "../constants/constants";
import Moment from 'moment';
// import sendgrid from '@sendgrid/mail';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// sendgrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addServiceRequest = async (
  name,
  mobile,
  email,
  address,
  serviceType,
  details
) => {
  try {
    var currentTs = firebase.firestore.FieldValue.serverTimestamp()
    var requestData = {
      name,
      mobile,
      address,
      email,
      serviceType,
      status: REQUEST_STATUS.PENDING_APPROVAL,
      logs: [
        {
          user: USERS.USER,
          event: REQUEST_EVENTS.REQUESTED,
          message: details,
        },
      ],
      createdAt: currentTs,
      lastUpdatedAt: currentTs,
      lastLoggedAt: currentTs,
    };
    console.log(requestData);

    let id = address + (new Moment().format("YYYYMMDD")) + serviceType
    await firestore.doc("requests/" + id).set(requestData);

    // console.log(docRef);
    // let email_options = {
    //   from: '',
    //   to: '',
    //   subject: 'New Request - ' + id,
    //   html: '<Html lang="en">  <Button href=""">New Request Received - '+id+'</Button> </Html>',
    // };
    // sendgrid.send(email_options);

    return id;
  } catch (err) {
    console.log(err);
    throw "Unable to submit request";
  }
};

export const getServiceRequestById = async (requestId) => {
  try {
    if (!requestId) throw "Request ID is invalid";

    let doc = await firestore.collection("requests").doc(requestId).get();
    if (!doc || !doc.data()) throw "Unable to get request with the provided ID";

    return [{ id: requestId, data: doc.data() }];
  } catch (err) {
    console.log(err);
    if (err.message) throw err.message;
    else throw "Invalid request";
  }
};
export const getServiceRequestsByAddress = async (address) => {
  try {
    if (!address) throw "Address is invalid";

    let collRef = firestore.collection("requests");
    let snapshot = await collRef
      .where("address", "==", address)
      .orderBy("lastUpdatedAt", "desc")
      .limit(3)
      .get();
    if (!snapshot || snapshot.empty)
      throw "Unable to get requests for the provided address";

    let docs = [];
    snapshot.forEach((doc) => {
      docs.push({ id: doc.id, data: doc.data() });
    });
    return docs;
  } catch (err) {
    console.log(err);
    if (err.message) throw err.message;
    else throw "Invalid request";
  }
};

export const getPaymentBalanceByAddress = async (address) => {
  try {
    if (!address) throw "Address is invalid";

    let paymentDtl = await firestore.doc("payments/" + address).get();
    if (!paymentDtl || paymentDtl.empty)
      throw "Unable to get payment requests for the provided address";

    //Add Buffer for dues to be collected for a new Financial Year
    if(new Moment().format("MM") == "04") {
      return paymentDtl.data() - 3600;  
    }
    return paymentDtl.data();
  } catch (err) {
    console.log(err);
    if (err.message) throw err.message;
    else throw "Invalid request";
  }
};
