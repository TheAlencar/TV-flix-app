import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export const MovieDetail = () => {
    const { id } = useSearchParams();

    return (
        <div>
            <Navbar />
            MovieDetail : {id}
            <Footer />
        </div>
    )
}

