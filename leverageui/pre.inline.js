
        import headerNew from "/assets/headernew.component.637983958270350000.js";import leverageui from "/assets/leverageui.component.637983958270350000.js";
        import customlayout from "/assets/custom_layout.layout.637983958270350000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/leverageui","slots":{"default":[{"name":"leverageui","data":{"componentName":"leverageui"},"id":"0-leverageui"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity Levrage Tool","canonical":"http://localhost:3000/leverageui","metaTag":{"name":{"description":"Finsanity Levrage Tool"}}},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"leverageui":leverageui,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637983958270350000.js'),["assets/plugin-vue_export-helper.637983958270350000.js","assets/footer.component.637983958270350000.js"])
            })
        }    