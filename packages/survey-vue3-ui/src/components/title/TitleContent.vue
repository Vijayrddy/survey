<template>
  <div class="sv-vue-title-additional-div">
    <survey-string
      v-if="element.isTitleRenderedAsString"
      :locString="element.locTitle"
    />
    <span
      v-if="!element.isTitleRenderedAsString && element.isRequireTextOnStart"
      :class="element.cssClasses.requiredText"
      :aria-hidden="true"
      >{{ element.requiredText }}</span
    >
    <span
      v-if="!element.isTitleRenderedAsString && element.no"
      style="position: static"
      :class="element.cssTitleNumber"
      :aria-hidden="true"
      >{{ element.no }}</span
    >
    <span v-if="!element.isTitleRenderedAsString && element.no">&nbsp;</span>
    <span
      v-if="
        !element.isTitleRenderedAsString && element.isRequireTextBeforeTitle
      "
      :class="element.cssClasses.requiredText"
      :aria-hidden="true"
      >{{ element.requiredText }}</span
    >
    <span
      v-if="
        !element.isTitleRenderedAsString && element.isRequireTextBeforeTitle
      "
      >&nbsp;</span
    >
    <survey-string
      v-if="!element.isTitleRenderedAsString"
      :locString="element.locTitle"
    />
    <span
      v-if="!element.isTitleRenderedAsString && element.isRequireTextAfterTitle"
      >&nbsp;</span
    >
    <span
      v-if="!element.isTitleRenderedAsString && element.isRequireTextAfterTitle"
      :class="element.cssClasses.requiredText"
      :aria-hidden="true"
      >{{ element.requiredText }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import type { PanelModel, Question } from "survey-core";
defineProps<{
  element: Question | PanelModel;
  css: any;
}>();
</script>
