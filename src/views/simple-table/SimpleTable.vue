<template>
  <v-row>
    <!-- fixed header -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Fixed header</v-card-title>
        <v-card-text>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top of the table.
        </v-card-text>

        <demo-simple-table-fixed-header></demo-simple-table-fixed-header>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DemoSimpleTableFixedHeader from './demos/DemoSimpleTableFixedHeader.vue'

export default {
  components: {
    DemoSimpleTableFixedHeader,
  },
  setup() {
    return {}
  },
}
</script>
