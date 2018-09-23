<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import NavBar from '../components/NavBar';
    import AppFooter from '../components/AppFooter';

    export default {
        components: {
            NavBar: NavBar,
            AppFooter: AppFooter
        }
    }
</script>
