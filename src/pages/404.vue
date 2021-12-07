<template>
  <Layout>
    <v-container class="text-center">
      <div id="not-found">
        <g-image alt="404 lost image" src="~/assets/404.svg" width="350" class="img-center"/>
        <h1>404!</h1>
        <v-card-text>It looks like you're lost.</v-card-text>
      </div>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404 - Not found!'
  }
}
</script>
