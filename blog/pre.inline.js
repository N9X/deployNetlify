
        
        
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/blog","slots":{},"masterPageSlots":{},"tags":{}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637988782772750000.js'),[])
            })
        }    