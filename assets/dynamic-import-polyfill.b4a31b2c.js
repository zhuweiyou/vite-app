!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){o(self[t].moduleMap[a]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/vite-app/assets/");
