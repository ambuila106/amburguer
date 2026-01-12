<template>
  <div class="card-product">
    <div @click="addProduct(id)" class="card-product__add">+</div>
    <div class="card-product__image">
      <img :src="image" alt="">
    </div>
    <span class="fw-semibold">{{ name }}</span>
    <br>
    <span class="card-product__description">{{ description }}</span>
    <div class="text-end fw-bold pt-1">${{ price }}</div>
  </div>
</template>
<script>

export default {
  name: 'CardProduct',
  props: {
    id: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: 'image'
    },
    name: {
      type: String,
      default: 'name'
    },
    description: {
      type: String,
      default: 'name'
    },
    price: {
      type: Number,
      default: 0
    }
  },

  methods: {
    addProduct(id) {
      this.$emit('addProduct', id)
    }
  }
}
</script>

<style>
  .card-product {
    width: 100%;
    max-width: 100%;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
    padding: .75rem;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }

  .card-product:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 30px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    .card-product {
      max-width: 280px;
      padding: 1.25rem;
      border-radius: 16px;
    }
  }

  @media (min-width: 1024px) {
    .card-product {
      max-width: 320px;
      padding: 1.5rem;
    }
  }

  .card-product__description {
    font-size: 12px;
    line-height: 1.4;
    color: #666;
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    .card-product__description {
      font-size: 14px;
      margin-top: 0.75rem;
    }
  }

  .card-product__image {
    padding: 1rem;
    height: 150px;
    overflow: hidden;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  @media (min-width: 768px) {
    .card-product__image {
      height: 200px;
      padding: 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    .card-product__image {
      height: 220px;
      padding: 1.5rem;
    }
  }

  .card-product__image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  .card-product:hover .card-product__image img {
    transform: scale(1.05);
  }

  .card-product__add {
    position: absolute;
    background-color: #ef233c;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: -15px;
    top: -15px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .card-product__add:hover {
    background-color: #d90429;
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    .card-product__add {
      width: 36px;
      height: 36px;
      font-size: 28px;
      right: -18px;
      top: -18px;
    }
  }

  .card-product span.fw-semibold {
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-top: 0.75rem;
  }

  @media (min-width: 768px) {
    .card-product span.fw-semibold {
      font-size: 18px;
      margin-top: 1rem;
    }
  }

  .card-product .fw-bold {
    font-size: 18px;
    color: #ef233c;
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    .card-product .fw-bold {
      font-size: 22px;
      margin-top: 0.75rem;
    }
  }
</style>
