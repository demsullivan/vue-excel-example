<script setup lang="ts">
type Props = {
  worksheet: Excel.Worksheet
}

const props = defineProps<Props>()
</script>

<template>
  <span>This is a dynamically routed component on {{ props.worksheet.name }}</span>
</template>
