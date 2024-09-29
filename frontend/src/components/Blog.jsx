import React from 'react'

function Blog() {

    const blogs = [
        {
            id: 1,
            category: 'Celebs',
            title: 'How scammers use deepfakes of celebs to steal millions from fans',
            desc: 'Scammers in Australia are using deepfake photos and videos of celebrities to steal from people in increasingly creative ways. Australians have lost up to $8 million to scammers using online investment platform scams this year, according to the Australian Competition and Consumer Commission.',
            to: 'https://www.businessinsider.in/finance/news/how-scammers-use-deepfakes-of-celebs-to-steal-millions-from-fans/articleshow/110627770.cms'
        },
        {
            id: 2,
            category: 'Deepfakes',
            title: "(Deep)Fake it till you make it? Bollywood celebrities won't hear of it",
            desc: 'An increasing number of Bollywood celebrities are turning to the Copyright Act and the Information Technology Act to prevent abuse of their personality rights through generative artificial intelligence (AI), particularly deepfakes, in the absence of specific laws to combat this escalating concern.',
            to: 'https://economictimes.indiatimes.com/news/india/deepfake-it-till-you-make-it-bollywood-celebrities-wont-hear-of-it/articleshow/113157044.cms'
        },
        {
            id: 3,
            category: 'Bollywood',
            title: 'Rashmika Mandanna, deepfakes and us: I find myself constantly questioning the safety of uploading personal information and disclosing my travel location',
            desc: 'Earlier this week, Prime Minister Narendra Modi addressed the dangers of “deepfake” content, emphasising the role of artificial intelligence in spreading fake news and misinformation. This concern comes on the heels of a deepfake AI-generated video featuring Indian actor Rashmika Mandanna',
            to: 'https://indianexpress.com/article/opinion/columns/rashmika-mandanna-deepfake-social-media-9032088/'
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
                                <a href={blog.to} target='__blank' className="text-secondary inline-flex items-center mt-4">Learn More
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