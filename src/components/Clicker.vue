<template>
    <div class="clicker btn" 
        :class="activeClass"
        @click="changeIndex"
    >
    index = {{index}}
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    props: ['index'],
    
    data() {
        return {
            activeClass: {
                activeBg: false
            }
        }
    },

    created() {
        this.updateActiveClass();
    },

    computed: {
        ...mapGetters([
            'currentClicker'
        ])
    },

    watch: {
        currentClicker() {
            this.updateActiveClass();
        }
    },

    methods: {
        changeIndex() {
            console.log(`clicked index ${this.index}`);
            this.$store.commit('setCurrentClicker', this.index);
        },

        updateActiveClass() {
            this.activeClass.activeBg = (this.index == this.currentClicker);
        }
    }
}
</script>
<style lang="scss">
.btn {
    width: 200px;
    height: 100px;
    background-color: #000;
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    &.activeBg {
        background-color: rgb(66, 157, 14);
    }
}
</style>