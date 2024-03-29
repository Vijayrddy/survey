<template>
  <div
    v-if="surveyWindow.isShowing"
    style="position: fixed; bottom: 3px; right: 10px"
    :style="{maxWidth: surveyWindow.renderedWidth, width: surveyWindow.renderedWidth}"
    :class="surveyWindow.cssRoot"
  >
    <div :class="surveyWindow.cssHeaderRoot">
      <span @click="doExpand" style="width: 100%; cursor: pointer; user-select: none;">
        <span style="padding-right: 10px" :class="surveyWindow.cssHeaderTitle">
          <survey-string :locString="windowSurvey.locTitle" />
        </span>
        <span aria-hidden="true" :class="expandedCss"></span>
      </span>
      <span
        v-if="surveyWindow.allowClose"
        :class="surveyWindow.cssHeaderButton"
        @click="doHide"
        style="transform: rotate(45deg); float: right; cursor: pointer; user-select: none; width: 24px; height: 24px;"
      >
        <sv-svg-icon :iconName="'icon-expanddetail'" :size="16"> </sv-svg-icon>
      </span>
      <span
        v-if="isExpandedSurvey"
        :class="surveyWindow.cssHeaderButton"
        @click="doExpand"
        style="float: right; cursor: pointer; user-select: none; width: 24px; height: 24px;"
      >
        <sv-svg-icon :iconName="'icon-collapsedetail'" :size="16"> </sv-svg-icon>
      </span>
    </div>
    <div v-if="isExpandedSurvey" :class="surveyWindow.cssBody" @scroll="doScroll">
      <component :is="getSurveyComponentName()" :survey="windowSurvey"> </component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Base, PopupSurveyModel, SurveyModel } from "survey-core";
import { BaseVue } from "./base";

@Component
export class PopupSurvey extends BaseVue {
  @Prop() window: PopupSurveyModel;
  @Prop() survey: SurveyModel;
  @Prop() isExpanded: boolean;
  @Prop() isexpanded: boolean;
  @Prop() allowClose: boolean;
  @Prop() closeOnCompleteTimeout: number;

  surveyWindow: PopupSurveyModel;
  constructor() {
    super();
    if (this.window) {
      this.surveyWindow = this.window;
    } else {
      this.surveyWindow = new PopupSurveyModel(null, this.survey);
    }
    if (this.isexpanded !== undefined) {
      this.surveyWindow.isExpanded = this.isexpanded;
    }
    if (this.isExpanded !== undefined) {
      this.surveyWindow.isExpanded = this.isExpanded;
    }
    if (this.closeOnCompleteTimeout !== undefined) {
      this.surveyWindow.closeOnCompleteTimeout = this.closeOnCompleteTimeout;
    }
    if (this.allowClose !== undefined) {
      this.surveyWindow.allowClose = this.allowClose;
    }
    this.surveyWindow.isShowing = true;
  }
  protected getModel(): Base {
    return this.surveyWindow;
  }

  get windowSurvey(): SurveyModel {
    return this.surveyWindow.survey;
  }
  get css() {
    return !!this.survey ? this.survey.getCss() : {};
  }
  get expandedCss() {
    return this.surveyWindow.isExpanded
      ? this.css.window.header.buttonCollapsed
      : this.css.window.header.buttonExpanded;
  }
  get isExpandedSurvey(): boolean {
    return this.surveyWindow.isExpanded;
  }
  set isExpandedSurvey(val: boolean) {
    this.surveyWindow.isExpanded = val;
  }
  doExpand() {
    this.surveyWindow.changeExpandCollapse();
  }
  doHide() {
    this.surveyWindow.hide();
  }
  getSurveyComponentName() {
    return "survey";
  }
  doScroll() {
    this.surveyWindow.onScroll();
  }
}

/**
 * Obsolete, please use PopupSurvey
 */
export class SurveyWindow extends PopupSurvey {}
Vue.component("survey-window", SurveyWindow);

Vue.component("popup-survey", PopupSurvey);
export default PopupSurvey;
</script>
