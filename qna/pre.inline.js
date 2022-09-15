
        import headerblack from "/assets/headerblack.component.637988782772750000.js";import qna from "/assets/qna.component.637988782772750000.js";
        import customlayout from "/assets/custom_layout.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/qna","slots":{"default":[{"name":"qna","data":{"componentName":"qna"},"id":"0-qna"}]},"masterPageSlots":{"header":[{"name":"headerblack","data":{"componentName":"headerblack"},"id":"0-headerblack"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Finsanity","canonical":"http://localhost:3000/qna","metaTag":{"name":{"description":"Finsanity"}}},"layoutName":"custom-layout"}; 
            registerTezPage({
                components:{"headerblack":headerblack,"qna":qna,},
                masterPage:{"custom-layout":customlayout,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    