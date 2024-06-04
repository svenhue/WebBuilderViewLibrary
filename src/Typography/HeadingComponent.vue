<template>
        <h1
        v-if="view?.properties.headingTag == 'h1'" 
        v-bind="view?.htmlattributes" :style="view?.style" >
            {{ viewElement.ResolveTemplateProperty(view.content.text) }}
        </h1>
        <h2
        v-else-if="view?.properties.headingTag == 'h2'"
        v-bind="view?.htmlattributes" :style="view?.style" >
            {{ view.content.text }}
        </h2>
        <h3
        v-else-if="view?.properties.headingTag == 'h3'"
        v-bind="view?.htmlattributes" :style="view?.style" >
            {{ view.content.text }}
        </h3>
        <h4
        v-else-if="view?.properties.headingTag == 'h4'"
        v-bind="view?.htmlattributes" :style="view?.style" >
            {{ view.content.text }}
        </h4>
        <h5
        v-else-if="view?.properties.headingTag == 'h5'"

        v-bind="view?.htmlattributes" :style="view?.style" >
            {{ view.content.text }}
        </h5>
        <h6
        v-else-if="view?.properties.headingTag == 'h6'"
        v-bind="view?.htmlattributes" :style="view?.style" >
            {{ view.content.text }}
        </h6>
</template>

<script setup lang="ts">
import { ViewElement, useViewConfiguration } from 'alphautils';
import { onMounted, onUnmounted} from 'vue';
const props = defineProps({
    viewId:{
        type: Number,
        required: true
    },
    contextid:{
        type: Number,
        required: true
    }
})


const { view } = useViewConfiguration(props.contextid, props.viewId);

const viewElement = new ViewElement(view);

onMounted(() => {
    viewElement.bind(props.contextid);
})

onUnmounted(() => {
    viewElement.unbind();
})
</script>