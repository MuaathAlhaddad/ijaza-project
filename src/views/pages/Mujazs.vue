<template>
  <v-row>
    <!-- fixed header -->
    <v-col cols="12">
      <v-btn
          color="primary"
          class="mb-2"
      >
        انشاء مجاز
      </v-btn>
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

export default {
  components: {
    MujazsTable,
  },
  setup() {
    return {}
  },
}
</script>
