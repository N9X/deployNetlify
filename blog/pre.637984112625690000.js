
        
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/blog","slots":{},"masterPageSlots":{},"tags":{}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.637984112625690000.js'),[])
            })
        }    