import Vue from 'vue';
import firebase from 'firebase';
import VeeValidate from 'vee-validate';
import App from './index.vue'; //main index

import router from './router';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

let app;
//export default firebase.database();

// firebase.auth().onAuthStateChanged(() => {
//   if(firebase.auth().currentUser){
//   firebase.auth().currentUser.getIdTokenResult()
//   .then((idTokenResult) => {
//     //console.log(idTokenResult)
//     // Confirm the user is an Host or patron.
//     if (idTokenResult.claims.host) {
//       app = new Vue({
//         router,
//         render: h => h(App1)
//       }).$mount('#app');
//     } else if (idTokenResult.claims.patron) {
//       app = new Vue({
//         router,
//         render: h => h(App2)
//       }).$mount('#app');
//     }
//   })
// }else{
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
// }
// });

