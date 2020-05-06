---
title: '5 Vuex Plugins'
description: 'For Your Next VueJS Project'
date: 2020-05-02
image: '/uploads/blog/vue-secondpost/vue-secondpost.jpeg'
tags: ['Vuejs']
---

![Vue](/uploads/blog/vue-secondpost/vue-secondpost.jpeg)

There are a lot of good reasons to use Vuex to manage the state of your Vue.js app. For one, it’s really easy to add super-cool features with a Vuex plugin. Developers in the Vuex community have created a tonne of free plugins for you to use, with many of the features you can imagine, and some you may not have imagined.

In this article, I will show you five feature that you can easily add to your next project with a Vuex plugin.

1. Persisting state
2. Syncing tabs/windows
3. Language localization
4. Managing multiple loading states
5. Caching actions

## 1. Persisting state

[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) uses the browser’s local storage to persist your state across sessions. This means that refreshing the page or closing a tab won’t wipe your data.

A good use case for this would be a shopping cart: if the user accidentally closes a tab, they can reopen it with the page state intact.

![persisting_state](/uploads/blog/vue-secondpost/persisting_state.gif)

## 2. Syncing tabs/windows

[vuex-shared-mutations](https://github.com/xanf/vuex-shared-mutations) synchronizes state between different browser tabs. It does this by storing a mutation to local storage. The storage event triggers an update in all other tabs/windows, which replays the mutation, thus keeping state in sync.

![syncing_tabs-windows](/uploads/blog/vue-secondpost/syncing_tabs-windows.gif)

## 3. Language localization

[vuex-i18n](https://github.com/dkfbasel/vuex-i18n) allows you to easily store content in multiple languages. It is then trivial to switch languages in your app.
One cool feature is that you can store strings with tokens e.g. “Hello {name}, this is your Vue.js app.”. All your translations can have the same token where it’s needed in the string.

![language_localization](/uploads/blog/vue-secondpost/language_localization.gif)

## 4. Managing multiple loading states

[vuex-loading](https://github.com/f/vue-wait) helps to manage multiple loading states in your application. This plugin is handy for real-time apps where changes in state are frequent and complex.

![managing_multiple_loading_states](/uploads/blog/vue-secondpost/managing_multiple_loading_states.gif)

## 5. Caching actions

[vuex-cache](https://github.com/superwf/vuex-cache) can cache your Vuex actions. For example, if you’re retrieving data from a server, this plugin will cache the result the first time you call the action, then return the cached value on subsequent dispatches. It’s trivial to clear the cache when necessary.

![caching_actions](/uploads/blog/vue-secondpost/caching_actions.gif)

The end.
