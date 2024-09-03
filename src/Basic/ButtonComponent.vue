<template>
    <q-btn 
    dense
    :class="view?.class"
    :label="view?.content ?? 'Button'"
    ref="viewRef"
    :icon="view?.content?.iconName"
    :flat="view?.properties?.flat ?? false"
    :style="view.style"
    v-bind="view?.htmlattributes"
    :round="view?.appearence?.round ?? false"
    :unelevated="view?.appearence?.unelevated ?? false"
    >
        <BaseViewTreeRenderer
        v-for="child in children" :key="child.id"
        :view="child"
        :contextid="contextid"
        >
        </BaseViewTreeRenderer>
    </q-btn>
</template>

<script setup lang='ts'>
import { ViewElement, useViewConfiguration } from 'alphautils';
import { ref, onMounted, onBeforeUnmount, MaybeRefOrGetter } from 'vue';
import { QBtn } from 'quasar';
import { IViewConfiguration } from 'alphautils';
import  BaseViewTreeRenderer  from '../Renderer/BaseViewTreeRenderer.vue';
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
const {view, children } = useViewConfiguration(props.contextid, props.viewId) as MaybeRefOrGetter<[ MaybeRefOrGetter<IViewConfiguration>, MaybeRefOrGetter<Array<IViewConfiguration>>]>
    const viewelement = new ViewElement<typeof QBtn>(view);
onMounted(() => {
    viewelement.bind(props.contextid, viewRef);
})

onBeforeUnmount(() => {
    viewelement.unbind()
})
</script>
