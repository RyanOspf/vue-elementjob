<template>
  <div id="app">
  	<logo></logo>
  	<search></search>
  	<loading></loading>
  	<router-view></router-view>
  </div>
</template>

<script>

import logo from '@/components/header';
import search from '@/components/search';
import loading from '@/components/loading';

export default {
  name: 'app',
  components:{
  	logo,
  	search,
  	loading
  }
}
</script>

<style>

</style>
