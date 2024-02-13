<script setup>
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import BoardgameList from '../components/BoardgameList.vue'

const boardgames = ref([])

fetch('/api/boardgames/')
  .then(response => response.json())
  .then(({data}) => {
    boardgames.value = data
  })

</script>

<template>
  <div class="container mx-auto mt-5">
    <div v-if="boardgames.length === 0" class="p-5">
      Carregando...
    </div>
    <div v-else>
      <BoardgameList :boardgames="boardgames" />
    </div>
  </div>
</template>
