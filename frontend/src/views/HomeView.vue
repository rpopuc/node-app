<script setup>
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import BoardgameList from '../components/BoardgameList.vue'
import { useBoardgameService } from '../composables/BoardgameService.js'

const boardgames = ref([])
const service = useBoardgameService('v2')

service.list().then(response => {
  boardgames.value = response
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
