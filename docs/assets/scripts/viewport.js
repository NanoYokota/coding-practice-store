!function(){var t={735:function(){(()=>{let t=window.innerWidth;const e=()=>{const t=.01*document.documentElement.clientHeight;document.documentElement.style.setProperty("--vh",`${t}px`)},n=()=>{const t=.01*document.documentElement.clientWidth;document.documentElement.style.setProperty("--vw",`${t}px`)};window.addEventListener("resize",(()=>{n(),t===window.innerWidth&&navigator.userAgent.match(/iPhone|Android.+Mobile/)||(t=window.innerWidth,e())})),e(),n()})()},808:function(){(()=>{const t=document.querySelector('meta[name="viewport"]'),e=()=>{const e=window.outerWidth>390?"width=device-width,initial-scale=1":"width=390";t.getAttribute("content")!==e&&t.setAttribute("content",e)};window.addEventListener("resize",e),e()})()}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(735),n(808)}()}();