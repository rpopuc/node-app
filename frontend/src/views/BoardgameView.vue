<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import BoardgameList from '../components/BoardgameList.vue'
import { useBoardgameService } from '../composables/BoardgameService.js'

const boardgame = ref()

// Use route to get boargameId from query string param
const route = useRoute()
const boardgameId = route.params.id
const service = useBoardgameService('v2')

service.show(boardgameId).then(response => {
  boardgame.value = response
})
</script>

<template>
    <div>
        <div v-if="boardgame" class="container mx-auto mt-5">
            <div class="border border-gray-500 rounded p-4">
                <h2>{{ boardgame.name }}</h2>
                <div>{{ boardgame.description }}</div>
                <div>$ {{ boardgame.price }}</div>
            </div>
        </div>
        <div v-else class="p-5">
            Carregando...
        </div>
    </div>
</template>
