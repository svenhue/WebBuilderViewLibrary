<template>
    <q-checkbox 
    :left-label="view.properties?.label"
    v-bind="view.htmlattributes" 
    :model-value="view.content?.value ?? false"
    @update:model-value="(val) => viewModel.PartialUpdate(view, {key:'content.value', value:val})"
    :checked-icon="view.properties?.checkedIcon"
    :unchecked-icon="view.properties?.uncheckedIcon"
    :name="view.properties?.name"
    :label="view.properties?.label"
    :disable="view.properties?.disbale"
    :size="view.properties?.size"
    :dense="view.properties?.dense"
    >
        
    </q-checkbox>
</template>

<script setup lang="ts">
import { BaseViewModel, ViewElement, useViewConfiguration } from 'alphautils';
import { onMounted, onUnmounted } from 'vue';

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

const { view } = useViewConfiguration(props.contextid, props.viewId)
const viewElement = new ViewElement(view)
const viewModel = new BaseViewModel(props.contextid)

onMounted(() => {
    viewElement.bind()
})

onUnmounted(() => {
    viewElement.unbind()
})
</script>