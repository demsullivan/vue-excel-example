<script setup lang="ts">
import { ref } from 'vue'

const rangeValue = ref()

function sheetChanged(event: Excel.WorksheetChangedEventArgs) {
  rangeValue.value = [[event.details.valueAfter]]
}

function updateRange() {
  rangeValue.value = [['Button clicked!']]
}
</script>

<template>
  <button @click="updateRange">Click me!</button>
  <Workbook>
    <Worksheet name="Sheet1" @changed="sheetChanged">
      <Range address="A1" :value="rangeValue" />
    </Worksheet>
  </Workbook>
</template>
