<template>
    <div style="margin: auto;width: 400px;" class="box">
        <h2 class="field">注册
            <router-link :to="{name:'Signin'}" class="is-pulled-right">登录</router-link>
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
                <input class="input" type="password" placeholder="password" v-model="form.password">
                <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="password" v-model="form.password1" @keyup.enter="_signup">
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
            <p class="control">
                <button class="button is-success is-fullwidth" @click="_signup">
                    注册
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import msg from '@/components/msg'
export default {
    components: { msg },
    data() {
        return {
            form: {
                username: '',
                password: '',
                password1: ''
            },
        }
    },
    methods: {
        ...mapActions(['signup']),
        ...mapMutations(['setMsg']),
        _signup() {
            if (!this.form.username) {
                this.setMsg('请输入用户名！');
                return;
            }

            if (!this.form.password) {
                this.setMsg('请输入密码！');
                return;
            }

            if (this.form.password !== this.form.password1) {
                this.setMsg('两次密码不相等！');
                return;
            }

            this.setMsg('');
            this.signup({ ...this.form })
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
