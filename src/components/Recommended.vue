<template>
    <div class="recommended">
        <h1>Recommended for you!</h1>
        <recommended-item v-for="recommend in recommendedList"
                          v-bind:key="recommend.roomID"
                          v-bind:room-name="recommend.roomName"
                          v-bind:address="recommend.address"
        >
        </recommended-item>
    </div>
</template>

<script>
    import RecommendedItem from "./RecommendedItem";

    export default {
        name: "Recommended",
        components: {RecommendedItem},
        props: {
            recommendedList: Array,
            isShowing: Boolean
        }
    }
</script>

<style scoped>

</style>
