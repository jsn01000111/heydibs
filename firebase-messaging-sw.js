
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCgI0xmRRv8Ha8Ni1q5VEl1uc2Isv-lmuM",
  authDomain: "hey-dibs-app.firebaseapp.com",
  projectId: "hey-dibs-app",
  storageBucket: "hey-dibs-app.firebasestorage.app",
  messagingSenderId: "290290989884",
  appId: "1:290290989884:web:385bcd59f17a1f9341fc39",
  measurementId: "G-RMXCZTED0J"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

