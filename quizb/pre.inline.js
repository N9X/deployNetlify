
        import headerNew from "/assets/headernew.component.637988782772750000.js";import quizb from "/assets/quizb.component.637988782772750000.js";
        import blackheader from "/assets/black_header.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/quizb","slots":{"default":[{"name":"quizb","data":{"componentName":"quizb"},"id":"0-quizb"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/quizb","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"black-header"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"quizb":quizb,},
                masterPage:{"black-header":blackheader,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    