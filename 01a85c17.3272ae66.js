(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,13,16,23],{100:function(e,a,t){"use strict";var r=t(2),n=t(6),l=t(0),c=t.n(l),s=t(89),i=t(88),m=t(91);var o=t(92),u=t(47),f=t.n(u);function d(e){var a=e.to,t=e.href,l=e.label,s=e.prependBaseUrlToHref,m=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(o.a)(a),f=Object(o.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(i.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:s?f:t}:{to:u},m),l)}var E=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.a)().siteConfig.themeConfig.footer,a=e||{},t=a.copyright,r=a.links,n=void 0===r?[]:r,l=a.logo,i=void 0===l?{}:l,u=Object(o.a)(i.src);return e?c.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},n&&n.length>0&&c.a.createElement("div",{className:"row footer__links"},n.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(d,e))}))):null)}))),(i||t)&&c.a.createElement("div",{className:"text--center"},i&&i.src&&c.a.createElement("div",{className:"margin-bottom--sm"},i.href?c.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},c.a.createElement(E,{alt:i.alt,url:u})):c.a.createElement(E,{alt:i.alt,url:u})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))):null}},59:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(95),c=t(88),s=t(96);a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var i=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return n.a.createElement("div",{key:t},n.a.createElement("h3",null,t),r.map((function(e){return n.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:t})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},i)))))}},96:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),n=t.n(r),l=t(88),c=t(48),s=t.n(c);function i(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:s.a.sidebar},n.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},n.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}}}]);