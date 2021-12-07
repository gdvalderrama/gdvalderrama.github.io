---
headerImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
title: Making a blog
published: true
date: 2021-12-07T13:20:00Z
excerpt: We're making a blog with Gridsome! Looking at how to use local files as a data source.
---

# Intro

This is really just a test, there are plenty of [good resources on how to create a blog using Gridsome](https://gridsome.org/starters/platform/markdown/).

## Setup

The quick version is to just use a starter project, but lets do an overview of some things anyway.

Start a new Gridsome project by using `gridsome create my-gridsome-blog`.

You'll be needing a page to show a list of your blog posts, here we'll query out blog posts.
Then a template to show each post individually, here we'll query specific individual posts.

To be able to query your blog posts from a local source, you'll need to use the [source plugin](https://gridsome.org/docs/fetching-data/#markdown). I've setup this blog to use markdown, you can choose a different configuration though.