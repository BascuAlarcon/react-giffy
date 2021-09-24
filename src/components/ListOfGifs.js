import React from 'react'
import Gif from './Gif'

export default function ListOfGifs ({gifs}) {
    return gifs.map(singleGif => 
        <Gif
            key = { singleGif.id }
            id = { singleGif.id } 
            title = { singleGif.title } 
            url = { singleGif.url }  
        />) 
}