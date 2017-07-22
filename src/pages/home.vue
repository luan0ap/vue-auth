<template>
    <div style="width:100%;" class="box">
        <div class="content" style="word-wrap: break-word;">
            <p>用户名：{{userData.username}}</p>
            <p>创建时间：{{userData.createdAt}}</p>
            <p>token：{{userData.token}}</p>
            <p>ID：{{userData._id}}</p>
            <p class="has-text-centered">
                <a class="button is-primary" @click="logout">注销</a>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            userData: state => state.user.userData
        })
    },
    methods: {
        ...mapActions(['fetchUserData', 'logout'])
    },
    mounted() {
        this.fetchUserData();
    }
}
</script>