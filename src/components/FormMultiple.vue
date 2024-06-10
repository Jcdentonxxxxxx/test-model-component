<template>
    <div >
        <form>
            input  surname
            <input
                type="text"
                :value="props.surname"
                @input="emit('update:surname', $event.target.value)"
            >

            <br>
            <br>

            select year
            <select 
                name="select"
                :value="props.surname"
                @change="emit('update:year', $event.target.value)"
            >
            <!--Supplement an id here instead of using 'name'-->
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
            </select>

        </form>
    </div>
</template>

<script setup>
    const props = defineProps({
        surname: {
            required: true
        },
        year: {
            required: true
        }
    })

    const emit = defineEmits(['update:surname', 'update:year'])
</script>

<style lang="scss" scoped>

</style>