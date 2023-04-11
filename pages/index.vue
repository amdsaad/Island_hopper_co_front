<template>
  <div>
    <h1 class="title">Welcome to the Default Page</h1>
    <div v-for="article in articles" v-bind:key="article.id">
      <h2>{{ article }}</h2>
    </div>
  </div>
</template>

<script setup>
import { allArticlesQuery } from "~/graphql/queries";

const { data } = await useAsyncQuery(allArticlesQuery);
const articles = data.value.articles.data;
</script>

<style lang="scss" scoped></style>
