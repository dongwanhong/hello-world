<template>
    <div>
        {{text}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: this.$store.state.text
        }
    }
}
</script>

<style lang=less>

</style>
