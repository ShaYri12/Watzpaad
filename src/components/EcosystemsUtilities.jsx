import React from 'react'
import Launchpad from '../assets/launchpad.svg'
import BridgeSwapAi from '../assets/bridge-swap-ai.svg'
import EarningSystem from '../assets/earning-system.svg'
import Vault from '../assets/vault.svg'
import { useTranslation } from "react-i18next";

const EcosystemsUtilities = () => {
    const { t } = useTranslation("homepage");
  return (
    <div className='px-6 py-10 sm:py-20 w-full'>
        <div className='max-w-[1280px] m-auto w-full'>
            <h1 className='text-[35px] sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[735px] mx-auto text-center'>{t("ecosystems-utilities.title")}</h1>
            <div className='mt-[30px] grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4 gap-5'>
                <div className='h-full p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={Launchpad} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>{t("ecosystems-utilities.box-one-title")} </h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>{t("ecosystems-utilities.box-one-description")}</p>
                    </div>
                </div>
                <div className='p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={BridgeSwapAi} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>{t("ecosystems-utilities.box-two-title")}</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>{t("ecosystems-utilities.box-two-description")}</p>
                    </div>
                </div>
                <div className='p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={EarningSystem} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>{t("ecosystems-utilities.box-three-title")}</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>{t("ecosystems-utilities.box-three-description")}</p>
                    </div>
                </div>
                <div className='p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={Vault} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>{t("ecosystems-utilities.box-four-title")}</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>{t("ecosystems-utilities.box-four-description")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EcosystemsUtilities