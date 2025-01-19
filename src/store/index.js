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
        description: "Pan artesanal, carne de res, tocino, queso cheddar, cebolla sofrita, lechuga, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 15900,
        category: "general",
      },
      {
        id: 2,
        image: "https://i.imgur.com/ww7iD0L.png",
        name: "La Boff",
        description: "Pan artesanal, huevo, carne de res, tocino, queso cheddar, cebolla sofrita, lechuga, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 17900,
        category: "general",
      },
      {
        id: 3,
        image: "https://i.imgur.com/ww7iD0L.png",
        name: "La Quesuda",
        description: "Pan artesanal, doble carne de res, tocino, doble queso cheddar, cebolla sofrita, lechuga, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 20900,
        category: "general",
      },
      {
        id: 4,
        image: "https://i.imgur.com/ww7iD0L.png",
        name: "La Parchada",
        description: "Pan artesanal, carne de res, queso cheddar, salsa de maíz, salsa de tomate, mayonesa.",
        price: 13900,
        category: "general",
      },
      {
        id: 5,
        image: "https://i.imgur.com/yvWhOMY.png",
        name: "Papas a la francesa",
        description: "",
        price: 5000,
        category: "general",
      },
      {
        id: 6,
        image: "https://i.imgur.com/ziDHlUw.png",
        name: "Cocacola 500ml",
        description: "",
        price: 5000,
        category: "general",
      },
      {
        id: 7,
        image: "https://i.imgur.com/4lzYHXv.png",
        name: "Agua Brisa 600ml",
        description: "",
        price: 3000,
        category: "general",
      },
      {
        id: 7,
        image: "https://i.imgur.com/csijelq.png",
        name: "Licuado frutos amarillos",
        description: "",
        price: 6000,
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
