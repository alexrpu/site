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
      <ol class="relative border-l border-accent  " >                  
      <li ref={ref} class={inView ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-secondary border border-primary rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-accent focus:text-blue-700      ">Learn more <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>
      </li>
      <li ref={ref2} class={inView2 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      <li ref={ref3} class={inView3 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
      <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      <li ref={ref4} class={inView4 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

      </li>
      <li ref={ref5} class={inView5 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      <li ref={ref6} class={inView6 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      <li ref={ref7} class={inView7 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      <li ref={ref8} class={inView8 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      <li ref={ref9} class={inView9 ? "mb-10 ml-4 motion-safe:animate-fadeIn opacity-0" : "mb-10 ml-4 opacity-0"}>
          <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-background  "></div>
          <time class="mb-1 text-sm font-normal leading-none text-primary ">February 2022</time>
          <h3 class="text-lg font-semibold text-text ">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-primary ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      </li>
      </ol>
      </div>
    )
}

export default Portfolio