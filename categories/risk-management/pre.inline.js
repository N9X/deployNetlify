
        import headerNew from "/assets/headernew.component.637988782772750000.js";import categoryarticle from "/assets/categoryarticle.component.637988782772750000.js";
        import blackheader from "/assets/black_header.layout.637988782772750000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/categories/risk-management","slots":{"default":[{"name":"categoryarticle","data":{"componentName":"categoryarticle","pagination":true,"dynamicSourcePath":"filter-collections/7d893e9430f71ebc1dd094117ca075a5"},"id":"0-categoryarticle"}]},"masterPageSlots":{"header":[{"name":"headerNew","data":{"componentName":"headerNew"},"id":"0-headerNew"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Risk Management Category Articles","canonical":"http://localhost:3000/categories/risk-management","metaTag":{"name":{"description":"Risk Management Articles"}}},"layoutName":"black-header"}; 
            registerTezPage({
                components:{"headerNew":headerNew,"categoryarticle":categoryarticle,},
                masterPage:{"black-header":blackheader,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),["assets/plugin-vue_export-helper.637988782772750000.js","assets/footer.component.637988782772750000.js"])
            })
        }    