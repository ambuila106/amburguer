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
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/La%20detonadora.png?alt=media&token=1c83a244-49c1-4d92-a8ad-299903145cbb",
        name: "La Detonadora",
        description: "Pan artesanal, carne de res, tocino, queso cheddar, cebolla sofrita, lechuga, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 15900,
        category: "general",
      },
      {
        id: 2,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/La%20detonadora.png?alt=media&token=1c83a244-49c1-4d92-a8ad-299903145cbb",
        name: "La Boff",
        description: "Pan artesanal, huevo, carne de res, tocino, queso cheddar, cebolla sofrita, lechuga, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 17900,
        category: "general",
      },
      {
        id: 3,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/La%20detonadora.png?alt=media&token=1c83a244-49c1-4d92-a8ad-299903145cbb",
        name: "La Quesuda",
        description: "Pan artesanal, doble carne de res, tocino, doble queso cheddar, cebolla sofrita, lechuga, tomate, salsa de maíz, salsa de tomate y mayonesa",
        price: 20900,
        category: "general",
      },
      {
        id: 4,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/La%20detonadora.png?alt=media&token=1c83a244-49c1-4d92-a8ad-299903145cbb",
        name: "La Parchada",
        description: "Pan artesanal, carne de res, queso cheddar, salsa de maíz, salsa de tomate, mayonesa.",
        price: 13900,
        category: "general",
      },
      {
        id: 5,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/pngwing.com.png?alt=media&token=e9d5e2d2-e4d4-4b86-b8eb-a35ea9ab3f08",
        name: "Papas a la francesa",
        description: "",
        price: 5000,
        category: "general",
      },
      {
        id: 6,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/COCA-COLA-400-ML.png?alt=media&token=eac335a0-81bf-4fd0-b7a7-71b9031f6ea6",
        name: "Cocacola 500ml",
        description: "",
        price: 5000,
        category: "general",
      },
      {
        id: 7,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/agua-brisa.png?alt=media&token=aa287a92-79ff-4f01-a7fd-c4498e5210cd",
        name: "Agua Brisa 600ml",
        description: "",
        price: 3000,
        category: "general",
      },
      {
        id: 7,
        image: "https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/licuado-amarillo.png?alt=media&token=32571ce3-94b6-4888-8a97-01e8e73cc7ad",
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
