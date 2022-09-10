
        import headerNew from "/assets/headernew.component.637983958270350000.js";import faq from "/assets/faq.component.637983958270350000.js";import feedback from "/assets/feedback.component.637983958270350000.js";import help from "/assets/help.component.637983958270350000.js";
        import customlayout from "/assets/custom_layout.layout.637983958270350000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/faq","slots":{"default":[{"name":"faq","data":{"componentName":"faq"},"id":"0-faq"},{"name":"feedback","data":{"componentName":"feedback"},"id":"1-feedback"},{"name":"help","data":{"componentName":"help"},"id":"2-help"},{"name":"home","id":"3-home"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/faq","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"faq":faq,"feedback":feedback,"help":help,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637983958270350000.js'),["assets/plugin-vue_export-helper.637983958270350000.js","assets/footer.component.637983958270350000.js","assets/home.component.637983958270350000.js"])
            })
        }    