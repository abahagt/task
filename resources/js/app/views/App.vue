<template>
    <div id="app">
        <router-view></router-view>
        <flash></flash>
    </div>
</template>
<script>

    import Flash from "../../components/Flash";

    export default {
        name: 'app',
        components: {Flash}
    }
</script>
