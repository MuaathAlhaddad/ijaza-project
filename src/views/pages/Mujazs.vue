<template>
  <v-row>

    <create-mujaz-modal/>

    <v-col cols="12">
      <v-card>
        <v-card-title>المجازيين</v-card-title>
        <v-card-text>
          قائمة اسماء المجازيين
        </v-card-text>

        <mujazs-table></mujazs-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MujazsTable from '@/views/components/MujazsTable.vue'
import CreateMujazModal from "@/views/pages/CreateMujazModal";

export default {
  components: {
    CreateMujazModal,
    MujazsTable,
  },
  setup() {
    return {}
  },
}
</script>
