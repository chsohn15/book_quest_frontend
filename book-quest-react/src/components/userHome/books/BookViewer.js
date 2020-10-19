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

  
      // return(
      //   () => {
      //   document.getElementById('google-script').remove()
      //   }
      // )
    }, []);
  
    useEffect(()=>{
      
      if (!loaded) return
        // { setTimeout( () => {window.location.reload(true);}, 2000 )}
      else{

        if(window.viewer){
          //debugger
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          
          viewer.load('ISBN:'+ ISBN_num, alertNotFound);

          function alertNotFound() {
            alert("could not embed the book!");
          }
          
        }
        else{
          window.google.books.load() 
          
        console.log(window.google.books.setOnLoadCallback)


        window.google.books.setOnLoadCallback(() => {
          console.log("LOADED")
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer
          viewer.load('ISBN:'+ ISBN_num, alertNotFound);

          function alertNotFound() {
            //Change state
            alert("could not embed the book!");
          }
        })


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

