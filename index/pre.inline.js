
        import headerNew from "/assets/headernew.component.637983958270350000.js";import welcometoFin from "/assets/welcometofin.component.637983958270350000.js";import investor from "/assets/investor.component.637983958270350000.js";
        import customlayout from "/assets/custom_layout.layout.637983958270350000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/","slots":{"default":[{"name":"welcometoFin","data":{"componentName":"welcometoFin"},"id":"0-welcometoFin"},{"name":"investor","data":{"componentName":"investor"},"id":"1-investor"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"welcometoFin":welcometoFin,"investor":investor,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637983958270350000.js'),["assets/plugin-vue_export-helper.637983958270350000.js","assets/footer.component.637983958270350000.js"])
            })
        }    