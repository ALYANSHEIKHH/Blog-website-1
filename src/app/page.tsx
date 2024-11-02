"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';





const blogs = [
  {
      title: "Understanding JavaScript Closures",
      description: "A deep dive into closures and how they work in JavaScript.",
      image: "/P23.png",
      link: "/content/understanding-javascript-closures", // Updated link
  },
  {
      title: "Mastering CSS Flexbox",
      description: "Learn Flexbox essentials to create responsive layouts with ease.",
      image: "/P7.png",
      link: "/content/mastering-css-flexbox", // Updated link
  },
  {
      title: "Next.js Optimization Tips",
      description: "Boost your Next.js performance with these optimization tips.",
      image: "/P8.png",
      link: "/content/next-js-optimization-tips", // Updated link
  },
];


const Page: React.FC = () => {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image
  src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
  alt="tailwind css components"
  width={500} // Adjust based on your design
  height={500} // Adjust based on your design
  className="w-full h-full max-w-md mx-auto"
/>

        </div>
      </section>
      <section className=" from-blue-50 to-blue-100 py-16">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-extrabold">Our Pricing Plans</h2>
      <p className="text-gray-700 mt-3">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center gap-6">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm p-6 bg-white rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800">Basic</h3>
          <p className="mt-2 text-lg font-bold text-gray-800  text-primary">$19<span className="text-sm text-black font-normal ">/month</span></p>
          <ul className="mt-6 space-y-3 text-gray-600 text-sm">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="mt-8 w-full py-3 px-5 bg-gradient-to-r from-primary to-teal-500 text-white font-semibold rounded-full shadow-lg transition duration-300 hover:from-teal-500 hover:to-primary hover:shadow-md focus:outline-none">
            Choose Plan
          </button>
        </div>
      </div>

      {/* Standard Plan (Most Popular) */}
      <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm p-6 bg-blue-50 border-4 border-primary rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-center relative">
          <span className="absolute top-0 -mt-4 px-4 py-1 bg-primary text-white bg-teal-500 text-xs font-semibold rounded-full">Most Popular</span>
          <h3 className="text-3xl font-semibold text-gray-800 mt-4">Standard</h3>
          <p className="mt-2 text-lg font-bold text-black text-primary">$49<span className="text-sm font-normal text-gray-600">/month</span></p>
          <ul className="mt-6 space-y-3 text-gray-600 text-sm">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="mt-8 w-full py-3 px-5 bg-gradient-to-r from-teal-500 to-primary text-white font-semibold rounded-full shadow-lg transition duration-300 hover:from-primary hover:to-teal-500 hover:shadow-md focus:outline-none">
            Choose Plan
          </button>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm p-6 bg-white rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800">Premium</h3>
          <p className="mt-2 text-lg font-bold  text-gray-500 text-primary">$99<span className="text-sm font-normal text-gray-600">/month</span></p>
          <ul className="mt-6 space-y-3 text-gray-600 text-sm">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="mt-8 w-full py-3 px-5 bg-gradient-to-r from-primary to-teal-500 text-white font-semibold rounded-full shadow-lg transition duration-300 hover:from-teal-500 hover:to-primary hover:shadow-md focus:outline-none">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<section className=" from-gray-900 via-gray-800 to-gray-900 py-20 px-6 text-white">
            <div className="container mx-auto text-center space-y-12">
                <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500 animate-pulse">
                    Why Choose Us
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-300">
                    Discover the unique features that set us apart and bring the best to our users.
                </p>
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Feature Item */}
                    <div className="group transform transition-all duration-500 hover:-translate-y-4 bg-gradient-to-tr from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-blue-400 to-green-400 mix-blend-screen"></div>
                        <div className="text-blue-400 mb-4">
                            <i className="fas fa-rocket text-5xl transition-transform duration-500 group-hover:text-green-400 group-hover:scale-110"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-100">Blazing Fast</h3>
                        <p className="text-gray-300">
                            Experience incredible load times and optimized performance at every click.
                        </p>
                    </div>
                    {/* Feature Item */}
                    <div className="group transform transition-all duration-500 hover:-translate-y-4 bg-gradient-to-tr from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-blue-400 to-green-400 mix-blend-screen"></div>
                        <div className="text-blue-400 mb-4">
                            <i className="fas fa-shield-alt text-5xl transition-transform duration-500 group-hover:text-green-400 group-hover:scale-110"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-100">Top-notch Security</h3>
                        <p className="text-gray-300">
                            Rest easy with best-in-class security features safeguarding your data.
                        </p>
                    </div>
                    {/* Feature Item */}
                    <div className="group transform transition-all duration-500 hover:-translate-y-4 bg-gradient-to-tr from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-blue-400 to-green-400 mix-blend-screen"></div>
                        <div className="text-blue-400 mb-4">
                            <i className="fas fa-cogs text-5xl transition-transform duration-500 group-hover:text-green-400 group-hover:scale-110"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-100">Flexible Customization</h3>
                        <p className="text-gray-300">
                            Tailor every feature to suit your needs with highly adaptable settings.
                        </p>
                    </div>
                </div>
            </div>
        </section>

       

        <section className="py-20 px-6 text-white">
    <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Top Blogs
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
            {blogs.map((blog, index) => (
                <Link href={blog.link} key={index}>
                    <div className="relative group block overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 bg-gray-800">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={400} // Adjust based on your design
                            height={256} // Adjust based on your design
                            className="w-full h-64 object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-2">
                            <h3 className="text-2xl font-semibold text-white">{blog.title}</h3>
                            <p className="text-gray-300">{blog.description}</p>
                            {/* <span className="inline-block mt-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Read More →
                            </span> */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
</section>


    </main>
  )}




export default Page;