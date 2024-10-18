import React from 'react'
import Launchpad from '../assets/launchpad.svg'
import BridgeSwapAi from '../assets/bridge-swap-ai.svg'
import EarningSystem from '../assets/earning-system.svg'
import Vault from '../assets/vault.svg'

const EcosystemsUtilities = () => {
  return (
    <div className='px-6 py-10 sm:py-20 w-full'>
        <div className='max-w-[1280px] m-auto w-full'>
            <h1 className='text-[35px] sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[735px] mx-auto text-center'>Block Boost Ecosystems</h1>
            <div className='mt-[30px] grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4 gap-5'>
                <div className='h-full p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={Launchpad} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>Launchpad</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>Decide your tier, stake $BBT, and participate in all the token launches we bring to you in a guaranteed way.</p>
                    </div>
                </div>
                <div className='p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={BridgeSwapAi} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>Bridge & Swap AI</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>By connecting with different blockchains you can swap your tokens to different blockchain networks with few clicks.</p>
                    </div>
                </div>
                <div className='p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={EarningSystem} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>Earning system</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>Earn passive income through various features like Referral rewards , Staking rewards, Vaulting rewards, NFT sells.</p>
                    </div>
                </div>
                <div className='p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]' style={{backdropFilter: 'blur(25.997512817382812px)'}}>
                    <div className='h-full pb-10 p-[18px] border-[1.56px] border-[#38DCC866] rounded-md'>
                        <img src={Vault} alt='launchpad' />
                        <h2 className='py-2.5 text-[#FFFFFF] text-[22px] leading-[26px] font-bold'>Vault</h2>
                        <p className='text-[#798DA3] text-[14px] leading-[18px] font-normal font-space'>You can earn the high yield APY through staking your crypto assets by selecting the various Vaults.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EcosystemsUtilities