<template>
  <div class="modal-cart">
    <div @click="toggleModalCart()" class="modal-cart__close">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    </div>


    <div class="modal-cart__content">
      <div class="modal-cart__title">
        <span class="fw-bold">Resumen:</span>
      </div>

      <div v-for="product in cart" :key="product.id" class="modal-cart__products">
        <hr />
        <span class="modal-cart__product-title">

          {{ product.name }}
          <span class="modal-cart__product-price">${{ product.price * product.amount }}</span>
        </span>

        <div class="product-control">
          <div @click="addProduct(product.id)" class="product-control__button">+</div>
          <span>
            {{product.amount}}
          </span>
          <div @click="deleteProduct(product.id)" class="product-control__button">-</div>
        </div>



      </div>

      <hr class="" />
      <div class="modal-cart__total fw-bold">
        <span>Total:</span>
        <span>${{ total }}</span>
      </div>
    </div>


    <FinalizeOrder />
  </div>
</template>

<script>
import FinalizeOrder from '../components/FinalizeOrder.vue'

export default {
  name: 'ModalCart',
  components: {
    FinalizeOrder
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    text: {
      type: String,
      default: 'Ingresar'
    }
  },

  methods: {
    click() {
      this.$emit('click')
    },

    toggleModalCart() {
      this.$emit('toggleModalCart')
    },

    addProduct(id) {
      this.$emit('addProduct', id)
    },

    deleteProduct(id) {
      this.$emit('deleteProduct', id)
    }
  },

  computed: {
    products() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    total() {
      let total = this.cart.reduce((accumulator, product) => {
        return accumulator + product.price * product.amount;
      }, 0);
      return total
    },
  }
}
</script>

<style>
.modal-cart {
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: 4;
  bottom: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
  left: 0;
  right: 0;
}

@media (min-width: 768px) {
  .modal-cart {
    width: 600px;
    max-width: 90%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    height: auto;
    max-height: 85vh;
    bottom: 80px;
    overflow-y: auto;
  }
}

@media (min-width: 1024px) {
  .modal-cart {
    width: 700px;
    max-height: 80vh;
  }
}

.modal-cart__title {
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .modal-cart__title {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }
}

.modal-cart__content {
  padding: 2rem;
}

@media (min-width: 768px) {
  .modal-cart__content {
    padding: 2.5rem;
  }
}

.modal-cart__product-price {
  padding: 0 .5rem;
  text-align: end;
  font-weight: 600;
  color: #ef233c;
}

.modal-cart__product-title {
  align-self: baseline;
  padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
}

@media (min-width: 768px) {
  .modal-cart__product-title {
    font-size: 18px;
    padding: 0.75rem 0.5rem;
  }
}

.modal-cart__products {
  text-align: end;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.modal-cart__total {
  display: flex;
  justify-content: space-between;
  padding: 1rem .5rem;
  font-size: 20px;
  border-top: 2px solid #f3f3f3;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .modal-cart__total {
    font-size: 24px;
    padding: 1.5rem .5rem;
  }
}

.modal-cart__close {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.modal-cart__close:hover {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .modal-cart__close {
    top: 1.5rem;
    right: 2rem;
  }
}

.product-control {
  margin-top: .5rem;
  width: 100px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.05);
  align-items: center;
  align-self: end;
  border-radius: 8px;
  padding: 0.25rem;
  background-color: #f9f9f9;
}

@media (min-width: 768px) {
  .product-control {
    width: 120px;
    padding: 0.5rem;
  }
}

.product-control__button {
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  user-select: none;
}

.product-control__button:hover {
  background-color: #e9e9e9;
}

@media (min-width: 768px) {
  .product-control__button {
    width: 36px;
    height: 36px;
    font-size: 22px;
  }
}

.product-control span {
  font-weight: 600;
  font-size: 16px;
}

@media (min-width: 768px) {
  .product-control span {
    font-size: 18px;
  }
}
</style>
