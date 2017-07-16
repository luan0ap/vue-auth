<template>
    <div class="hell1o">
        <div class="block">
            <a class="button" @click="_login">Button</a>
        </div>
        <msg></msg>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import msg from '@/components/msg'
export default {
    components: { msg },
    data() {
        return {
            body: {
                username: 'zhangsan',
                password: '123456'
            },
        }
    },
    computed: {
        ...mapState({})
    },
    methods: {
        ...mapActions(['login']),
        _login() {
            this.login({ ...this.body });
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
