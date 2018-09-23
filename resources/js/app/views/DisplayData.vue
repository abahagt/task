<template>
    <div class="container">
        <h4>Display Data</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in info">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{{ total }}</td>
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
                total: 0,
            }
        },
        created() {
            axios.get(`/api/show`)
                .then((response) => {
                    this.info = response.data;
                    for (var i = 0; i < this.info.length; i++) {
                        this.total += Number(this.info[i].price)
                    }
                })
                .catch((error) => {
                    flash('Error', 'danger');
                });
        },
    }
</script>
