<template>
    <q-input 
    ref="test"
    dense
    :type="view.content.dataType ?? 'text'"
    :label="view.properties?.showLabelInInput == true ? viewElement.ResolveTemplateProperty(view.content.label) : undefined" 
    :model-value="view.content.value" 
    v-bind="view.htmlattributes"
    :rules="viewElement.ValidateRules()"
    @update:model-value="(value) => { viewModel.PartialUpdate(view, {key:'content.value', value:value}), formViewModel != undefined ? formViewModel.SetValue(`${view.content.label?.replace(/\s/g, '').toLowerCase()}`, value) : null}"
    >
    <template v-if="view.properties.showLabelInInput != true" v-slot:before>
        {{  viewElement.ResolveTemplateProperty(view.content.label) }}
    </template>

    </q-input>

</template>

<script setup lang="ts">
import {  inject, onMounted, onUnmounted} from 'vue';
import { InputView } from './Input/InputView';
import { BaseViewModel, ValueValidationViewElement, useViewConfiguration } from 'alphautils';
import { FormViewModel } from './Form/FormViewModel';

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
const { view } = useViewConfiguration(props.contextid, props.viewId) as { view: InputView }
const viewElement = new ValueValidationViewElement(view);
const viewModel = new BaseViewModel(viewElement.GetConfiguration().contextid);
console.log(viewElement.ValidateRules())
const formViewModel = inject('form', undefined) as FormViewModel;

onMounted(() => {
    viewElement.bind();
})

onUnmounted(() => {
    viewElement.unbind();
    viewModel.Dispose();
})

</script>