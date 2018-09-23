<template>
    <div class="container">
        <h4>Form</h4>
        <form>
            <div class="form-group">
                <label for="exampleInput">Name</label>
                <input type="text" class="form-control" id="exampleInput" placeholder="Your Name">
            </div>
            <div class="form-group">
                <label for="exampleInputprice">Price</label>
                <input type="text" class="form-control" id="exampleInputprice" placeholder="Price">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Form"
    }
</script>
