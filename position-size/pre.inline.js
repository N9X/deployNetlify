
        import headerblack from "/assets/headerblack.component.637988782772750000.js";import positionSize from "/assets/positionsize.component.637988782772750000.js";
        import customlayout from "/assets/custom_layout.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/position-size","slots":{"default":[{"name":"positionSize","data":{"componentName":"positionSize"},"id":"0-positionSize"}]},"masterPageSlots":{"header":[{"name":"headerblack","data":{"componentName":"headerblack"},"id":"0-headerblack"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/position-size","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerblack":headerblack,"positionSize":positionSize,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    