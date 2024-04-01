
<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Coffee' },
        { id: 2, name: 'Tea' },
        { id: 3, name: 'Sandwich' },
        { id: 4, name: 'Cake' }
      ]
    };
  },
  methods: {
    orderItem(item) {
      alert(`You ordered: ${item.name}`);
    }
  }
}
</script>
<template>
    <div>
      <h1>Menu</h1>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <button @click="orderItem(item)">{{ item.name }}</button>
        </li>
      </ul>
    </div>
  </template>
  
 