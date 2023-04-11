// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxtjs/eslint-module"],
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:1337/graphql",
      },
    },
  },
});
