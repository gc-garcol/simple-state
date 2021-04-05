<template>
  <div class="about">
    <Clicker index="1"/>
    <Clicker index="2"/>
    <Clicker index="3"/>
  </div>
</template>

<script>
import Clicker from '../components/Clicker';

export default {
  components: {Clicker}  
}

</script>

<style lang="scss">
.about {
  .clicker:not(:nth-child(1)) {
    margin-top: 30px;
  }
}
</style>