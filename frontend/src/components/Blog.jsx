import React from 'react'

function Blog() {

    const blogs = [
        {
            id: 1,
            category: 'CATEGORY',
            title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
            desc: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        },
        {
            id: 2,
            category: 'CATEGORY',
            title: 'Meditation bushwick direct trade taxidermy shaman',
            desc: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        },
        {
            id: 3,
            category: 'CATEGORY',
            title: 'Woke master cleanse drinking vinegar salvia',
            desc: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        }
    ]

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-secondary">

                    {blogs.map(blog => (
                        <div className="py-8 md:mx-14 flex flex-wrap md:flex-nowrap bg-primary bg-opacity-70 mb-6 p-4 rounded-lg">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-secondary">CATEGORY</span>
                                <span className="text-sm text-white">{blog.category}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-white title-font mb-2">{blog.title}</h2>
                                <p className="leading-relaxed text-white">{blog.desc}</p>
                                <a className="text-secondary inline-flex items-center mt-4">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Blog