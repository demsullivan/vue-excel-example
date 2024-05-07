<script setup lang="ts">
import { ref } from 'vue'

const singleCellValue = ref()

function sheetChanged(event: Excel.WorksheetChangedEventArgs) {
  singleCellValue.value = [[event.details.valueAfter]]
}

function updateSingleCellRange() {
  singleCellValue.value = [['Button clicked!']]
}

function columnRangeMounted() {}

function rowRangeMounted() {}

function twoDimRangeMounted() {}

function entireColRangeMounted() {}

function tableMounted() {}
</script>

<template>
  <Workbook>
    <Worksheet name="Sheet1" @changed="sheetChanged">
      <Taskpane>
        <h3>Sheet1</h3>
        <button @click="updateSingleCellRange">Click me!</button>
      </Taskpane>
      <!-- A single cell range. -->

      <Range address="A1" :value="singleCellValue" />

      <!-- A range representing row values. -->
      <Range address="B1:D1" @mounted="rowRangeMounted" />

      <!-- A range representing column values. -->
      <Range address="A3:A5" @mounted="columnRangeMounted" />

      <!-- A range representing two-dimensional values. -->
      <Range address="B3:D4" @mounted="twoDimRangeMounted" />

      <!-- A range representing an entire column. -->
      <Range address="E:E" @mounted="entireColRangeMounted" />
    </Worksheet>

    <Worksheet name="Table1">
      <Taskpane>
        <h3>Table1</h3>
      </Taskpane>

      <Table @mounted="tableMounted"></Table>
    </Worksheet>
  </Workbook>
</template>
