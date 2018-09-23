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
            <tr>
                <th scope="row">1</th>
                <td>{{info.name}}</td>
                <td>{{info.price}}</td>
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
                info: {},
                uName: '',
                pPrice: '',
            }
        },
        created() {
            axios.get(`/api/show`)
                .then((response) => {
                    this.info = response.data;
                    this.uName = this.info.name;
                    this.pPrice = this.info.price;
                })
                .catch((error) => {
                    flash('Error', 'danger');
                });
        },
    }
</script>
