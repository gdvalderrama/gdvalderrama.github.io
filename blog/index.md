---
title: Blog
published: false
---

<script setup>
import { data as posts } from './blog.data.js'

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

# Blog

<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 2rem;">
  <div v-for="post in posts" :key="post.url" style="flex: 1 1 calc(50% - 1rem); min-width: 350px; border: 1px solid var(--vp-c-divider); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
    <img :src="post.frontmatter.headerImage" style="height: 250px; width: 100%; object-fit: cover;"/>
    <div style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column;">
      <h2 style="margin-top: 0; color: var(--vp-c-brand); font-size: 1.5rem; line-height: 1.2;">{{ post.frontmatter.title }}</h2>
      <p style="font-size: 0.9rem; color: var(--vp-c-text-2);">{{ formatDate(post.frontmatter.date) }}</p>
      <p style="flex-grow: 1;">{{ post.frontmatter.excerpt }}</p>
      <a :href="post.url" style="color: var(--vp-c-brand); font-weight: 600; text-decoration: none; margin-top: 1rem; align-self: flex-end;">Read More →</a>
    </div>
  </div>
</div>
