<template>
    <div class="container">
        <h4>Display Data</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in info">
                <td></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DisplayData",
        data() {
            return {
                info: [],
            }
        },
        created() {
            axios.get(`/api/show`)
                .then((response) => {
                    this.info = response.data;
                })
                .catch((error) => {
                    flash('Error', 'danger');
                });
        },
    }
</script>
