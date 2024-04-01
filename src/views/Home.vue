<script>
  export default {
    methods: {
      goToMenu() {
        this.$router.push('/menu');
      }
    }
  }
  </script>
<template>
    <div>
      <h1>Welcome to our Fictional Cafe!</h1>
      <p>Enjoy delicious food and beverages in a cozy atmosphere.</p>
      <button @click="goToMenu">View Menu</button>
    </div>
  </template>
  
  