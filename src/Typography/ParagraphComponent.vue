<template>
    <p v-bind="view?.htmlattributes" :style="view.style" ref="viewRef">
        {{ view.content.text }}
    </p>
</template>


<script setup lang="ts">
import { ViewElement, useViewConfiguration } from 'alphautils';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    viewId: {
        type: Number,
        required: true,
    },
    contextid:{
        type: Number,
        required: true
    }
})

const viewRef = ref<HTMLElement>(null);

const { view } = useViewConfiguration(props.contextid, props.viewId);

const viewElement = new ViewElement(view);

onMounted(() => {
    viewElement.bind(props.contextid, viewRef);
})

onUnmounted(() => {
    viewElement.unbind();
})

</script>