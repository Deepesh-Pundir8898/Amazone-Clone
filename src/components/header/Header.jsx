import React, { useState } from 'react'
import {logo} from "../../assets/index"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { allItems } from '../../constants';
import { ShoppingCart } from '@mui/icons-material';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    const [showAll , setShowAll] = useState(false)


  return (
    <div>
        <div className='w-full bg-amazone_blue text-white px-4 py-3 flex items-center gap-4'>
        <div className='headerHover'>
            <img  className='w-24 mt-2' src={logo} alt="logo" />
        </div>
        <div className='headerHover'>
            <LocationOnIcon />
            <p className='text-sm text-lightText font-light flex flex-col p-0.5'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>oman</span></p>  
        </div>

        <div className='h-10 rounded-md flex flex-grow relative'>
            <span onClick={()=>setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300  text-sm text-amazone_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span>
                <ArrowDropDownIcon />
            </span>
            {
                showAll && (
                    <div>
                        <ul className="absolute w-56  h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazone_blue text-black p-2 flex-col gap-1 z-50">
                            {/* <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazone_blue cursor-pointer duration-200'>All Deparments</li> */}
                            {
                                allItems.map((item)=>{
                                    return <li key={item.id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazone_blue cursor-pointer duration-200 mt-1.5'>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>
                )
                
            }
            <input className='h-full text-base text-amazone_blue flex-grow outline-none border-none px-2' type="text" />
            <span className='w-12 h-full flex items-center  justify-center bg-amazone_yellow hover:bg-[#f3a847] duration-300 text-amazone_blue cursor-pointer rounded-tr-md rounded-br-md'>

                <SearchIcon />
            </span>
        </div>

        <div className='flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-lightText font-light'>Hello, sign in</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>Accounts & Lists 
            <span>
                <ArrowDropDownIcon />
            </span>
            </p>
        </div>
        <div className='flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-lightText font-light'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>
        <div className='flex  items-start justify-center headerHover relative'>
            <ShoppingCart />
            <p className='text-xs font-semibold mt-3 text-whiteText'>cart
                <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazone_blue rounded-full flex justify-center items-center'>0</span>
            </p>
        </div>
        </div>
        <HeaderBottom />
    </div>
  )
}

export default Header
