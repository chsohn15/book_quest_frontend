import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from "react-redux";


const BookViewer = () => {
    const ISBN_num = useSelector(state => state.currentBookReducer.currentBook.book.ISBN_number)
    const canvasRef = useRef()

    //Make state of loading as true
    //When component is mounted, set state of loading to false

    useEffect(() => {
        console.log(canvasRef)

        //Check if google.books.load is a function

        // if (window.google.books){
        // window.google.books.load() 
        // window.google.books.setOnLoadCallback(initialize)
        // }

        window.google.books.load() 
        window.google.books.setOnLoadCallback(initialize)


        // setTimeout(() => {
        //     window.google.books.load() }, 2000) 

        //     setTimeout(() => {
        //         window.google.books.setOnLoadCallback(initialize) }, 4000) 
       

        
        function initialize() {
            var viewer = new window.google.books.DefaultViewer(canvasRef.current);
            viewer.load('ISBN:'+ISBN_num);
            console.log(viewer)
          }


       
    }, [])

    // Ternary - if state is false (not loading), return canvas
    //If loading is true, return gif
    return(
        <div>
            <div ref={canvasRef} id="viewerCanvas"></div>
        </div>
    )
}

export default BookViewer