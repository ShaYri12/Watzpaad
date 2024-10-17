import React from 'react'

const Tokenomics = () => {
  return (
    <div className='w-full px-4'>
        {/* Token Details */}
        <div className='w-full mt-20'>
            <div className='text-center text-white w-full max-w-[769px] mx-auto '>
                <h2 className='text-[50px] leading-[57px] font-bold mb-4'>Token Details</h2>
                <p className='text-[18px] leading-[24px] font-light font-space'>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. </p>
            </div>
            <div className=' h-full max-w-[1240px] mx-auto w-full mt-12 flex lg:flex-row flex-col gap-5 items-center'>
                <div className='h-full text-white flex flex-col gap-4 w-full bg-custom-one border border-[#38DCC8] rounded-[22.77px] px-5 sm:px-8 py-6 sm:py-7 max-w-[816px] mx-auto'>
                    <div className='grid grid-cols-2 sm:flex justify-between flex-wrap gap-4'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Token Name</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>Watzpad</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Token Symbol</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>$WZP</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Supply</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>1 billion</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Tax</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>2% Buy/Sell</h4>
                        </div>
                    </div>
                    <div className='sm:mt-4 grid grid-cols-2 sm:flex justify-between gap-4'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Token Type</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>ERC20</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Token Contract Address</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>empty</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[16px] sm:text-[24px] font-bold'>Decimal</h2>
                            <h4 className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-space'>18</h4>
                        </div>
                    </div>
                </div>
                <div className='text-white h-full w-full flex flex-col justify-between gap-[25px] bg-custom-one border border-[#38DCC8] rounded-[22.77px] px-5 sm:px-8 py-6 sm:py-7 max-w-[400px] mx-auto'>
                    <div className='flex flex-col gap-0.5'>
                        <h2 className='text-[16px] leading-[19px] font-bold'>Pre-Sale Details</h2>
                        <h4 className='text-[#FFFFFF70] text-[12px] leading-[17px] font-normal'>The pre-sale is Live.</h4>
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <h2 className='text-[16px] leading-[19px] font-bold'>Current $LHUNT Price</h2>
                        <h4 className='text-[#FFFFFF70] text-[12px] leading-[17px] font-normal'>1 $LHUNT = $0.001</h4>
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <h2 className='text-[16px] leading-[19px] font-bold'>Exchange Listing Price</h2>
                        <h4 className='text-[#FFFFFF70] text-[12px] leading-[17px] font-normal'>1 $LHUNT = $0.005</h4>
                    </div>
                </div>
            </div>
        </div>

        {/* Token Chart */}
        <div className='mt-1 bg-tokenomics-image'>
            <h1 className='pt-10 sm:pt-20 text-[35px] sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[735px] mx-auto text-center'>Tokenomics</h1>

            <div className='py-20'>
                <h2 className='text-[30px] text-center text-white'>Tokenonics Image</h2>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-[#798DA3] font-space text-[20px] sm:text-[30px]'>Total Supply</h2>
                <h1 className='text-[#38DCC8] text-[35px] sm:text-[50px] font-bold'>8066087838</h1>
            </div>
        </div>
    </div>
  )
}

export default Tokenomics