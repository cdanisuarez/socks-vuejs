app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      isActive: true,
      activeClass: 'active',
      selectedVariant: 0,
      url: 'https://github.com/cdanisuarez/socks-vuejs',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg', quantity: 50},
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg', quantity: 0},
      ],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      return this.premium ? 'Free' : 2.99
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- <img v-bind:src="image" alt=""> -->
        <img :src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inventory > 10" >In Stock</p>
        <p v-else-if="inventory <=10 && inventory > 0">Almost sould out!</p>
        <p v-else>Sold of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :class="[isActive ? activeClass: '']"
          :style="{ backgroundColor: variant.color }">
        </div>
        <!-- <button v-on:click="addToCart" class="button">Add to Cart</button> -->
        <button
          class="button"
          :class="{ disabledButton: !inStock}"
          @click="addToCart" 
          :disabled="!inStock">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
});