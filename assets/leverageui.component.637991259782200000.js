import{v as r}from"./runtime-dom.esm-bundler.637991259782200000.js";import{_ as x}from"./plugin-vue_export-helper.637991259782200000.js";import{c as b,a as e,d as a,t as n,g as p,o as u,f}from"./runtime-core.esm-bundler.637991259782200000.js";const m={data(){return{Capital:"",leverage:"",stoplossrange:"",targetrange:"",number:5}},computed:{leverageintocapital:function(){return this.Capital*this.leverage},stoplossleveragei:function(){return this.stoplossrange*this.leverageintocapital/100},targetleveragei:function(){return this.targetrange*this.leverageintocapital/100},stoplosscapitalpercentage:function(){return 100*this.stoplossleveragei/this.Capital},targetcapitalpercentage:function(){return 100*this.targetleveragei/this.Capital},newresult:function(){return this.leverageintocapital*this.number}},methods:{goto(i){var t=this.$refs[i],c=t.offsetTop;window.scrollTo(0,c)}}},g={class:"px-2 py-2 bg-black md:px-0"},_={class:"w-full mt-16 16px-5 py-0 mx-auto mb-5 sm:space-y md:space-y- max-w-7xl bg-black text-white"},h={class:"flex flex-col items-center md:flex-row"},v={class:"w-full sm:w-full md:w-1/2 md:px-3"},w={class:"text-center lg:text-left"},y=e("p",{class:"mb-4 font-semibold text-xl text-blue-500"}," INTERACTIVE TOOL ",-1),k=e("h2",{class:"mb-8 text-white text-4xl 2xl:text-5xl font-bold font-heading"}," Leverage Tool ",-1),C=e("p",{class:"mb-8 text-gray-500 text-base"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper ",-1),T={class:"relative flex flex-col sm:flex-row sm:space-x-4"},E={class:"relative top-0 right-0 block"},V={class:"w-full md:w-1/2 md:px-3"},U={class:"w-full md:h-96"},j={class:"max-h-96 ml-4 md:ml-28 mt-5 md:mt-0"},L={class:"px-2 py-2 bg-white md:px-0"},I={class:"w-full border-2 border-blue-500 rounded-3xl mt-16 16px-5 py-0 mx-auto mb-5 sm:py- md:py- sm:space-y md:space-y- max-w-7xl text-white",ref:"tool"},R=p('<div class="w-full mt-10 justify-center text-center"><div class="flex flex-col items-center justify-center text-black font-extrabold text-4xl md:text-6xl"> PRACTICE YOUR <span class="text-blue-500 ml-3"> LEVERAGE</span></div><div class="flex flex-col items-center justify-center md:mt-3 text-black font-extrabold text-4xl md:text-6xl"> OVER HERE </div></div><div><div class="container px-4 mx-auto mt-5 md:mb-16 mt-10"><div class="text-center"><p class="mb-5 text-gray-900 text-lg text-base"> This is a safe place to practice your leverage calculation. Get a master grip on leverage calculation. </p></div></div></div>',2),A={class:"w-full"},D={id:"app"},H={class:"flex flex-wrap mt-10"},N={class:"p-4 w-full lg:w-1/2"},O={class:"h-full m-2 lg:ml-16 lg:mr-16"},B=e("div",{class:"mb-10 border-2 border-blue-100 bg-blue-100 border-opacity-60 ml-16 mr-16 mb-3 rounded-full"},[e("div",{class:"p-4"},[e("h1",{class:"text-center title-font text-xl font-bold text-blue-700"}," Input your data here ")])],-1),G={class:"form-group mb-6"},S=e("label",{for:"exampleInputEmail1",class:"form-label inline-block mb-2 text-black text-xl font-bold"},"Enter amount",-1),z={class:"form-group mb-6"},P={class:"flex items-center justify-between flex-wrap"},Y=e("label",{for:"steps-range",class:"flex flex-col form-label inline-block mb-2 text-black text-xl font-bold"}," Enter leverage ",-1),M={class:"flex flex-col text-white bg-blue-700 rounded-l rounded-r text-white pl-4 pr-4"},X=e("small",{id:"emailHelp",class:"block mt-1 text-xs text-gray-600"},null,-1),q={class:"form-group mb-6"},F=e("label",{for:"exampleInputPassword1",class:"form-label inline-block mb-2 text-black text-xl font-bold"}," Leverage amount",-1),J={class:"form-group mb-6"},K={class:"flex items-center justify-between flex-wrap"},Q=e("label",{for:"steps-range",class:"flex flex-col form-label inline-block mb-2 text-black text-xl font-bold"}," Stop loss percentage ",-1),W={class:"flex flex-col bg-blue-700 rounded-l rounded-r text-white pl-4 pr-4"},Z=e("small",{id:"emailHelp",class:"block mt-1 text-xs text-gray-600"},null,-1),$={class:"form-group mb-10"},ee={class:"flex items-center justify-between flex-wrap"},te=e("label",{for:"steps-range",class:"flex flex-col form-label inline-block mb-2 text-black text-xl font-bold"}," Targer percentage ",-1),le={class:"flex flex-col bg-blue-700 rounded-l rounded-r text-white pl-4 pr-4"},se=e("small",{id:"emailHelp",class:"block mt-1 text-xs text-gray-600"},null,-1),oe=e("div",{class:"p-4"},[e("h1",{class:"text-center title-font text-xl font-bold text-white bg-blue-500 rounded-full p-4"}," Calculate ")],-1),ae={class:"p-4 w-full lg:w-1/2"},re={class:"h-full m-2 lg:ml-16 lg:mr-16 overflow-hidden"},ne=e("div",{class:"mb-10 border-2 border-blue-100 bg-blue-100 border-opacity-60 ml-16 mr-16 mb-3 rounded-full"},[e("div",{class:"p-4"},[e("h1",{class:"text-center title-font text-xl font-bold text-blue-700"}," Get Your results here ")])],-1),ie=e("label",{for:"steps-range",class:"form-label inline-block mb-2 text-black text-xl font-bold"}," Leverage stop loss amount",-1),ce=e("label",{for:"steps-range",class:"form-label inline-block mb-2 text-black text-xl font-bold"}," Leverage Target amount",-1),de={class:"lg:w-full"},xe={class:"flex flex-wrap mt-10"},be={class:"w-full lg:w-1/2 text-center text-black font-bold text-4xl"},pe={class:"flex items-center justify-center flex-wrap"},ue=e("div",{class:"flex flex-col text-gray-400 bg-white font-bold text-4xl pl-2 pr-2"}," - ",-1),fe={class:"flex flex-col text-gray-400 bg-white font-bold text-4xl pl-2 pr-2 cursor-not-allowed",value:"Disabled input",disabled:""},me=e("div",{class:"flex flex-col text-gray-400 bg-white font-bold text-4xl pl-2 pr-2"}," % ",-1),ge=e("label",{for:"steps-range",class:"form-label inline-block mb-2 text-black text-xl font-bold text-center mt-5"}," Capital stoploss Amount",-1),_e={class:"w-full lg:w-1/2 text-center"},he={class:"flex items-center justify-center flex-wrap"},ve=e("div",{class:"flex flex-col text-gray-400 bg-white font-bold text-4xl pl-2 pr-2"}," + ",-1),we={class:"flex flex-col text-gray-400 bg-white font-bold text-4xl pl-2 pr-2 cursor-not-allowed",value:"Disabled input",disabled:""},ye=e("div",{class:"flex flex-col text-gray-400 bg-white font-bold text-4xl pl-2 pr-2"}," % ",-1),ke=e("label",{for:"steps-range",class:"form-label inline-block mb-2 text-black text-xl font-bold text-center mt-5"}," Capital Target Amount",-1);function Ce(i,t,c,Te,s,o){const d=f("tez-src");return u(),b("main",null,[e("section",g,[e("div",_,[e("div",h,[e("div",v,[e("div",w,[y,k,C,e("div",T,[e("span",E,[e("button",{onClick:t[0]||(t[0]=l=>o.goto("tool")),type:"button",class:"inline-flex items-center w-50 h-12 px-8 text-base font-bold leading-6 text-white rounded-full transition duration-150 ease-in-out border border-transparent focus:outline-none bg-blue-500"}," Try it Now ")])])])]),e("div",V,[e("div",U,[a(e("img",j,null,512),[[d,"/asset/images/leverage tool.png "]])])])])])]),e("section",L,[e("div",I,[R,e("div",A,[e("div",D,[e("div",H,[e("div",N,[e("div",O,[B,e("form",null,[e("div",G,[S,a(e("input",{type:"number",id:"Capital","onUpdate:modelValue":t[1]||(t[1]=l=>s.Capital=l),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp",placeholder:"<=10,00,000",min:"1",max:"100000"},null,512),[[r,s.Capital]])]),e("div",z,[e("span",P,[Y,e("div",M," X "+n(s.leverage),1)]),a(e("input",{type:"range",min:"0",max:"10",step:"1",id:"stoploss","onUpdate:modelValue":t[2]||(t[2]=l=>s.leverage=l),class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"},null,512),[[r,s.leverage]]),X]),e("div",q,[F,a(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>o.leverageintocapital=l),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:" ",min:"1",max:"10"},null,512),[[r,o.leverageintocapital]])]),e("div",J,[e("span",K,[Q,e("div",W,n(s.stoplossrange)+" % ",1)]),a(e("input",{type:"range",min:"0",max:"20",step:"1",id:"stoploss","onUpdate:modelValue":t[4]||(t[4]=l=>s.stoplossrange=l),class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"},null,512),[[r,s.stoplossrange]]),Z]),e("div",$,[e("span",ee,[te,e("div",le,n(s.targetrange)+" % ",1)]),a(e("input",{type:"range",min:"0",max:"50",step:"1",id:"Target","onUpdate:modelValue":t[5]||(t[5]=l=>s.targetrange=l),class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"},null,512),[[r,s.targetrange]]),se]),oe])])]),e("div",ae,[e("div",re,[ne,e("form",null,[e("div",null,[ie,a(e("input",{type:"text",placeholder:"0","onUpdate:modelValue":t[6]||(t[6]=l=>o.stoplossleveragei=l),class:"mb-6 bg-gray-200 border-2 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed",disabled:""},null,512),[[r,o.stoplossleveragei]])]),e("div",null,[ce,a(e("input",{type:"text",placeholder:"0","onUpdate:modelValue":t[7]||(t[7]=l=>o.targetleveragei=l),class:"mb-6 bg-gray-200 border-2 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed",disabled:""},null,512),[[r,o.targetleveragei]])]),e("div",de,[e("div",xe,[e("div",be,[e("span",pe,[ue,e("div",fe,n(o.stoplosscapitalpercentage),1),me]),ge]),e("div",_e,[e("span",he,[ve,e("div",we,n(o.targetcapitalpercentage),1),ye]),ke])])])])])])])])])],512)])])}var je=x(m,[["render",Ce]]);export{je as default};
