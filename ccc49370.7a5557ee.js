(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,13,16],{100:function(e,t,a){"use strict";var r=a(2),l=a(6),n=a(0),o=a.n(n),c=a(89),s=a(88),m=a(91);var i=a(92),f=a(47),u=a.n(f);function _(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,m=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),f=Object(i.a)(t),u=Object(i.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:f},m),n)}var d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig.themeConfig.footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,n=t.logo,s=void 0===n?{}:n,f=Object(i.a)(s.src);return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},l&&l.length>0&&o.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(_,e))}))):null)}))),(s||a)&&o.a.createElement("div",{className:"text--center"},s&&s.src&&o.a.createElement("div",{className:"margin-bottom--sm"},s.href?o.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},o.a.createElement(d,{alt:s.alt,url:f})):o.a.createElement(d,{alt:s.alt,url:f})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null}}}]);