import{A as c,r as i,f as h,o as n,c as r,b as l,w as o,a as e,d as f,t as x,e as v}from"./runtime-core.esm-bundler.637984122185990000.js";const g={class:"p-4"},p={class:"h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden"},b={class:"lg:h-48 md:h-36 w-full object-cover object-center",style:{height:"391px !important"}},y={class:"p-6"},z={class:"title-font text-lg font-bold text-gray-900 hover:text-blue-500 cursor-pointer mb-3"},w=e("a",{class:"text-grey-500 font-light inline-flex items-center md:mb-5 lg:mb-5"}," JAN 26, 2022",-1),T=["innerHTML"],k=v(" Read More "),B=c({__name:"article-card",props:{article:null},setup(t){return(d,_)=>{const a=i("tez-link"),s=h("tez-src");return n(),r("main",null,[l(a,{to:t.article.slug,title:t.article.title},{default:o(()=>[e("div",g,[e("div",p,[f(e("img",b,null,512),[[s,t.article.image.url]]),e("div",y,[e("h1",z,x(t.article.title),1),w,e("div",{innerHTML:t.article.content.slice(0,150).concat("...")},null,8,T),l(a,{to:t.article.slug,title:t.article.title,class:"text-gray-500 font-medium text-decoration-line: underline"},{default:o(()=>[k]),_:1},8,["to","title"])])])])]),_:1},8,["to","title"])])}}});const L={class:"container mx-auto p-5 sm:p-10 md:p-16 relative mt-12"},N=e("h1",{class:"mb-6 text-5xl font-bold"},"Finsanity Blog",-1),D=c({__name:"articles",props:{data:null},setup(t){return(d,_)=>{const a=i("tez-iterator"),s=i("TezLazy");return n(),r("div",L,[N,e("div",null,[l(s,{class:"",sourcePath:t.data.dynamicSourcePath},{default:o(m=>[l(a,{class:"tez-iterator flex flex-wrap -mx-4",items:m.items},{default:o(u=>[l(B,{article:u},null,8,["article"])]),_:2},1032,["items"])]),_:1},8,["sourcePath"])])])}}});export{D as default};
