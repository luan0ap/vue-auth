<template>
    <div style="width: 500px;margin: 0 auto;">
        <msg></msg>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">用户名</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="text" v-model="form.username">
                        <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">密码</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control has-icons-left">
                        <input class="input" type="password" v-model="form.password" @keyup.enter="_login">
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label"></label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control has-icons-left">
                        <button class="button is-primary" @click="_login">
                            登录
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import msg from '@/components/msg'
export default {
    components: { msg },
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
        }
    },
    computed: {
        ...mapState({})
    },
    methods: {
        ...mapActions(['login']),
        _login() {
            this.login({ ...this.form });
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
