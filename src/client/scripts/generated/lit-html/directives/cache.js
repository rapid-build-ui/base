import{TemplateInstance}from"../lib/template-instance.js";import{directive,NodePart,reparentNodes,TemplateResult}from"../lit-html.js";const templateCaches=new WeakMap;export const cache=directive(e=>t=>{if(!(t instanceof NodePart))throw new Error("cache can only be used in text bindings");let a=templateCaches.get(t);void 0===a&&(a=new WeakMap,templateCaches.set(t,a));const n=t.value;if(n instanceof TemplateInstance){if(e instanceof TemplateResult&&n.template===t.options.templateFactory(e))return void t.setValue(e);{let e=a.get(n.template);void 0===e&&(e={instance:n,nodes:document.createDocumentFragment()},a.set(n.template,e)),reparentNodes(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof TemplateResult){const n=t.options.templateFactory(e),o=a.get(n);void 0!==o&&(t.setValue(o.nodes),t.commit(),t.value=o.instance)}t.setValue(e)});