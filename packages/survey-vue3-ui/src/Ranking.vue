<template>
  <div :class="question.rootClass" ref="root">
    <survey-ranking-item
      v-if="!question.selectToRankEnabled"
      v-for="(item, index) in question.rankingChoices"
      :key="item.value + '-' + index + '-item'"
      :class="question.getItemClass(item)"
      :text="item.locText"
      :index="index"
      :indexText="getNumberByIndex(index)"
      :cssClasses="question.cssClasses"
      :question="question"
      :item="item"
    ></survey-ranking-item>

    <div
      v-if="question.selectToRankEnabled"
      :class="question.getContainerClasses('from')"
      data-ranking="from-container"
    >
      <survey-ranking-item
        v-for="(item, index) in question.unRankingChoices"
        :key="item.value + '-' + index + '-item'"
        :class="question.getItemClass(item)"
        :text="item.locText"
        :index="index"
        :indexText="getNumberByIndex(index)"
        :cssClasses="question.cssClasses"
        :question="question"
        :item="item"
        :unrankedItem="true"
      ></survey-ranking-item>

      <div
        v-if="question.unRankingChoices.length === 0"
        :class="question.cssClasses.containerPlaceholder"
      >
        {{ question.selectToRankEmptyRankedAreaText }}
      </div>
    </div>

    <div
      v-if="question.selectToRankEnabled"
      :class="question.cssClasses.containersDivider"
    ></div>

    <div
      v-if="question.selectToRankEnabled"
      :class="question.getContainerClasses('to')"
      data-ranking="to-container"
    >
      <survey-ranking-item
        v-for="(item, index) in question.rankingChoices"
        :key="item.value + '-' + index + '-item'"
        :class="question.getItemClass(item)"
        :text="item.locText"
        :index="index"
        :indexText="getNumberByIndex(index)"
        :cssClasses="question.cssClasses"
        :question="question"
        :item="item"
      ></survey-ranking-item>

      <div
        v-if="question.rankingChoices.length === 0"
        :class="question.cssClasses.containerPlaceholder"
      >
        {{ question.selectToRankEmptyUnrankedAreaText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { QuestionRankingModel } from "survey-core";
import { useQuestion } from "./base";
import { ref } from "vue";
const props = defineProps<{ question: QuestionRankingModel }>();
const root = ref(null);
useQuestion<QuestionRankingModel>(props, root);
const getNumberByIndex = (index: any) => {
  return props.question.getNumberByIndex(index);
};
</script>
