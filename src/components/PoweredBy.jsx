import React from 'react'
import PoweredByOne from '../assets/powered-one.svg'
import PoweredByTwo from '../assets/PoweredByTwo.svg'
import PoweredByThree from '../assets/PoweredByThree.svg'
import PoweredByFour from '../assets/PoweredByFour.svg'
import PoweredByFive from '../assets/PoweredByFive.svg'
import PoweredBySix from '../assets/PoweredBySix.svg'
import PoweredBySeven from '../assets/PoweredBySeven.svg'
import PoweredByEight from '../assets/PoweredByEight.svg'
import PoweredByNine from '../assets/PoweredByNine.svg'
import PoweredByTen from '../assets/PoweredByTen.svg'
import PoweredBy11 from '../assets/PoweredBy11.svg'
import PoweredBy12 from '../assets/PoweredBy12.svg'
import { useTranslation } from "react-i18next";

const PoweredBy = () => {
    const { t } = useTranslation("homepage");
  return (
    <div className='pb-[40px] pt-[80px] px-6 w-full'>
        <div className='w-full max-w-[1240px] mx-auto'>
            <h1 className='text-white text-[25px] leading-[28px] font-bold text-center'> {t("powered-by.title")}</h1>
            <div className='mt-8 sm:mt-[70px] grid grid-cols-4 md:grid-cols-6 gap-3.5 md:gap-5 '>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByOne} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByTwo} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByThree} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByFour} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByFive} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredBySix} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredBySeven} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByEight} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByNine} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredByTen} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredBy11} alt='powered' />
                </div>
                <div className='bg-[#1F2835] border rounded-[8.56px]'>
                    <img src={PoweredBy12} alt='powered' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PoweredBy