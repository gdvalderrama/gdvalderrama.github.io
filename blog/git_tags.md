---
headerImage: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
title: Using git tags
published: true
date: 2021-12-07T15:40:00Z
excerpt: Basic usage of git tags with GitHub, creating, pushing, deleting, and releases.
---

# Intro

Git tags are a useful mechanism to differentiate certain commits.
A tag is tied to one and only one commit, but symbolizes that point in the history of the repository.

Tags are frequently used to represent new releases, but GitHub actually has its own structure for this: "Releases".

## Basic commands

Create a new tag `git tag 0.0.1`.

Push the new tag `git push origin --tags`.

Delete a local tag `git tag -d 0.0.1`.

Delete a remote tag `git push --delete origin 0.0.1`.

## Creating a release

From the GitHub interface, navigate to the code tab, here we can see the repo tags.
If we enter "tags", we navigate to a new view with "Tags" and "Releases".
Inside the releases tab, we have the option to create a new release based off a specific tag.

## Uses

It's always nice to have a structured and organized project, clearly indicating new versions.
But! The most interesting use I've found for personal or small projects is combining releases with GitHub actions.
We can choose to trigger a GitHub deploy action only when a new releases is created:

```
on:
  release:
    types: [published]
```