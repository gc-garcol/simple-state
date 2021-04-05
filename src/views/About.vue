<template>
  <div class="about">
    <h3>{{getCurrentClicker}}</h3>
    <Clicker index="1"/>
    <Clicker index="2"/>
    <Clicker index="3"/>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

import Clicker from '../components/Clicker';

export default {
  components: {Clicker},
  computed: {
    ...mapGetters({
      getCurrentClicker: 'currentClicker'
    })
  }
}

</script>

<style lang="scss">
.about {
  .clicker:not(:nth-child(1)) {
    margin-top: 30px;
  }
}
</style>