<template>
  <div class="about">
    <h3>{{getCurrentClicker}}</h3>

    <div class="row-clicker">
      <Clicker index="1"/>
      <Clicker index="2"/>
      <Clicker index="3"/>
    </div>

    <div class="column-clicker">
      <!-- <Clicker index="1"/> -->
      <Clicker index="2"/>
      <Clicker index="3"/>
    </div>
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

  >.column-clicker {
    margin-top: 30px;

    >.clicker:not(:nth-child(1)) {
      margin-top: 30px;
    }
  
  }

  >.row-clicker {
    display: flex;

    >.clicker:not(:nth-child(1)) {
      margin-left: 30px;
    }
  
  }

}
</style>