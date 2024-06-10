<template>
    <div >
        <form>
            input  surname
            <input
                type="text"
                
            >

            <br>
            <br>

            select year
            <select 
                name="select"
                
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
        
    })

    const emit = defineEmits()
</script>

<style lang="scss" scoped>

</style>