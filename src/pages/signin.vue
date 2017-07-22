<template>
    <div style="margin: auto;width: 400px;" class="box">
        <h2 class="field">登录
            <router-link :to="{name:'Signup'}" class="is-pulled-right">注册</router-link>
        </h2>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="username" v-model="form.username">
                <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="password" v-model="form.password" @keyup.enter="_signin">
                <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <msg></msg>
        </div>
        <div class="field">
            <small>
                <a href="#">忘记密码？</a>
            </small>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success is-fullwidth" @click="_signin">
                    登录
                </button>
            </p>
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
        ...mapActions(['signin']),
        _signin() {
            if (this.form.username && this.form.password) {
                this.signin({ ...this.form });
            }
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
