<template>
    <div class="hell1o">
        <div class="block">
            <a class="button" @click="login">Button</a>
            <a class="button is-white">White</a>
            <a class="button is-light">Light</a>
            <a class="button is-dark">Dark</a>
            <a class="button is-black">Black</a>
            <a class="button is-link">Link</a>
        </div>
        <div class="block">
            <a class="button is-primary">Primary</a>
            <a class="button is-info">Info</a>
            <a class="button is-success">Success</a>
            <a class="button is-warning">Warning</a>
            <a class="button is-danger">Danger</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            body: {
                username: 'zhangsan',
                password: 'root123'
            },
        }
    },
    methods: {
        login() {
            const api = 'product/list';
            const redirect = this.$auth.redirect()
            console.log(redirect)
            this.$auth.login({
                url: api,
                data: this.body,
                // redirect: { name: redirect ? redirect.from.name : 'Home' },
                fetchUser: false,
                success(res) {
                    console.log('Auth Success')
                    console.log('Token: ' + this.$auth.token())
                },
                error(err) {
                    if (err.response) {
                        // The request was made, but the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.log(err.response.status)
                        // console.log(err.response.data)
                        // console.log(err.response.headers)
                        this.error = err.response.data
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message)
                    }
                    console.log(err.config)
                }
            })
        }
    },
    mounted() {
        // if (this.$auth.redirect()) {
        //     console.log('Redirect from: ' + this.$auth.redirect().from.name)
        // }

        // console.log(this.$auth)
        // this.$http.get(api).then((response) => {
        //     console.log(response.data)
        // })
        // this.$http(api).then(e => {
        //     console.error(e)
        // })
    }

}
</script>

<style scoped>

</style>
