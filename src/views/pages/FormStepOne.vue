<template>
  <div class="row">
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <v-text-field
        label="الاسم الاول*"
        required
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <v-text-field
        label="الاسم الاخير*"
        persistent-hint
        required
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <v-text-field
        label="الكنية*"
        persistent-hint
        required
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="countries"
        hint="جيل النبي صلى الله عليه وسلم هو الجيل الاول"
        label="الدولة *"
        required
      ></v-select>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="generationOptions"
        hint="جيل النبي صلى الله عليه وسلم هو الجيل الاول"
        label="الجيل *"
        required
      ></v-select>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="genderOptions"
        label="الجنس *"
        required
      ></v-select>
    </v-col>
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
  name: 'FormStepOne',
  ...mapState(['generationOptions', 'countryOptions', 'genderOptions']),
}
</script>
