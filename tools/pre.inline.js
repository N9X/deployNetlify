
        import headerNew from "/assets/headernew.component.637988782772750000.js";import toolsmain from "/assets/toolsmain.component.637988782772750000.js";
        import blackheader from "/assets/black_header.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/tools","slots":{"default":[{"name":"toolsmain","data":{"componentName":"toolsmain"},"id":"0-toolsmain"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/tools","metaTag":{}},"layoutName":"black-header"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"toolsmain":toolsmain,},
                masterPage:{"black-header":blackheader,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    