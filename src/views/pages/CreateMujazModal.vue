<template>
  <v-row justify="right mr-4 mb-2">
    <v-dialog
      v-model="dialog"
      max-width="800px"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          انشاء مجاز
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-2xl">إنشاء مجاز جديد</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <FormSteppers />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

import FormSteppers from '@/views/pages/FormSteppers.vue'

export default {
  name: 'CreateMujazModal',
  components: { FormSteppers },
  data: () => ({
    dialog: false,
  }),
}
</script>
