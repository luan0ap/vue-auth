<template>
    <div class="notification is-danger animated " :class="[msg?'fadeIn':'fadeOut']" v-if="msg">
        <button class="delete" @click="setMsg('')"></button>
        {{msg}}
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            msg: state => state.msg
        })
    },
    methods: {
        ...mapMutations(['setMsg'])
    }
}
</script>

