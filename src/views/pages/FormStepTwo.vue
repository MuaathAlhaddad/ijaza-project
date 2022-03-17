<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <v-menu
        v-model="birth_date"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
        class="p-0 m-0"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="تاريخ الميلاد"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="birth_date = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <v-menu
        v-model="death_date"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="تاريخ الوفاة"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="death_date = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="12"
    >
      <v-textarea
        filled
        auto-grow
        label="السيرة الشخصية"
        rows="4"
        row-height="30"
        shaped
      ></v-textarea>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'FormStepTwo',
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    birth_date: false,
    death_date: false,
  }),
}
</script>
