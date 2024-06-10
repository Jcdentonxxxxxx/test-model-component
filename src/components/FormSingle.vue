<template>
    <div class="class2">
        <form>
            <input
                type="text"
                :value="props.modelValue"
                @input="emit('update:modelValue', $event.target.value)"
            >

        </form>
    </div>
</template>

<script setup>
    const props = defineProps({
        modelValue: {
            required: true
        }
    })

    const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>

</style>