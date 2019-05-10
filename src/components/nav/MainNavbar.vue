<template>
    <div class="main-navbar">
        <router-link to="/">
            <comp-logo></comp-logo>
        </router-link>
        <div v-if="isHost" class="nav">
            <router-link to="/home">View All Rooms</router-link> |
            <router-link to="/addRoom">Host a new Room</router-link> |
            <router-link to="/currentBookings">Current Bookings</router-link> |
            <router-link to="/allBookings">All Bookings</router-link> |
            <router-link to="/allCustomers">Customer Database</router-link> <br />
            <button @click="logout">Logout</button>
        </div>
        <div v-else-if="isPatron" class="nav">
            <router-link to="/home">View All Rooms</router-link> |
            <router-link to="/addRoom">Host a new Room</router-link> |
            <router-link to="/currentBookings">Current Bookings</router-link> |
            <router-link to="/allBookings">All Bookings</router-link> |
            <router-link to="/allCustomers">Customer Database</router-link> <br />
            <button @click="logout">Logout</button>
        </div>
        <div v-else class="nav">
            <router-link to="/login">Login</router-link>
            |
            <router-link to="/sign-up">Sign Up</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
    import CompLogo from "./CompLogo";
    export default {
        name: "MainNavbar",
        components: {CompLogo},
        props: {
            isHost: Boolean,
            isPatron: Boolean
        }
    }
</script>

<style scoped>

</style>
