(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t){},1247:function(e,t,n){"use strict";n.r(t);n(1238),n(3),n(11),n(12),n(18),n(13),n(41),n(10),n(173),n(39),n(22),n(14),n(112),n(232),n(15);var o=n(36),r=n(0),i=n.n(r),a=n(2),c=n.n(a),u=n(32),l=n.n(u);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=Object(o.a)("div",{target:"evroby70",label:"Panel"})({name:"1wmeurp",styles:"padding:10px;box-sizing:border-box;width:100%;"}),v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,r,a=(t=c,function(){var e,n=b(t);if(h()){var o=b(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return d(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={text:""},e.onAddNotes=e.onAddNotes.bind(y(e)),e}return n=c,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.channel,o=t.api;n.on("ecl/notes/add_notes",this.onAddNotes),this.stopListeningOnStory=o.onStory((function(){e.onAddNotes("")}))}},{key:"componentWillUnmount",value:function(){this.stopListeningOnStory&&this.stopListeningOnStory(),this.unmounted=!0,this.props.channel.removeListener("ecl/notes/add_notes",this.onAddNotes)}},{key:"onAddNotes",value:function(e){this.setState({text:e})}},{key:"render",value:function(){var e=this.props.active,t=this.state.text,n=t?t.trim().replace(/(<\S+.*>)\n/g,"$1").replace(/\n/g,"<br />"):"";return e?i.a.createElement(g,{className:"addon-notes-container",dangerouslySetInnerHTML:{__html:n}}):null}}])&&p(n.prototype,o),r&&p(n,r),c}(i.a.Component);v.propTypes={active:c.a.bool.isRequired,channel:c.a.shape({on:c.a.func,emit:c.a.func,removeListener:c.a.func}).isRequired,api:c.a.shape({onStory:c.a.func,getQueryParam:c.a.func,setQueryParams:c.a.func}).isRequired},l.a.register("ecl/notes",(function(e){var t=l.a.getChannel();l.a.addPanel("ecl/notes/panel",{title:"Notes",render:function(n){var o=n.active;return i.a.createElement(v,{channel:t,api:e,active:o})}})}));var w=n(82),O=n.n(w),S=n(116),k=n.n(S),_=n(183);n(255);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function x(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=Object(o.a)("div",{target:"e1uivauh0",label:"CodePanel"})({name:"1xjt7n4",styles:"margin:0;width:100%;height:100%;overflow:auto;font-size:1rem;display:flex;"}),T=Object(o.a)("pre",{target:"e1uivauh1",label:"Pre"})({name:"1wh33ew",styles:"margin:0 !important;padding-top:4rem !important;border-radius:0 !important;flex-grow:1;"}),A=Object(o.a)("div",{target:"e1uivauh2",label:"Actions"})({name:"13xrdq",styles:"color:#f8f8f2;display:flex;flex-direction:row;position:absolute;background-color:#272822;right:0;top:0;z-index:1;"}),H=Object(o.a)("button",{target:"e1uivauh3",label:"CopyButton"})({name:"92olvm",styles:"color:#f8f8f2;font-size:0.9em;padding:1em;background:transparent;border:1px solid #fff;border-top-width:0;border-right-width:0;"}),D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,o,r,a=(t=c,function(){var e,n=L(t);if(E()){var o=L(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return x(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={code:"",pretty:!0},t.onAddHTMLMarkup=t.onAddHTMLMarkup.bind(M(t)),t.toggleBeautifier=t.toggleBeautifier.bind(M(t)),t.codeRef=null,t.setCodeRef=function(e){t.codeRef=e},t}return n=c,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.channel,o=t.api;n.on("ecl/code/add_code",this.onAddHTMLMarkup),this.clipboard=new k.a("#copy-code"),this.stopListeningOnStory=o.onStory((function(){e.onAddHTMLMarkup("")})),this.codeRef&&O.a.highlightElement(this.codeRef)}},{key:"componentDidUpdate",value:function(){this.codeRef&&O.a.highlightElement(this.codeRef)}},{key:"componentWillUnmount",value:function(){this.stopListeningOnStory&&this.stopListeningOnStory(),this.clipboard&&this.clipboard.destroy(),this.unmounted=!0,this.props.channel.removeListener("ecl/code/add_code",this.onAddHTMLMarkup)}},{key:"onAddHTMLMarkup",value:function(e){this.setState({code:e})}},{key:"toggleBeautifier",value:function(){this.setState((function(e){return{pretty:!e.pretty}}))}},{key:"render",value:function(){var e=this.state,t=e.code,n=e.pretty,o=this.props.active,r=t;return n&&(r=Object(_.html)(r,{indent_size:2,max_preserve_newlines:-1,preserve_newlines:!1,indent_scripts:"normal"})),o?i.a.createElement(C,null,i.a.createElement(A,null,i.a.createElement(H,{type:"button",onClick:this.toggleBeautifier},n?"Show raw":"Show beautified"),i.a.createElement(H,{type:"button",id:"copy-code","data-clipboard-text":r},"Copy")),i.a.createElement(T,{className:"language-html line-numbers"},i.a.createElement("code",{className:"language-html",ref:this.setCodeRef},r))):null}}])&&j(n.prototype,o),r&&j(n,r),c}(i.a.Component);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function B(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.register("ecl/code",(function(e){l.a.addPanel("ecl/code/panel",{title:"HTML",render:function(t){var n=t.active;return i.a.createElement(D,{channel:l.a.getChannel(),api:e,active:n})}})}));var Q=Object(o.a)("div",{target:"e17y455f0",label:"CodePanel"})({name:"1xjt7n4",styles:"margin:0;width:100%;height:100%;overflow:auto;font-size:1rem;display:flex;"}),I=Object(o.a)("pre",{target:"e17y455f1",label:"Pre"})({name:"1wh33ew",styles:"margin:0 !important;padding-top:4rem !important;border-radius:0 !important;flex-grow:1;"}),$=Object(o.a)("div",{target:"e17y455f2",label:"Actions"})({name:"13xrdq",styles:"color:#f8f8f2;display:flex;flex-direction:row;position:absolute;background-color:#272822;right:0;top:0;z-index:1;"}),F=Object(o.a)("button",{target:"e17y455f3",label:"CopyButton"})({name:"92olvm",styles:"color:#f8f8f2;font-size:0.9em;padding:1em;background:transparent;border:1px solid #fff;border-top-width:0;border-right-width:0;"}),G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(c,e);var t,n,o,r,a=(t=c,function(){var e,n=W(t);if(q()){var o=W(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return B(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={code:"",pretty:!0},t.onAddHTMLMarkup=t.onAddHTMLMarkup.bind(U(t)),t.toggleBeautifier=t.toggleBeautifier.bind(U(t)),t.codeRef=null,t.setCodeRef=function(e){t.codeRef=e},t}return n=c,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.channel,o=t.api;n.on("ecl/jsCode/add_code",this.onAddHTMLMarkup),this.clipboard=new k.a("#copy-code"),this.stopListeningOnStory=o.onStory((function(){e.onAddHTMLMarkup("")})),this.codeRef&&O.a.highlightElement(this.codeRef)}},{key:"componentDidUpdate",value:function(){this.codeRef&&O.a.highlightElement(this.codeRef)}},{key:"componentWillUnmount",value:function(){this.stopListeningOnStory&&this.stopListeningOnStory(),this.clipboard&&this.clipboard.destroy(),this.unmounted=!0,this.props.channel.removeListener("ecl/jsCode/add_code",this.onAddHTMLMarkup)}},{key:"onAddHTMLMarkup",value:function(e){this.setState({code:e})}},{key:"toggleBeautifier",value:function(){this.setState((function(e){return{pretty:!e.pretty}}))}},{key:"render",value:function(){var e=this.state,t=e.code,n=e.pretty,o=this.props.active,r=t;return n&&(r=Object(_.html)(r,{indent_size:2,max_preserve_newlines:-1,preserve_newlines:!1,indent_scripts:"normal"})),o?i.a.createElement(Q,null,i.a.createElement($,null,i.a.createElement(F,{type:"button",onClick:this.toggleBeautifier},n?"Show raw":"Show beautified"),i.a.createElement(F,{type:"button",id:"copy-code","data-clipboard-text":r},"Copy")),i.a.createElement(I,{className:"language-html line-numbers"},i.a.createElement("code",{className:"language-html",ref:this.setCodeRef},r))):null}}])&&z(n.prototype,o),r&&z(n,r),c}(i.a.Component);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function X(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.register("ecl/jsCode",(function(e){l.a.addPanel("ecl/jsCode/panel",{title:"HTML by JS",render:function(t){var n=t.active;return i.a.createElement(G,{channel:l.a.getChannel(),api:e,active:n})}})}));var ne=Object(o.a)("div",{target:"e1wmasaw0",label:"CodePanel"})({name:"1xjt7n4",styles:"margin:0;width:100%;height:100%;overflow:auto;font-size:1rem;display:flex;"}),oe=Object(o.a)("pre",{target:"e1wmasaw1",label:"Pre"})({name:"1wh33ew",styles:"margin:0 !important;padding-top:4rem !important;border-radius:0 !important;flex-grow:1;"}),re=Object(o.a)("div",{target:"e1wmasaw2",label:"Actions"})({name:"13xrdq",styles:"color:#f8f8f2;display:flex;flex-direction:row;position:absolute;background-color:#272822;right:0;top:0;z-index:1;"}),ie=Object(o.a)("button",{target:"e1wmasaw3",label:"CopyButton"})({name:"92olvm",styles:"color:#f8f8f2;font-size:0.9em;padding:1em;background:transparent;border:1px solid #fff;border-top-width:0;border-right-width:0;"}),ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(c,e);var t,n,o,r,a=(t=c,function(){var e,n=ee(t);if(Z()){var o=ee(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return X(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={code:""},t.onAddHTMLMarkup=t.onAddHTMLMarkup.bind(Y(t)),t.codeRef=null,t.setCodeRef=function(e){t.codeRef=e},t}return n=c,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.channel,o=t.api;n.on("ecl/diff/add_code",this.onAddHTMLMarkup),this.clipboard=new k.a("#copy-code"),this.stopListeningOnStory=o.onStory((function(){e.onAddHTMLMarkup("")})),this.codeRef&&O.a.highlightElement(this.codeRef)}},{key:"componentDidUpdate",value:function(){this.codeRef&&O.a.highlightElement(this.codeRef)}},{key:"componentWillUnmount",value:function(){this.stopListeningOnStory&&this.stopListeningOnStory(),this.clipboard&&this.clipboard.destroy(),this.unmounted=!0,this.props.channel.removeListener("ecl/diff/add_code",this.onAddHTMLMarkup)}},{key:"onAddHTMLMarkup",value:function(e){this.setState({code:e})}},{key:"render",value:function(){var e=this.state.code;return this.props.active?i.a.createElement(ne,null,i.a.createElement(re,null,i.a.createElement(ie,{type:"button",id:"copy-code","data-clipboard-text":e},"Copy")),i.a.createElement(oe,{className:"language-html line-numbers"},i.a.createElement("code",{className:"language-html",ref:this.setCodeRef},e))):null}}])&&V(n.prototype,o),r&&V(n,r),c}(i.a.Component);l.a.register("ecl/diff",(function(e){l.a.addPanel("ecl/diff/panel",{title:"Diff",render:function(t){var n=t.active;return i.a.createElement(ae,{channel:l.a.getChannel(),api:e,active:n})}})}));n(1242)},414:function(e,t,n){n(415),n(557),e.exports=n(1247)}},[[414,1,2]]]);