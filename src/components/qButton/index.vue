<template>
    <div :class="`q-button q-button-${type}`">
        <slot/>
    </div>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:'qButton',
    props:{
        type:{
            type:String,
            default:"default" // default primary
        }
    }
})
</script>
<style lang="scss">
    @import "./index.scss";
</style>