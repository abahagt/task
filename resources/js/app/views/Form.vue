<template>
    <div class="container">
        <h4>Form</h4>
        <form>
            <div class="form-group">
                <label for="exampleInput">Name</label>
                <input type="text" class="form-control" id="exampleInput" placeholder="Your Name" v-model="message.name">
            </div>
            <div class="form-group">
                <label for="exampleInputprice">Price</label>
                <input type="text" class="form-control" id="exampleInputprice" placeholder="Price" v-model="message.price">
            </div>
            <a type="submit" class="btn btn-primary" @click="send()">Submit</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data: function () {
            return {
                message: {
                    name: null,
                    price: null,
                }
            };
        },
        methods: {
            send: function () {
                axios.post(`/api/add`, this.message).then((response) => {
                    this.message = {};
                    flash('done', 'success');

                }).catch((error) => {
                    flash('Error', 'danger');
                });
            }
        }
    }
</script>
