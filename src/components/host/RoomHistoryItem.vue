<template>
    <div class="room-history-item">

        <room-thumbnail v-bind:image-src="roomImg"></room-thumbnail>
        <h2>{{room.roomName}}</h2>
        <h3>Review</h3>
        <button>View Customers</button>
        <button>View Analytics</button>
        <button>Export Data</button>
    </div>

</template>

<script>
    import RoomThumbnail from "../RoomThumbnail";

    export default {
        name: "RoomHistoryItem",
        components: {RoomThumbnail},
        props: ['room']
    }
</script>

<style scoped>

</style>
