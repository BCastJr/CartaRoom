<template>
    <div class="room-history">
        <room-history-item v-for="roomitem in roomList"
                           v-bind:key="roomitem.roomID">
        </room-history-item>
    </div>
</template>

<script>
    import RoomHistoryItem from "./RoomHistoryItem";

    export default {
        name: "RoomHistory",
        components: {RoomHistoryItem},
        props: {
            roomList: Array
        }

    }
</script>

<style scoped>

</style>
