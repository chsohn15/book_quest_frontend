import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'


const BookViewer = () => {
    
    const canvasRef = useRef()

    useEffect(() => {
        console.log(canvasRef)
        window.google.books.load()
        
        function initialize() {
            var viewer = new window.google.books.DefaultViewer(canvasRef.current);
            viewer.load('ISBN:9781859846667');
            console.log(viewer)
          }

        window.google.books.setOnLoadCallback(initialize);

       
    }, [])


    return(
        <div>
            <div ref={canvasRef} id="viewerCanvas" style={{width: "600px; height: 500px"}}></div>
        </div>
    )
}

export default BookViewer