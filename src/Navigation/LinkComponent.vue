<template>
    <NuxtLink :to="view?.content?.url">

        {{  view?.content?.text }}
    </NuxtLink>
</template>

<script setup lang='ts'>
import { ViewElement, useViewConfiguration } from 'alphautils';
import { ref, onMounted, onUnmounted, MaybeRefOrGetter } from 'vue';
import { QBtn } from 'quasar';
import { IViewConfiguration } from 'alphautils';
const props = defineProps({
    viewId: {
        type: Number,
        required: true,
    },
    contextid: {
        type: Number,
        required: true,
    }
})

const viewRef = ref<InstanceType<typeof QBtn>>(null);
const {view } = useViewConfiguration(props.contextid, props.viewId) as MaybeRefOrGetter<[ MaybeRefOrGetter<IViewConfiguration>, MaybeRefOrGetter<Array<IViewConfiguration>>]>
const viewelement = new ViewElement<typeof QBtn>(view);

onMounted(() => {
    viewelement.bind(props.contextid, viewRef);
})

onUnmounted(() => {
    viewelement.unbind();
})

</script>
