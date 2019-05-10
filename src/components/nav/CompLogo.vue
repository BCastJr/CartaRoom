<template>
    <div id="comp-logo-place">
        <img id="comp-logo" :src="logoSrc"/>
    </div>
</template>

<script>
    export default {
        name: "CompLogo",
        props: {
            logoSrc: String
        }
    }
</script>

<style scoped>
    #comp-logo {
        max-width: 30%;
        min-width: 18%;
        height: auto;
    }

    #comp-logo-place {
        display: inline-block;
        align: left;

    }
</style>
