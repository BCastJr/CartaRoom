<template>
    <div id="app">
        <main-navbar v-bind:is-host="isHost"
                     v-bind:is-patron="isPatron"></main-navbar>
        <sbar></sbar>
        <div id="notLoggedInContent">
            <router-view></router-view>
        </div>
        <v-footer dark height="auto" style="margin-bottom: 0px; position: relative">
            <v-card>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                    Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                    dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla
                    placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam
                    elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur
                    ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    &copy;2018 — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>


</template>

<script>
    import firebase from 'firebase';
    import db from '@/firebase.js';
    import Sbar from "./components/nav/Sbar";
    import MainNavbar from "./components/nav/MainNavbar";

    let idTokenResult;
    let userID;
    // db.ref('rooms').once('value').then(function(snapshot) {
    //   console.log(snapshot.val());
    // }).catch((error) => {
    //   console.log(error);
    // });
    if (firebase.auth().currentUser) {
        idTokenResult = firebase.auth().currentUser.getIdTokenResult();
        if (idTokenResult.claims.host) {
            this.isHost = true;
            this.isPatron = false;
        } else if (idTokenResult.claims.patron) {
            this.isHost = false;
            this.isPatron = true;
        } else {
            this.isHost = false;
            this.isPatron = false;
        }
    } else {
        this.isHost = false;
        this.isPatron = false;
    }


    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            // console.log(user.uid); //a@a.com = gbEw7s5ic1drxG3vgFWD3DAMb972
            userID = user.uid;
        } else {
            // console.log("No user available");
            userID = "null";
        }

    });


    export default {
        name: 'home',
        components: {MainNavbar, Sbar},
        data: function () {
            return {
                isHost: false,
                isPatron: false,
            }
        },
        methods: {
            logout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        text-align: right;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
