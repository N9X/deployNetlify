import{_ as y}from"./plugin-vue_export-helper.637996538942030000.js";import{c as f,a as u,g as _,o as g}from"./runtime-core.esm-bundler.637996538942030000.js";const k={methods:{calc(){var a,r,t,c,p,n,o,d,l,s;t=parseInt(document.getElementById("principle").value),c=parseInt(document.getElementById("percentage").value),d=0,l=0,a=parseInt(document.getElementById("amountOfTime").value);for(var e=new Array;a!==0;)document.createElement("tr"),o=t*c/100,e.push(o.toFixed(2)),l=d+o,e.push(l.toFixed(2)),s=t-o,e.push(s.toFixed(2)),r=l/1e3,e.push(r.toFixed(2)),p=t*100/s,n=p-100,e.push(n.toFixed(2)),t=s,e.push(t.toFixed(2)),d=l,e.push(d.toFixed(2)),a--;var h=e,i='<div class="tableResponsive"><table class="min-w-full text-sm" border="2"><tr><th>x</th><th>x2</th><th>y</th><th>lp</th><th>rp</th><th>p</th><th>x1</th></tr>',b=7;h.forEach((x,v)=>{i+=`<td>${x}</td>`;var m=v+1;m%b==0&&m!=h.length&&(i+="</tr><tr>")}),i+="</tr></table></div>",document.getElementById("container").innerHTML=i}}},E={class:"py-16"},w={class:"container"},B=_('<div class="flex flex-wrap items-center justify-evenly"></div><label class="mr-4">Enter Principal: </label><input type="number" id="principle" placeholder="&lt;=100000" required class="px-2 border border-solid border-black my-4 block lg:flex"><input type="number" id="percentage" placeholder="percentage" required class="px-2 border border-solid border-black my-4 block lg:flex"><input type="number" id="amountOfTime" value="20" placeholder="Amount of Time in days" required readonly class="px-2 border border-solid border-black my-4 block lg:flex">',5),F=u("div",{id:"container",class:"mt-4"},null,-1);function I(a,r,t,c,p,n){return g(),f("main",E,[u("section",w,[B,u("input",{class:"px-6 py-2 border bg-black text-white hover:bg-white hover:text-black rounded-md cursor-pointer hover:border hover:border-solid hover:border-black",type:"button",onClick:r[0]||(r[0]=o=>n.calc()),value:"Print value"}),F])])}var q=y(k,[["render",I]]);export{q as default};
