import React from 'react'
import arrowLeft from "../assets/images/arrow-left.png"
import moreOptions from "../assets/images/more-options.png"
import close from "../assets/images/close.png"
const Navbar = () => {
    return (
        <div className='navbar-background flex items-center'>
            <div className='grid grid-cols-8 mx-4 gap-4'>
                <div>
                    <img src={arrowLeft} alt="arrow to return to main menu" className="icons" />
                </div>
                <input placeholder='Search.... ' className='col-span-5 navbar-search-bar ml-2' />
                <div>
                    <img src={close} alt="clean search bar" className="icons ml-2" />
                </div>
                <div>
                    <img src={moreOptions} alt="more options" className="icons ml-4" />
                </div>
            </div>
        </div>
    )
}

export { Navbar } 