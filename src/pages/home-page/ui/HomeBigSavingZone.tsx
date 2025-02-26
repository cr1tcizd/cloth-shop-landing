import ArrowIcon from '/src/app/assets/arrow.svg?react'

export default function HomeBigSavingZone() {
	return (
		<section className='px-[100px] mt-[100px]'>
			<div className='flex gap-[20px] h-[32px] items-center  mb-[70px]'>
				<span className='w-[6px] h-full bg-pink-400 rounded-[10px]' />
				<h1 className='text-[34px]'>Big Saving Zone</h1>
			</div>
			<div className='flex justify-between gap-[20px] flex-wrap'>
				<div className='bg-[url(/src/app/assets/bigSaving-1.jpg)] w-full h-[393px] max-w-[400px] bg-no-repeat bg-cover'>
					<div className='pt-[64px] pl-[20px] text-white w-[180px]'>
						<p className='text-[28px] font-bold leading-[38px]'>
							Hawaiian <br /> Shirts
						</p>
						<p className='text-[14px] mt-[10px] font-semibold'>
							Dress up in summer vibe
						</p>
						<p className='text-[18px] mt-[10px] font-bold'>UPTO 50% OFF</p>
						<ArrowIcon
							className='mt-[30px] ml-[45px] stroke-white'
							height={20}
							width={23}
						/>
						<button
							type='button'
							className='border-[1px] border-white px-[25px] py-[10px] mt-[40px] rounded-[4px] text-[12px] font-medium uppercase'
						>
							SHOP NOW
						</button>
					</div>
				</div>
				<div className='bg-[url(/src/app/assets/bigSaving-2.jpg)] w-full h-[393px] max-w-[400px]'>
					<div className='text-white flex flex-col items-end pr-[25px] pt-[34px]'>
						<button className='bg-[#3C4242] py-[10px] px-[16px] font-bold text-[12px] rounded-[4px]'>
							Limited Stock
						</button>
						<p className='text-[28px] font-bold pt-[20px] leading-[38px]'>
							Printed <br /> T-Shirt
						</p>
						<p className='text-[14px] mt-[15px] font-semibold'>
							New Designs Every Week
						</p>
						<p className='text-[18px] mt-[10px] font-bold'>UPTO 40% OFF</p>
						<ArrowIcon
							className='mt-[27px] mr-[45px] stroke-white'
							height={20}
							width={23}
						/>
						<button
							type='button'
							className='border-[1px] border-white px-[25px] py-[10px] mt-[30px] rounded-[4px] text-[12px] font-medium uppercase'
						>
							SHOP NOW
						</button>
					</div>
				</div>
				<div className='bg-[url(/src/app/assets/bigSaving-3.jpg)] w-full h-[393px] max-w-[400px] flex flex-col items-end'>
					<div className='text-[#3C4242] w-[170px] pt-[64px] mr-[17px]'>
						<p className='text-[28px] font-bold leading-[38px]'>
							Cargo <br /> Joggers
						</p>
						<p className='text-[14px] font-semibold mt-[10px]'>
							Move with style & comfort
						</p>
						<p className='text-[18px] mt-[10px] font-bold'>UPTO 50% OFF</p>
						<ArrowIcon
							className='mt-[27px] ml-[51px] stroke-[#3C4242]'
							height={20}
							width={23}
						/>
						<button
							type='button'
							className='ml-[5px] border-[1px] border-[#3C4242] px-[25px] py-[10px] mt-[30px] rounded-[4px] text-[12px] font-medium uppercase'
						>
							SHOP NOW
						</button>
					</div>
				</div>
				<div className='bg-[url(/src/app/assets/bigSaving-4.jpg)] w-full h-[393px] max-w-[610px] flex flex-col items-end'>
					<div className='text-[#3C4242] w-[140px] pt-[64px] mr-[120px]'>
						<p className='text-[28px] font-bold leading-[38px]'>
							Urban <br /> Shirts
						</p>
						<p className='text-[14px] font-semibold mt-[10px]'>
							Live In Confort
						</p>
						<p className='text-[18px] mt-[10px] font-bold'>UPTO 60% OFF</p>
						<ArrowIcon
							className='mt-[27px] mr-[45px] stroke-[#3C4242] ml-[53px]'
							height={23}
							width={27}
						/>
						<button
							type='button'
							className='ml-[5px] border-[2px] border-[#3C4242] px-[25px] py-[10px] mt-[30px] rounded-[4px] text-[12px] font-medium uppercase'
						>
							SHOP NOW
						</button>
					</div>
				</div>
				<div className='bg-[url(/src/app/assets/bigSaving-5.jpg)] w-full h-[393px] max-w-[610px] flex flex-col items-end'>
					<div className='text-[#3C4242] w-[140px] pt-[64px] mr-[120px]'>
						<p className='text-[28px] font-bold leading-[38px]'>
							Oversized <br /> T-Shirts
						</p>
						<p className='text-[14px] font-semibold mt-[10px]'>
							Street Style Icon
						</p>
						<p className='text-[18px] mt-[10px] font-bold'>FLAT 60% OFF</p>
						<ArrowIcon
							className='mt-[27px] mr-[45px] stroke-[#3C4242] ml-[53px]'
							height={23}
							width={27}
						/>
						<button
							type='button'
							className='ml-[5px] border-[2px] border-[#3C4242] px-[25px] py-[10px] mt-[30px] rounded-[4px] text-[12px] font-medium uppercase'
						>
							SHOP NOW
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
