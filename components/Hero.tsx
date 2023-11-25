import React from 'react'


export default function Hero() {
    return (
        <div className="relative bg-black h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white ">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-primary">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-white sm:text-6xl">
            TEXT HERE
          </h1>
          <p className="mt-6 text-lg lg:text-3xl text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
            veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center ">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Inloggen
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}
