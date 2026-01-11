import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cart: [],
    products:[
      {
        id: 1,
        image: "https://i.imgur.com/ww7iD0L.png",
        name: "La Detonadora",
        description: "Pan artesanal, carne de res (125gr), tocino, queso fundido, cebolla sofrita, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 15900,
        category: "general",
      },
      {
        id: 2,
        image: "https://i.imgur.com/ww7iD0L.png",
        name: "La Quesuda",
        description: "Pan artesanal, doble carne de res (125gr), tocino, queso fundido, cebolla sofrita, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 25900,
        category: "general",
      },
      {
        id: 3,
        image: "https://i.imgur.com/ww7iD0L.png",
        name: "La Caramelo",
        description: "Pan artesanal, carne de res (125gr), tocino, queso fundido, platano maduro, cebolla sofrita, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 20900,
        category: "general",
      },
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addProduct(state, id) {
      const product = state.products.find(product => product.id === id)
      const existProductIndex = state.cart.findIndex(product => product.id === id);

      if (existProductIndex !== -1) {
        state.cart[existProductIndex].amount++;
      } else {
        state.cart.push({ ...product, amount: 1 });
      }
    },

    deleteProduct(state, id) {
      console.log("dentro")
      const existProductIndex = state.cart.findIndex(product => product.id === id);

      if (existProductIndex !== -1) {
        state.cart[existProductIndex].amount--;

        if(state.cart[existProductIndex].amount == 0) {
          state.cart.splice(existProductIndex, 1);
        }
      }


    }
  }
})

export default store
