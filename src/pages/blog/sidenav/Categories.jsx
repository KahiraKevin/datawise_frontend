import React from 'react'
import _ from 'lodash'

const Categories = ({blogs, onCategorySelect}) => {
    const uniqueCategories = Array.from(new Set(blogs.map((blog) => blog.blog_category.title)))

    const randomCategories = _.sampleSize(uniqueCategories, 10)

    return (
        <div className='p-4 bg-n-7 my-5 rounded-lg'>
                <h2 className='text-n-14 mb-4 font-bold'>Categories</h2>
                <ul className='space-y-4'>
                    {randomCategories.map((category) => (
                        <li key={category} className='text-n-14 flex items-center cursor-pointer' onClick={() => onCategorySelect(category)}>
                            <svg class="w-6 h-6 text-n-13 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                            </svg>

                            {category}
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Categories