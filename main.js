const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      inStock: false,
      isActive: true,
      activeClass: 'active',
      image: './assets/images/socks_green.jpeg',
      url: 'https://github.com/cdanisuarez/socks-vuejs',
      inventory: 80,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg'},
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg'},
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage) {
      this.image = variantImage
    }
  }
})