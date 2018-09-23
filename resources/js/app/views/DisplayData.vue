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
                <td>{{info.name}}</td>
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
            }
        },
        methods: {
            getResults: function(){
                axios.get(`/api/get-data`)
                    .then((response) => {
                        flash('done', 'success');
                    })
                    .catch((error) => {
                        flash('Error', 'danger');
                    });
            },
        }
    }
</script>
