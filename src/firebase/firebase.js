import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:  process.env.FIREBASE_DATABASE_URL,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.FIREBASE_APP_ID,
    measurementId:  process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default }; 

  /*database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });


  /*database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
     expenses.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
     });
    });
 
    console.log(expenses);
  });
  /*database.ref('expenses')
  .once('value')
  .then((snapshot) => {
   const expenses = [];

   snapshot.forEach((childSnapshot) => {
    expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
    });
   });

   console.log(expenses);
  });*/

  database.ref('expenses').push({
    description: 'rent',
    note: '',
    amount: 198389,
    createdAt: 8328746298
  });

  
  /*database.ref('notes').push({
    title: 'Course topics',
    body: 'React JS, Node JS, React Native'
  });

 

  database.ref('notes').set(notes);
  database.ref('notes/12')

  /*database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `);
  })

  /*database.ref('name')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e)=> {
    console.log('Error fetching data', e);
  });*/

  /*database.ref().set({
    name: 'Amrutha',
    age: 21,
    stresslevel: 7,
    job: {
        title: 'FrontEnd dev',
        company: 'Amazon'
    },
    location: {
    city:'Bangalore',
    country: 'India'
    }
  }).then(() => {
    console.log('Data is saved!');
  }).catch((e) => {
    console.log('This failed', e);
  });

  database.ref().update({
   stresslevel: 9,
   'job/company': 'Apple',
   'location/city': 'Seattle'
  });

  /*database.ref()
  .remove()
  .then(() => {
    console.log('Data is removed');
  }).catch((e) => {
     console.log('Data is not removed',e);
  });*/
  

  