import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function News() {
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=API_KEY')
        .then(response => {
        console.log(response.data.results);
        });
        }, []);
  return (
    <div>
       

    </div>
  )
}

export default News
