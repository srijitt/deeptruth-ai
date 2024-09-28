import React from 'react'

function Footer() {
  return (
    <footer className="text-white body-font">
  <div className="container px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full">
    <path d="M32 10c12.3 0 22.3 10 22.3 22S44.3 54 32 54s-22.3-10-22.3-22S19.7 10 32 10zm0-2C19.2 8 .8 26 .8 32S19.2 56 32 56s31.2-10.8 31.2-24S44.8 8 32 8z" fill="#FFF"/>
    <circle cx="32" cy="32" r="10" fill="#4B0082"/>
</svg>
      <span className="ml-3 text-xl font-pbold text-white">deeptruth.ai</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200  sm:py-2 sm:mt-0 mt-4">© 2024 FakeFinders</p>
  </div>
</footer>
  )
}

export default Footer