(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e3c9"],{d568:function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"result-screen",class:[e.gametype,{close:!e.screen,open:e.screen}]},[t("div",{staticClass:"screen-close",on:{click:e.handleCancel}},[t("svg",{staticClass:"icon-mid",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-close"}})])]),t("div",{staticClass:"screen-sign"},[t("svg",{staticClass:"icon-title",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-"+e.gametype}})])]),t("div",{staticClass:"screen-content"},[e._v("确定要现在结束游戏吗？")]),t("div",{staticClass:"screen-option"},[t("div",{staticClass:"cancel-btn",class:[e.gametype,{show:e.screen}],on:{click:e.handleCancel}},[e._v("取消")]),t("div",{staticClass:"option-btn",class:[e.gametype,{show:e.screen}],on:{click:e.handleOver}},[e._v("确定")])])])},a=[],c={name:"ModalScreen",props:{screen:Boolean,gametype:String},data:function(){return{}},methods:{handleOver:function(){var e=this;setTimeout((function(){e.$emit("ok")}),100)},handleCancel:function(){var e=this;setTimeout((function(){e.$emit("update:screen",!1)}),100)}},watch:{}},i=c,l=t("2877"),r=Object(l["a"])(i,n,a,!1,null,null,null);s["default"]=r.exports}}]);