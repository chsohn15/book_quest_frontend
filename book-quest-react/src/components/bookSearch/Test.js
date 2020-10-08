import React from 'react'
import { useEffect } from 'react'

const Test = () => {
    
    useEffect(() => {
        const script = document.createElement('script')
        const script2 = document.createElement('script')

        script.src = "https://www.google.com/books/jsapi.js" 
        script.type = "text/javascript"
        script.async = true 
        document.body.appendChild(script)
        document.body.appendChild(script2)



        function initialize() {
            var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
            viewer.load('ISBN:0738531367');
          }
        
        function LoadGoogle(){
            if(typeof google != 'undefined' && google && google.load){
                google.books.load();  
                google.books.setOnLoadCallback(initialize);
            }
            else
            {
                setTimeout(LoadGoogle, 30);
            }
        }

        script2.value = LoadGoogle()


        return() => {
            document.body.removeChild(script)
            document.body.appendChild(script2)
        }
        }, [])

    return(
        <div>
            <div id="viewerCanvas" style={{width: "600px; height: 500px"}}></div>
        </div>
    )
}

export default Test


