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
      <div v-if="page.relativeDir === 'blog' && frontmatter.headerImage" style="margin-bottom: 2rem;">
        <img :src="frontmatter.headerImage" style="width: 100%; max-height: 500px; object-fit: cover; border-radius: 12px;"/>
        <div style="text-align: center; margin-top: 1.5rem;">
          <h1 style="color: var(--vp-c-brand); font-size: 2.5rem; margin-bottom: 0.5rem;">{{ frontmatter.title }}</h1>
          <p v-if="frontmatter.date" style="color: var(--vp-c-text-2);">
            Date: {{ formatDate(frontmatter.date) }}
          </p>
        </div>
      </div>
    </template>
  </Layout>
</template>
