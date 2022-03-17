<template>
  <v-simple-table
    height="250"
    fixed-header
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            الرقم التعريفي
          </th>
          <th class="text-uppercase text-center">
            اسم المجاز
          </th>
          <th class="text-uppercase text-center">
            الدولة
          </th>
          <th class="text-uppercase text-center">
            الجنس
          </th>
          <th class="text-uppercase text-center">
            ملاحظات
          </th>
        </tr>
      </thead>
      <tbody style="font-family: 'Tajawal',sans-serif">
        <tr
          v-for="mujaz in mujazs"
          :key="mujaz.id"
        >
          <td>{{ mujaz.id }}</td>
          <td class="text-center">
            {{ mujaz.name }}
          </td>
          <td class="text-center">
            {{ mujaz.country }}
          </td>
          <td class="text-center">
            {{ mujaz.sex }}
          </td>
          <td class="text-center">
            {{ mujaz.notes }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const mujazs = [
      {
        id: 1,
        name: 'معاذ اسماعيل قايد المرحم',
        country: 'المملكة العربية السعودية',
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 2,
        name: 'معاذ اسماعيل قايد المرحم',
        country: 'المملكة العربية السعودية',
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 3,
        name: 'معاذ اسماعيل قايد المرحم',
        country: 'المملكة العربية السعودية',
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 4,
        name: 'معاذ اسماعيل قايد المرحم',
        country: 'المملكة العربية السعودية',
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 5,
        name: 'معاذ اسماعيل قايد المرحم',
        country: 'المملكة العربية السعودية',
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
    ]

    return {
      mujazs,
    }
  },
}
</script>
