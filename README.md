# Basic Instagram clone
- react
- TailwindCSS
- firebase (seed file in repo src/seed.js)
- dynamic loading (lazy)
- authentication 


WARNING! to run this app you should create your own firebase.js file in lib folder with your own credentials in this form:

    const config = {
    apiKey: "XXX",
    authDomain: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX",
    };

    const firebase = window.firebase.initializeApp(config);
    const { FieldValue } = window.firebase.firestore;

    export { firebase, FieldValue };