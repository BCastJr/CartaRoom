<template>
    <div class="room-thumbnail">
        <img v-bind="imageSrc" :class="isShowing" :src="imageSrc" :alt="imageDesc"/>
    </div>
</template>

<script>
    export default {
        name: "RoomThumbnail",
        props: {
            imageSrc: String,
            imageDesc: String,
            isShowing: Boolean
        }
    }
</script>

<style scoped>
    .room-thumbnail {
        padding: 16px;
    }
    .thumbnail {
        min-width: 280px;
        max-width: 350px;
        height: auto;
        padding: 16px;
    }

</style>
