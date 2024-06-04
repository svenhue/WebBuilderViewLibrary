<template>

    <router-link

    :to="view?.properties?.link != undefined ? view?.properties?.link : ''"
    v-bind="view?.htmlattributes"
    :style="view?.style"
    ref="viewRef">
    {{ view?.content?.text }}
    
    </router-link>
</template>

<script setup lang="ts">
import {  IViewConfiguration, ViewElement, useViewConfiguration } from 'alphautils';
import { onMounted, ref, onUnmounted, defineProps, MaybeRefOrGetter } from 'vue';


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

const viewRef = ref<HTMLElement | null>(null);

const { view } = useViewConfiguration(props.contextid, props.viewId) as { view: MaybeRefOrGetter<IViewConfiguration>};


const viewElement = new ViewElement(view);

onMounted(() => {
    viewElement.bind(view, viewRef);
})

onUnmounted(() => {
    viewElement.unbind();
})



</script>