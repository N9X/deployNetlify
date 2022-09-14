import{v as n}from"./runtime-dom.esm-bundler.637987888844010000.js";import{_ as d}from"./plugin-vue_export-helper.637987888844010000.js";import{c as b,a as e,d as i,t as r,g as a,o as x,f as p}from"./runtime-core.esm-bundler.637987888844010000.js";const f={data(){return{Capital:"",riskpercentage:"",entryprice:"",stoplossprice:"",riskreward:"",stoplossrange:"",targetrange:"",number:5}},computed:{leverageintocapital:function(){return this.Capital*this.leverage},stoplossleveragei:function(){return this.stoplossrange*this.leverageintocapital/100},targetleveragei:function(){return this.targetrange*this.leverageintocapital/100},stoplosscapitalpercentage:function(){return 100*this.stoplossleveragei/this.Capital},targetcapitalpercentage:function(){return 100*this.targetleveragei/this.Capital},newresult:function(){return this.leverageintocapital*this.number},toleratedrisk:function(){return this.Capital*this.riskpercentage/100},shares:function(){return this.toleratedrisk/(this.entryprice-this.stoplossprice)},calriskreward:function(){return(this.entryprice-this.stoplossprice)*this.riskreward},profit:function(){return this.calriskreward*this.shares},targerprice:function(){return this.calriskreward*this.shares},involvedcapital:function(){return this.entryprice*this.shares},icpercentage:function(){return this.involvedcapital/this.Capital*100},grossstoploss:function(){return 100*this.stoplossprice/this.entryprice},grstoploss:function(){return 100-this.grossstoploss}}},u={class:"px-2 py-2 bg-black md:px-0"},m={class:"w-full mt-16 16px-5 py-0 mx-auto mb-5 sm:py- md:py- sm:space-y md:space-y- max-w-7xl bg-black text-white"},g={class:"flex flex-col items-center sm:px-5 md:flex-row"},h=a('<div class="w-full md:w-1/2 md:px-3"><div class="text-center lg:text-left"><p class="mb-4 font-semibold text-xl text-blue-500"> INTERACTIVE TOOL </p><h2 class="mb-8 text-white text-4xl 2xl:text-5xl font-bold font-heading"> Position Sizing Tool </h2><p class="mb-8 text-gray-500 text-base"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper </p><div class="relative flex flex-col sm:flex-row sm:space-x-4"><span class="relative top-0 right-0 block"><button type="button" class="inline-flex items-center w-50 h-12 px-8 text-base font-bold leading-6 text-white rounded-full transition duration-150 ease-in-out border border-transparent focus:outline-none bg-blue-500"> Try it Now </button></span></div></div></div>',1),_={class:"w-full md:w-1/2 md:px-3"},v={class:"w-full"},w={class:"px-2 py-2 bg-white md:px-0"},y={class:"w-full border-2 border-blue-500 rounded-3xl mt-16 16px-5 py-0 mx-auto mb-5 sm:py- md:py- sm:space-y md:space-y- max-w-7xl text-white"},k=a('<div class="w-full mt-10 justify-center text-center"><div class="flex flex-col items-center justify-center text-black font-extrabold text-4xl md:text-6xl"> PRACTICE YOUR <span class="text-blue-500 ml-3"> POSITION SIZING</span></div><div class="flex flex-col items-center justify-center text-black font-extrabold text-4xl md:text-6xl"> OVER HERE </div></div><div><div class="container px-4 mx-auto mt-5 md:mb-16 mt-10"><div class="text-center"><p class="mb-5 text-gray-900 text-lg text-base"> This is a safe place to practice your Position Sizing calculation. Get a master grip on Position Sizing calculation. </p></div></div></div>',2),C={class:"w-full"},E={id:"app"},I={class:"flex flex-wrap mt-10"},R={class:"p-4 w-full lg:w-1/2"},T={class:"h-full m-2 lg:ml-16 lg:mr-16"},S=e("div",{class:"mb-10 border-2 border-blue-100 bg-blue-100 border-opacity-60 ml-16 mr-16 mb-3 rounded-full"},[e("div",{class:"p-4"},[e("h1",{class:"text-center title-font text-xl font-bold text-blue-700"}," Input your data here ")])],-1),j={class:"form-group mb-6"},D=e("label",{for:"exampleInputEmail1",class:"form-label inline-block mb-2 text-black text-xl font-bold"},"Enter amount",-1),V={class:"form-group mb-6"},P=e("label",{for:"exampleInputEmail1",class:"form-label inline-block mb-2 text-black text-xl font-bold"},"Enter Risk Percentage",-1),z={class:"form-group mb-6"},U=e("label",{for:"exampleInputEmail1",class:"form-label inline-block mb-2 text-black text-xl font-bold"},"Entry price",-1),H={class:"form-group mb-6"},N=e("label",{for:"exampleInputEmail1",class:"form-label inline-block mb-2 text-black text-xl font-bold"},"Stoploss Price",-1),O={class:"form-group mb-6"},G=e("label",{for:"exampleInputEmail1",class:"form-label inline-block mb-2 text-black text-xl font-bold"},"Risk Reward ratio",-1),B=e("div",{class:"p-4"},[e("h1",{class:"text-center title-font text-xl font-bold text-white bg-blue-500 rounded-full p-4"}," Calculate ")],-1),A={class:"p-4 w-full lg:w-1/2"},L={class:"h-full m-2 lg:ml-16 lg:mr-16 overflow-hidden"},X=e("div",{class:"mb-10 border-2 border-blue-100 bg-blue-100 border-opacity-60 ml-16 mr-16 mb-3 rounded-full"},[e("div",{class:"p-4"},[e("h1",{class:"text-center title-font text-xl font-bold text-blue-700"}," Get Your results here ")])],-1),Y={class:"lg:w-full"},M={class:"flex flex-wrap mt-10"},Z={class:"w-full lg:w-1/2 border-b border-blue-200 text-center text-black font-bold text-4xl"},q={class:"flex items-center justify-center flex-wrap"},F={class:"flex flex-col text-blue-700 bg-white font-bold text-4xl pl-4 pr-4 cursor-not-allowed",value:"Disabled input",disabled:""},J=e("label",{for:"steps-range",class:"form-label inline-block text-black text-xl font-bold text-center mt-5 mb-5"}," Shares",-1),K={class:"w-full lg:w-1/2 border-b border-blue-200 text-center"},Q={class:"flex items-center justify-center flex-wrap"},W=e("div",{class:"flex flex-col text-red-500 bg-white font-bold text-4xl pl-4 pr-4 mt-5 lg:mt-0"}," Rs. ",-1),$={class:"flex flex-col text-red-500 bg-white font-bold text-4xl pl-4 pr-4 mt-5 lg:mt-0 cursor-not-allowed",value:"Disabled input",disabled:""},ee=e("label",{for:"steps-range",class:"form-label inline-block text-black text-xl font-bold text-center mt-5 mb-5"}," Tolerated Risk",-1),te={class:"lg:w-full"},le={class:"flex flex-wrap mt-10"},se={class:"w-full lg:w-1/2 border-b border-blue-200 text-center text-black font-bold text-4xl"},oe={class:"flex items-center justify-center flex-wrap"},ie=e("div",{class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4"}," Rs. ",-1),re={class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4 pr-4 cursor-not-allowed",value:"Disabled input",disabled:""},ne=e("label",{for:"steps-range",class:"form-label inline-block text-black text-xl font-bold text-center mt-5 mb-5"}," Target Price ",-1),ae={class:"w-full lg:w-1/2 border-b border-blue-200 text-center"},ce={class:"flex items-center justify-center flex-wrap"},de=e("div",{class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4 mt-5 lg:mt-0"}," Rs. ",-1),be={class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4 pr-4 mt-5 lg:mt-0 cursor-not-allowed",value:"Disabled input",disabled:""},xe=e("label",{for:"steps-range",class:"form-label inline-block mb-2 text-black text-xl font-bold text-center mt-5 mb-5"}," Involved Capital",-1),pe={class:"lg:w-full"},fe={class:"flex flex-wrap mt-10"},ue={class:"w-full lg:w-1/2 text-center text-black font-bold text-4xl"},me={class:"flex items-center justify-center flex-wrap"},ge={class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4 pr-4 cursor-not-allowed",value:"Disabled input",disabled:""},he=e("div",{class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4"}," % ",-1),_e=e("label",{for:"steps-range",class:"form-label inline-block text-black text-xl font-bold text-center mt-5"}," Involved Capital percentage ",-1),ve={class:"w-full lg:w-1/2 text-center"},we={class:"flex items-center justify-center flex-wrap"},ye={class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4 pr-4 mt-5 lg:mt-0 cursor-not-allowed",value:"Disabled input",disabled:""},ke=e("div",{class:"flex flex-col text-green-500 bg-white font-bold text-4xl pl-4 mt-5 lg:mt-0"}," % ",-1),Ce=e("label",{for:"steps-range",class:"form-label inline-block text-black text-xl font-bold text-center mt-5"}," Gross stoploss",-1);function Ee(Ie,t,Re,Te,l,o){const c=p("tez-src");return x(),b("main",null,[e("section",u,[e("div",m,[e("div",g,[h,e("div",_,[e("div",v,[i(e("img",null,null,512),[[c,"/asset/images/position sizing tool.png"]])])])])])]),e("section",w,[e("div",y,[k,e("div",C,[e("div",E,[e("div",I,[e("div",R,[e("div",T,[S,e("form",null,[e("div",j,[D,i(e("input",{type:"number",id:"Capital","onUpdate:modelValue":t[0]||(t[0]=s=>l.Capital=s),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp",placeholder:"<=10,00,000",min:"1",max:"100000"},null,512),[[n,l.Capital]])]),e("div",V,[P,i(e("input",{type:"number",id:"riskpercentage","onUpdate:modelValue":t[1]||(t[1]=s=>l.riskpercentage=s),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp",placeholder:" 1X - 10 X",min:"1",max:"10"},null,512),[[n,l.riskpercentage]])]),e("div",z,[U,i(e("input",{type:"number",id:"entryprice","onUpdate:modelValue":t[2]||(t[2]=s=>l.entryprice=s),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[n,l.entryprice]])]),e("div",H,[N,i(e("input",{type:"number",id:"stoplossprice","onUpdate:modelValue":t[3]||(t[3]=s=>l.stoplossprice=s),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[n,l.stoplossprice]])]),e("div",O,[G,i(e("input",{type:"number",id:"riskreward","onUpdate:modelValue":t[4]||(t[4]=s=>l.riskreward=s),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[n,l.riskreward]])]),B])])]),e("div",A,[e("div",L,[X,e("form",null,[e("div",Y,[e("div",M,[e("div",Z,[e("span",q,[e("div",F,r(o.shares),1)]),J]),e("div",K,[e("span",Q,[W,e("div",$,r(o.toleratedrisk),1)]),ee])])]),e("div",te,[e("div",le,[e("div",se,[e("span",oe,[ie,e("div",re,r(o.targerprice),1)]),ne]),e("div",ae,[e("span",ce,[de,e("div",be,r(o.involvedcapital),1)]),xe])])]),e("div",pe,[e("div",fe,[e("div",ue,[e("span",me,[e("div",ge,r(o.icpercentage),1),he]),_e]),e("div",ve,[e("span",we,[e("div",ye,r(o.grstoploss),1),ke]),Ce])])])])])])])])])])])])}var Ve=d(f,[["render",Ee]]);export{Ve as default};
