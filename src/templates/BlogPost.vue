<template>
  <Layout>
    <v-container>
      <div class="d-flex-row">
        <v-card class="ma-sm-5 xs-sm-6" shaped>
          <v-img height="500px" :src="$page.blogPost.headerImage"> </v-img>

          <v-card-title class="primary--text justify-center font-weight-bold display-1">
            {{ $page.blogPost.title }}
          </v-card-title>

          <v-card-text class="text-center">
            <p class="px-xs-5">
              Date: {{ $page.blogPost.date }} | Time: {{ $page.blogPost.timeToRead }} min to read
            </p>
          </v-card-text>

          <v-card-text class="text-justify">
            <div class="pa-xs-5 body-1">
              <BlogPostContent :content="$page.blogPost.content" />
            </div>
          </v-card-text>

        </v-card>
      </div>
    </v-container>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  blogPost: blogPost (path: $path) {
    path
    title
    date (format: "D MMMM, YYYY")
    timeToRead
    content
    excerpt
    published
    headerImage
  }
}
</page-query>

<script>
import BlogPostContent from "@/components/BlogPostContent";
export default {
  components: {
    BlogPostContent
  }
};
</script>