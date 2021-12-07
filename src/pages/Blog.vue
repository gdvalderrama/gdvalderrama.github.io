<template>
  <Layout>
    <v-container class="text-center">
      <div class="d-flex-row d-block flex-wrap d-sm-inline-flex">
        <v-card
          shaped
          class="ma-sm-2 my-5"
          max-width="375"
          v-for="item in $page.blogPosts.edges"
          :key="item.node.id"
          :href="item.node.path"
        >
          <v-img height="200px" :src="item.node.headerImage"></v-img>

          <v-card-title class="primary--text justify-center font-weight-bold display-1">
            {{ item.node.title }}
          </v-card-title>

          <v-card-text>
            <p>{{ item.node.date }}</p>
            <span class="text--primary">
              {{ item.node.excerpt }}
            </span>
          </v-card-text>

          <v-card-actions>
            <v-col class="text-right">
              <v-btn text color="secondary">Read More</v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </div>
      <div class="text-center">
        <Pager
          linkClass="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--small primary mx-1"
          :info="$page.blogPosts.pageInfo"
        />
      </div>
    </v-container>
  </Layout>
</template>

<page-query>
query BlogPosts ($page: Int) {
  blogPosts: allBlogPost (perPage: 3, page: $page, sortBy: "date", order: DESC filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        published
        headerImage
        date (format: "D MMMM, YYYY")
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager
  }
};
</script>
