
        import headerblack from "/assets/headerblack.component.637988782772750000.js";import hero from "/assets/hero.component.637988782772750000.js";import homearticle from "/assets/homearticle.component.637988782772750000.js";import toolshome from "/assets/toolshome.component.637988782772750000.js";
        import customlayout from "/assets/custom_layout.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/","slots":{"default":[{"name":"hero","data":{"componentName":"hero"},"id":"0-hero"},{"name":"homearticle","data":{"componentName":"homearticle","pagination":true,"dynamicSourcePath":"collections/articles"},"id":"1-homearticle"},{"name":"toolshome","data":{"componentName":"toolshome"},"id":"2-toolshome"},{"name":"help","id":"3-help"},{"name":"feedback","id":"4-feedback"},{"name":"faq","id":"5-faq"},{"name":"relatedarticles","id":"6-relatedarticles"}]},"masterPageSlots":{"header":[{"name":"headerblack","data":{"componentName":"headerblack"},"id":"0-headerblack"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerblack":headerblack,"hero":hero,"homearticle":homearticle,"toolshome":toolshome,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js","assets/help.component.637988782772750000.js","assets/feedback.component.637988782772750000.js","assets/faq.component.637988782772750000.js","assets/relatedarticles.component.637988782772750000.js"])
            })
        }    