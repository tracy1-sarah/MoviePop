import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function MovieTiles({ title, fetchURL, tilesID }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })

    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + tilesID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + tilesID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
                <div id={'slider' + tilesID} className='w-full left-0 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movies key={id} item={item}/>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            </div>
        </>
    )
}

export default MovieTiles