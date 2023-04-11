// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo"],
  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:1337/graphql",
        browserHttpEndpoint: "",
        wsEndpoint: "",
        httpLinkOptions: {},
        wsLinkOptions: {},
        wsEndpoint: "",
        websocketsOnly: false,
        connectToDevTools: false,
        defaultOptions: {},
        inMemoryCacheOptions: {},
        tokenName: "apollo:<client-name>.token",
        tokenStorage: "cookie",
        authType: "Bearer",
        authHeader: "Authorization",
      },
    },
  },
});
