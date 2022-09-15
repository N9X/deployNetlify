
        import headerNew from "/assets/headernew.component.637988782772750000.js";import leverageui from "/assets/leverageui.component.637988782772750000.js";
        import blackheader from "/assets/black_header.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/leverageui","slots":{"default":[{"name":"leverageui","data":{"componentName":"leverageui"},"id":"0-leverageui"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity Levrage Tool","canonical":"http://localhost:3000/leverageui","metaTag":{"name":{"description":"Finsanity Levrage Tool"}}},"layoutName":"black-header"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"leverageui":leverageui,},
                masterPage:{"black-header":blackheader,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    