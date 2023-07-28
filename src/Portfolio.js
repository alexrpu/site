import React, {} from 'react'
import { useInView } from 'react-intersection-observer';

function Portfolio() {
  const [ ref, inView ] = useInView();
  const [ ref2, inView2 ] = useInView()
  const [ ref3, inView3 ] = useInView()
  const [ ref4, inView4 ] = useInView()
  const [ ref5, inView5 ] = useInView()
  const [ ref6, inView6 ] = useInView()
  const [ ref7, inView7 ] = useInView()
  const [ ref8, inView8 ] = useInView()
  const [ ref9, inView9 ] = useInView()

    return (
      <div class="px-4">
      <ol class="relative border-l border-background dark:border-accent " >                  
      <li ref={ref} class={inView ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">February 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-accent dark:text-primary">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-text border border-background rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-background focus:text-blue-700 dark:bg-gray-800 dark:text-primary dark:border-gray-600 dark:hover:text-text dark:hover:bg-accent dark:focus:ring-accent">Learn more <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>
      </li>
      <li ref={ref2} class={inView2 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">March 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">Marketing UI design in Figma</h3>
          <p class="text-base font-normal text-accent dark:text-primary">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
      </li>
      <li ref={ref3} class={inView3 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">April 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-accent dark:text-primary">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </li>
      <li ref={ref4} class={inView4 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">February 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-accent dark:text-primary">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-text border border-background rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-background focus:text-blue-700 dark:bg-gray-800 dark:text-primary dark:border-gray-600 dark:hover:text-text dark:hover:bg-accent dark:focus:ring-accent">Learn more <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>
      </li>
      <li ref={ref5} class={inView5 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">March 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">Marketing UI design in Figma</h3>
          <p class="text-base font-normal text-accent dark:text-primary">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
      </li>
      <li ref={ref6} class={inView6 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">April 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-accent dark:text-primary">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </li>
      <li ref={ref7} class={inView7 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">February 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-accent dark:text-primary">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-text border border-background rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-background focus:text-blue-700 dark:bg-gray-800 dark:text-primary dark:border-gray-600 dark:hover:text-text dark:hover:bg-accent dark:focus:ring-accent">Learn more <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>
      </li>
      <li ref={ref8} class={inView8 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">March 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">Marketing UI design in Figma</h3>
          <p class="text-base font-normal text-accent dark:text-primary">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
      </li>
      <li ref={ref9} class={inView9 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-background rounded-full mt-1.5 -left-1.5 border border-text dark:border-background dark:bg-accent"></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary dark:text-accent">April 2022</time>
          <h3 class="text-lg font-semibold text-background dark:text-text">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-accent dark:text-primary">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </li>
      </ol>
      </div>
    )
}

export default Portfolio