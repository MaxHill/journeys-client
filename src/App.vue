<template>
    <div id="app">
        <app-menu></app-menu>
        <router-view></router-view>

        <!-- Don't let the icon sprite take up space -->
        <div style="display:none" v-html="icons"></div>
    </div>
</template>

<style lang="scss" src="assets/sass/app.scss"></style>

<script>
    import appMenu from './components/Menu';

    export default {
        data() {
            return {icons: require('assets/images/icons.svg')};
        },
        components: {appMenu}
    };
</script>


