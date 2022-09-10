
        
        
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/blog","slots":{},"masterPageSlots":{},"tags":{}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637984110576560000.js'),[])
            })
        }    