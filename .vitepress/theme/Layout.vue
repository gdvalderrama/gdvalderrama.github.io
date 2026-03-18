<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter, page } = useData()

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="page.filePath.startsWith('blog/') && page.filePath !== 'blog/index.md'" style="margin-bottom: 3rem;">
        <img v-if="frontmatter.headerImage" :src="frontmatter.headerImage" style="width: 100%; max-height: 500px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;"/>
        <div style="text-align: center;">
          <h1 style="color: var(--vp-c-brand); font-size: 2.5rem; margin-bottom: 0.5rem; border: none;">{{ frontmatter.title }}</h1>
          <p v-if="frontmatter.date" style="color: var(--vp-c-text-2); font-size: 1.1rem;">
            {{ formatDate(frontmatter.date) }}
          </p>
          <hr style="margin: 2rem auto; width: 50px; border: 1px solid var(--vp-c-divider);"/>
        </div>
      </div>
    </template>
  </Layout>
</template>
