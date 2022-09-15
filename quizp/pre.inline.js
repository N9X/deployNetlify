
        import headerNew from "/assets/headernew.component.637988782772750000.js";import quizp from "/assets/quizp.component.637988782772750000.js";
        import blackheader from "/assets/black_header.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/quizp","slots":{"default":[{"name":"quizp","data":{"componentName":"quizp"},"id":"0-quizp"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity quiz Pro ","canonical":"http://localhost:3000/quizp","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"black-header"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"quizp":quizp,},
                masterPage:{"black-header":blackheader,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    