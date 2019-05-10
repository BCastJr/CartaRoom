<template>
    <div class="main-navbar">
        <router-link to="/">
            <comp-logo></comp-logo>
        </router-link>
        <div v-if="loginStatus" class="nav">
            <!-- renders view before login -->
            <router-link to="/login">Login</router-link>
            |
            <router-link to="/sign-up">Sign Up</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <div v-else-if="isHost" class="nav">
            <router-link to="/home">View All Rooms</router-link> |
            <router-link to="/addRoom">Host a new Room</router-link> |
            <router-link to="/currentBookings">Current Bookings</router-link> |
            <router-link to="/allBookings">All Bookings</router-link> |
            <router-link to="/allCustomers">Customer Database</router-link> <br />
            <button @click="logout">Logout</button>
        </div>
        <div v-else class="nav">
            <router-link to="/home">View All Rooms</router-link> |
            <router-link to="/addRoom">Host a new Room</router-link> |
            <router-link to="/currentBookings">Current Bookings</router-link> |
            <router-link to="/allBookings">All Bookings</router-link> |
            <router-link to="/allCustomers">Customer Database</router-link> <br />
            <button @click="logout">Logout</button>
        </div>
        <div v-if="isHost">

        </div>
    </div>
</template>

<script>
    import CompLogo from "./CompLogo";
    import HostNavbar from "./HostNavbar";
    export default {
        name: "MainNavbar",
        components: {HostNavbar, CompLogo},
        props: {
            loginStatus: Boolean,
            isHost: Boolean
        }
    }
</script>

<style scoped>

</style>
