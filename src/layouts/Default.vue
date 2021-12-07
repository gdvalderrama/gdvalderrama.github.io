<template>
  <v-app>

    <v-app-bar dark app>
      <v-toolbar-title class="headline">
        <g-link to="/">
          <v-avatar :tile="true">
            <img :src="require('@/favicon.png')" alt="favicon">
          </v-avatar>
        </g-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/blog/">
        <span class="mr-2">Blog</span>
      </v-btn>
      <v-btn to="/pokemon/">
        <span class="mr-2">Get Pokemon</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height>
        <slot />
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card tile width="100%" class="blue-grey darken-4 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon.image" class="mx-4 white--text" icon :href="icon.url" target="_blank">
            <v-icon>{{ icon.image }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          This is a Vue project that uses Gridsome and Vuetify.
        </v-card-text>

      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {'image': 'fab fa-linkedin', 'url': 'https://www.linkedin.com/in/guiomarvalderrama/'},
        {'image': 'fab fa-github', 'url': 'https://github.com/gdvalderrama'},
        {'image': 'fab fa-stack-overflow', 'url': 'https://stackoverflow.com/users/3325322/gdvalderrama'},
        {'image': 'fab fa-medium', 'url': 'https://medium.com/@guival4'},
      ],
    }),
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
