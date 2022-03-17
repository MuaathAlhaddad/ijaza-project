<template>
  <div class="row">
    <v-col
      cols="12"
      md="12"
      sm="12"
    >
      <v-file-input
        v-model="ijazahDoc"
        placeholder="ارفع الاجازة هنا"
        label="File input"
        show-size
        truncate-length="46"
      ></v-file-input>
    </v-col>
  </div>
</template>
<script>

export default {
  name: 'FormStepThree',
  methods: {
    uploadIjazahDoc(e) {
      this.$store.commit('uploadIjazahDoc', e.target.value)
    },
  },
}
</script>
