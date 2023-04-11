<template>
  <div class="container mx-auto text-lg py-8 px-4">
    <h1 class="title text-center font-bold text-2xl">Welcome to the Default Page</h1>
    <div
      v-for="article in articles"
      :key="article.id"
      class="my-4 w-full max-w-[800px] p-4 mx-auto"
    >
      <h2 class="font-bold text-xl ">{{ article.attributes.title }}</h2>
      <p class="my-4">{{ article.attributes.description }}</p>
      <p class="text-xl leading-10 my-4">{{ article.attributes.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { allArticlesQuery } from "~/graphql/queries";

const { data } = await useAsyncQuery(allArticlesQuery);
const articles = data.value.articles.data;
</script>

<style lang="scss" scoped></style>
