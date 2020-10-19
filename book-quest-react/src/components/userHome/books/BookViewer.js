import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useSelector } from "react-redux";


const BookViewer = () => {
    const ISBN_num = useSelector(state => state.currentBookReducer.currentBook.book.ISBN_number)
    const canvasRef = useRef()

    const [loaded, setLoaded] = useState(false);
    //const [pageReloaded, setPageReloaded] = useState(false);

  
    useEffect(()=> {
      const scriptTag = document.createElement('script')
      scriptTag.src= 'https://www.google.com/books/jsapi.js'
      scriptTag.addEventListener('load', ()=>setLoaded(true))
      scriptTag.id = "google-script"
      document.body.appendChild(scriptTag);

      
      return(
        () => {
        document.getElementById('google-script').remove()
        }
      )
    }, []);
  
    useEffect(()=>{
      
      if (!loaded) return
        // { setTimeout( () => {window.location.reload(true);}, 2000 )}
      else{
        console.log("IN ELSE")
        window.google.books.load() 
          
        console.log(window.google.books.setOnLoadCallback)
        if(window.google.books.setOnLoadCallback() === undefined){
          
          //setTimeout( () => {window.location.reload()}, 2000)
          //return false;
        }

        window.google.books.setOnLoadCallback(() => {
          console.log("LOADED")
          var viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer
          viewer.load('ISBN:'+ ISBN_num, alertNotFound, alertInitialized);
        })
    
    
        function alertNotFound() {
          alert("This Book Was Not Found on Google Books!");
        }

        function alertInitialized() {
          alert("book successfully loaded and initialized!");
        }

        function initialize() {
            var viewer = new window.google.books.DefaultViewer(canvasRef.current);
            viewer.load('ISBN:'+ ISBN_num);
            
        }
          
    }}, [loaded])


    return (
      <div>
        {loaded ? 
            <div>
                <div ref={canvasRef} id="viewerCanvas"></div>
            </div> :
        'Script not loaded'}
      </div>
    );
}


export default BookViewer

// const BookViewer = () => {
//     const ISBN_num = useSelector(state => state.currentBookReducer.currentBook.book.ISBN_number)
//     const canvasRef = useRef()

//      useEffect(() => {
//         console.log(canvasRef)

//         //if(!window.google) return;

//         window.google.books.load() 
//         window.google.books.setOnLoadCallback(initialize)
       

//         function initialize() {
//             var viewer = new window.google.books.DefaultViewer(canvasRef.current);
//             viewer.load('ISBN:'+ISBN_num);
//             console.log(viewer)
//           }
    
// })

//     return(
//         <div>
//             <div ref={canvasRef} id="viewerCanvas"></div>
//         </div>
//     )
// }





    // const loadBook = () => {
    //         window.google.books.load() 
    //         window.google.books.setOnLoadCallback(initialize)

    //         function initialize() {
    //             var viewer = new window.google.books.DefaultViewer(canvasRef.current);
    //             viewer.load('ISBN:'+ISBN_num);
    //             console.log(viewer)
    // }}
    // useEffect(() => {
    //     console.log(canvasRef)

    //     //Check if google.books.load is a function

    //     // if (window.google.books){
    //     // window.google.books.load() 
    //     // window.google.books.setOnLoadCallback(initialize)
    //     // }

    //     if(!window.google) return;

    //     window.google.books.load() 
    //     window.google.books.setOnLoadCallback(initialize)
        


    //     // setTimeout(() => {
    //     //     window.google.books.load() }, 2000) 

    //     //     setTimeout(() => {
    //     //         window.google.books.setOnLoadCallback(initialize) }, 4000) 
       

        
    //     function initialize() {
    //         var viewer = new window.google.books.DefaultViewer(canvasRef.current);
    //         viewer.load('ISBN:'+ISBN_num);
    //         console.log(viewer)
    //       }


       
    // }, [])

    // Ternary - if state is false (not loading), return canvas
    //If loading is true, return gif
    // return(
    //     <div>
    //         <div ref={canvasRef} id="viewerCanvas"></div>
    //     </div>
    // )


