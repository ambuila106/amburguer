<template>
  <div class="header">
    <div class="header__logo">
      <img src="https://firebasestorage.googleapis.com/v0/b/amburguer-cbd19.firebasestorage.app/o/logo%20amburguer.png?alt=media&token=1dedc1a7-db0b-4967-a0c5-5f9694737eb4" alt="">
    </div>
    <span class="header__title"></span>
  </div>
</template>
<script>

export default {
  name: 'Header',
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
    }
  }
}
</script>

<style>
.header {
  padding: 10px 30px;
  height: 70px;
  background-color: white;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
}

.header__logo {
  margin: 7px 0 0 20px;
  width: 250px;
  object-fit: cover;
}

.header__logo img {
  width: 100%;
}

.header__title {
  margin-left: .75rem;
  font-size: 25px;
  font-weight: bold;
  color: #ff8f00;
  display: flex;
  align-items: center;
  padding-top: 0.1rem
}
</style>
