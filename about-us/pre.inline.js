
        import headerNew from "/assets/headernew.component.637983958270350000.js";import aboutus from "/assets/aboutus.component.637983958270350000.js";import investor from "/assets/investor.component.637983958270350000.js";
        import customlayout from "/assets/custom_layout.layout.637983958270350000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/about-us","slots":{"default":[{"name":"aboutus","data":{"componentName":"aboutus"},"id":"0-aboutus"},{"name":"investor","data":{"componentName":"investor"},"id":"1-investor"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"canonical":"http://localhost:3000/about-us"},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"aboutus":aboutus,"investor":investor,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637983958270350000.js'),["assets/plugin-vue_export-helper.637983958270350000.js","assets/footer.component.637983958270350000.js"])
            })
        }    