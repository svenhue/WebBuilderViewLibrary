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
        required: false,
    },
    contextid: {
        type: Number,
        required: false,
    },
    view: {
        type: Object as () => IViewConfiguration,
        required: false
    }
})

const viewRef = ref<InstanceType<typeof QBtn>>(null);
const {view } = useViewConfiguration(props.contextid, props.viewId, props.view) as MaybeRefOrGetter<[ MaybeRefOrGetter<IViewConfiguration>, MaybeRefOrGetter<Array<IViewConfiguration>>]>
const viewelement = new ViewElement<typeof QBtn>(view);

onMounted(() => {
    viewelement.bind(props.contextid, viewRef);
})

onUnmounted(() => {
    viewelement.unbind();
})

</script>
