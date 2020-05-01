---
title: 'How to Structure a Vue.js Project'
description: 'The perfect Vue.js folder structure and component architecture with smart and dumb components'
date: 2020-04-30
image: '/uploads/blog/vuepost/vue.png'
tags: ['Vuejs']
---

![Vue](/uploads/blog/vuepost/vue.png)

Vue.js is more than a hype, it’s a great frontend framework. It’s quite easy to get started with it and to build a web app. Vue.js is often described as a framework for small apps and even sometimes as an alternative to jQuery because of its small size! I personally think that it can also fit for bigger projects and in this case, it’s important to structure it well, in terms of the component architecture.

Before starting my first big Vue.js project, I did some research in order to find the perfect folder structure, component architecture, and naming convention. I went through the Vue.js documentation, a few articles and many GitHub open source projects.

I needed to find the answers to a few questions I had. That’s what you will find in this post:

- How do you structure the files and folders inside the Vue.js project?
- How do you write Smart and Dumb components and where do you put them? It’s a concept coming from React.
- What are Vue.js coding style and best practices?

I will also document with the source I got inspired by and other links to get a better understanding.

## Vue.js folder structure

Here is the content of the src folder. I recommend you to kick-start the project with [Vue CLI](https://github.com/vuejs/vue-cli). I personally used the default Webpack template.

![vue-structure](/uploads/blog/vuepost/vue-structure.jpg)

A few details about each of these folders:

- **assets** — Where you put any assets that are imported into your components
- **components** — All the components of the projects that are not the main views
- **mixins** — The mixins are the parts of javascript code that is reused in different components. In a mixin you can put any component’s methods from Vue.js they will be merged with the ones of the component that uses it.
- **router** — All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “search”. If a component has a route it is routed.
- **store (optional)** — The Vuex constants in mutation-type.js, the Vuex modules in the subfolder modules (which are then loaded in the index.js).
- **translations (optional)** — Locales files, I use Vue-i18n, and it works pretty good.
- **utils (optional)** — Functions that I use in some components, such as regex value testing, constants or filters.
- **views** — To make the project faster to read I separate the components that are routed and put them in this folder. The components that are routed for me are more than a component since they represent pages and they have routes, I put them in “views” then when you check a page you go to this folder.

You can eventually add other folders depending on your need such as **filters**,or **constants**, **API**.

### Some resources I got inspired by

- [https://vuex.vuejs.org/en/structure.html](https://vuex.vuejs.org/en/structure.html)
- [https://github.com/vuejs/vue-hackernews-2.0/tree/master/src](https://github.com/vuejs/vue-hackernews-2.0/tree/master/src)
- [https://github.com/mchandleraz/realworld-vue/tree/master/src](https://github.com/mchandleraz/realworld-vue/tree/master/src)

## Smart vs dumb components with Vue.js

Smart and dumb components is a concept I learnt from React. Smart components are also called containers, they are the ones who handle the state changes, they are responsible for **how things work**. On the opposite, the dumb components, also called presentational, only handle the **look and feel**.

If you are familiar with MVC pattern, you can compare **dump components to the View** and **smart components to the Controller**!
In React smart and dumb components are usually put in different folders whereas in Vue.js you put them all in the same folder: components. To differentiate in Vue.js you will use a naming convention. Let’s say you have a dumb card component, then you should use one of these names:

- BaseCard
- AppCard
- VCard

If you have a smart component that uses BaseCard and adds some methods to it, you can for example name it, depending on your project:

- ProfileCard
- ItemCard
- NewsCard

If your smart component is not only a “Smarter” BaseCard with methods, just use any name that fits your component and without starting with Base (or App, or V), for example:

- DashboardStatistics
- SearchResults
- UserProfile

This naming convention comes from the Vue.js official styleguide that also contains naming conventions!

## Naming conventions

Here are a few conventions coming from the Vue.js official styleguide that you need to structure well your project:

- Component names should always be multi-word, except for root “App” components. Use “UserCard” or “ProfileCard” instead of “Card” for example.
- Each component should be in its own file.
- Filenames of single-file components should either be always PascalCase or always kebab-case. Use “UserCard.vue” or “user-card.vue”.
- Components that are only used once per page should begin with the prefix “The”, to denote that there can be only one. For example for a navbar or a footer you should use “TheNavbar.vue” or “TheFooter.vue”.
- Child components should include their parent name as a prefix. For example if you would like a “Photo” component used in the “UserCard” you will name it “UserCardPhoto”. It’s for better readability since files in a folder are usually order alphabetically.
- Always use full name instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.

### Vue.js official styleguide

Whether you are an advanced or beginner with Vue.js you should read this Vue.js styleguide, it contains a lot of tips and also naming conventions. It contains a lot of examples of things to do and not to do.

[Style Guide - Vue.js](https://vuejs.org/v2/style-guide/)
