<template>
  <Layout>

    <div id="not-found">
      <g-image alt="404 lost image" src="~/assets/404.svg" width="350" class="img-center"/>

      <h1>404!</h1>

      <p>
      It looks like you're lost.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404 - Not found!'
  }
}
</script>

<style>
#not-found h1, #not-found p {
  text-align: center;
}
</style>
