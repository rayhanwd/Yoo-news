import React from 'react'

const News = () => {
    return (

        <div class="overflow-hidden">
            <a href="#" class="w-full block h-full">
                <img alt="blog photo" src="https://daily-news.gbjsolution.com/content/images/2015/09/snack.jpg" class="max-h-40 w-full object-cover" />
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                        Article
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Supercharged !
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-4">
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Car
                        </div>
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Money
                        </div>
                    </div>
                </div>
            </a>
        </div>

    )
}

export default News
