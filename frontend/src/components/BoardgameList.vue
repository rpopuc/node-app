<script setup>
defineProps({
  boardgames: Array,
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <router-link
      v-for="boardgame in boardgames" :key="boardgame.id"
      :to="{ name: 'boardgame.show', params: { id: boardgame.id} }"
    >
      <div class="border border-gray-500 rounded p-4">
        <h2>{{ boardgame.name }}</h2>
        <div>{{ boardgame.description }}</div>
        <div>$ {{ boardgame.price }}</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
