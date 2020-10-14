import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from "react-redux";


const BookViewer = () => {
    const ISBN_num = useSelector(state => state.currentBookReducer.currentBook.book.ISBN_number)
    const canvasRef = useRef()

    useEffect(() => {
        console.log(canvasRef)

        //Check if google.books.load is a function
        window.google.books.load()
        
        function initialize() {
            var viewer = new window.google.books.DefaultViewer(canvasRef.current);
            viewer.load('ISBN:'+ISBN_num);
            console.log(viewer)
          }

        window.google.books.setOnLoadCallback(initialize);

       
    }, [])


    return(
        <div>
            <div ref={canvasRef} id="viewerCanvas"></div>
        </div>
    )
}

export default BookViewer