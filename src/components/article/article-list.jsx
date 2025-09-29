import React from 'react'
import { ArticleCard } from './article-card'

export const ArticleList = () => {
  return (
    <section className='margin' >
        <div className='grid grid-cols-4 gap-7' >
            {/* card */}
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        </div>
    </section>
)
}
