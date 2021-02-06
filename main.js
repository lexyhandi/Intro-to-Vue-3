const product = "Socks";

const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "This is a thing",
      image: "./assets/images/socks_green.jpg",
      url: "www.vuemastery.com",
      inStock: true,
    };
  },
});
