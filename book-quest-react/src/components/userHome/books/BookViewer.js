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
      document.body.appendChild(scriptTag);
    }, []);
  
    useEffect(()=>{

      if (!loaded) return
      else{
            window.google.books.load() 
            window.google.books.setOnLoadCallback(initialize)
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

// const BookViewer = () => {
//     const ISBN_num = useSelector(state => state.currentBookReducer.currentBook.book.ISBN_number)
//     const canvasRef = useRef()

//      useEffect(() => {
//         console.log(canvasRef)

//         if(!window.google) return;

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


export default BookViewer
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


