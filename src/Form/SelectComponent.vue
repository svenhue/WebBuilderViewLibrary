<template>
    <q-select 
    :rules="viewElement.ValidateRules()"
    dense
    :label="viewElement.ResolveTemplateProperty(view.content.label)" 
    :model-value="view.content?.value ?? view.content?.defaultValue ?? ''"
    @update:model-value="(val) => viewModel.PartialUpdate(view, {key:'content.value', value:val})"
    :options="view.content?.options ?? []"
    v-bind="view.htmlattributes">
        <template v-if="view.properties.showLabelInInput != true" v-slot:before>
            {{  viewElement.ResolveTemplateProperty(view.content.label) }}
        </template>
    </q-select>
</template>


<script setup lang="ts">


import { BaseViewModel, ValueValidationViewElement, useViewConfiguration } from 'alphautils';
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

const viewElement = new ValueValidationViewElement(view)

const viewModel = new BaseViewModel(props.contextid)

onMounted(() => {
    viewElement.bind()
})

onUnmounted(() => {
    viewElement.unbind()
})
</script>