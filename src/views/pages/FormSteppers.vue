<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          complete
          editable
          step="1"
        >
          المعلومات الشخصية
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
        >
          معلومات اضافية
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="3"
        >
          معلومات عن الاجازة
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
            <FormStepOne/>
          </v-card>

          <v-btn
            class="mt-8"
            color="primary"
            @click="e1 = 2"
          >
            استمرار
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
            <FormStepTwo/>
          </v-card>

          <v-btn
            class="mt-8"
            color="primary"
            @click="e1 = 3"
          >
            استمرار
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
            <FormStepThree />
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import FormStepOne from '@/views/pages/FormStepOne.vue'
import FormStepTwo from '@/views/pages/FormStepTwo.vue'
import FormStepThree from '@/views/pages/FormStepThree.vue'

export default {
  name: 'FormSteppers',
  components: { FormStepTwo, FormStepOne, FormStepThree },
  data() {
    return {
      e1: 1,
      steps: 3,
    }
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
  },
}
</script>
