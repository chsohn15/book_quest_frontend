import React from 'react'
import { useEffect } from 'react'
// const google = window.google;

const Test = () => {
    
    useEffect(() => {

        // <script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script>
        // <script type="text/javascript">
        //   google.books.load();
        const script1 = document.createElement('script')
        script1.type = "text/javascript"
        script1.async = true 
        script1.src ="https://www.google.com/books/jsapi.js"

        // const script2 = document.createElement('script')
        // script2.type = "text/javascript"
        // script2.async = true 

        //  script2.innerHTML = `
        // google.books.load();

        // function initialize() {
        //     var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        //     viewer.load('ISBN:0738531367');
        //   }

        //   google.books.setOnLoadCallback(initialize)`

          document.body.appendChild(script1)
        //   document.body.appendChild(script2)
        debugger
        return() => {
            document.body.removeChild(script1)
            // document.body.removeChild(script2)
        }
        }, [])
        
    //     function LoadGoogle(){
    //         if(typeof google != 'undefined' && google && google.load){
    //             google.books.load();  
    //             google.books.setOnLoadCallback(initialize);
    //         }
    //         else
    //         {
    //             setTimeout(LoadGoogle, 30);
    //         }
    //     }

    //     script2.value = LoadGoogle()




    // google.books.load()
    // function initialize() {
    //     var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    //     viewer.load('ISBN:0738531367');
    //   }

    //   google.books.setOnLoadCallback(initialize)

    return(
        <div>
            <div id="viewerCanvas" style={{width: "600px; height: 500px"}}></div>
        </div>
    )
}

export default Test


