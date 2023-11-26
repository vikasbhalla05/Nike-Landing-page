import React from 'react'
import {footerLogo} from "../assets/images"
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div>
        <div className='flex flex-col items-start justify-center gap-10'>
          <a href='/'>
            <img src={footerLogo} alt='logo' className='w-[200px]'/>
          </a>

          <p className='text-white-400 text-lg max-md:text-sm text-justify sm:max-w-md font-montserrat leading-relaxed'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div className='flex flex-1 gap-4'>
            {socialMedia.map((social) => (
                <div className='bg-white-400 hover:bg-white p-2 rounded-full' key={social.alt}>
                  <img src={social.src} alt={social.alt} className=''/>
                </div>
            ))}
          </div>
        </div>
      </div>

      <hr class="h-px my-10 bg-gray-400 border-0"></hr>

      <div className='flex flex-1 items-start justify-between flex-wrap mt-12 gap-5'>
        {footerLinks.map((section) =>(
          <div className='flex flex-col gap-4'>
            <h2 className='text-white-400 text-2xl font-bold font-palanquin'>{section.title}</h2>
            <ul className=''>
              {section.links.map((link) => (
                <li key={link.name} className='text-white-400 hover:text-white text-lg max-md:text-sm font-montserrat leading-loose'><a href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr class="h-px my-10 bg-gray-400 border-0"></hr>

      <div className='flex flex-1 items-start justify-between gap-4 max-sm:flex-col max-sm:items-center'>
        <div>
          <h4 className='text-lg text-white-400 max-md:text-sm font-montserrat'>&copy; Copyright. All rights reserved.</h4>
        </div>
        <div>
          <p className='text-lg text-white-400 max-md:text-sm font-montserrat hover:text-white'>
            <a href="/">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer