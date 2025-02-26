export default function HomeDeals() {
	return (
		<section className='px-[100px] flex gap-[30px] mb-[100px]'>
			<div className='w-full bg-amber-100 pl-[28px] pt-[68px] bg-[url(/src/app/assets/deals-1.jpg)] bg-no-repeat bg-cover h-[355px]'>
				<p className='text-[18px] text-white font-extrabold'>Low Price</p>
				<p className='text-[34px] text-white mt-[24px] font-extrabold'>
					High Coziness
				</p>
				<p className='text-[16px] text-white mt-[9px] font-medium'>
					UPTO 50% OFF
				</p>
				<button className='text-[20px] underline text-white mt-[41px] font-extrabold'>
					Explore Items
				</button>
			</div>
			<div className='w-full bg-amber-100 pl-[28px] pt-[68px] bg-[url(/src/app/assets/deals-2.jpg)] bg-no-repeat bg-cover h-[355px] bg-size'>
				<p className='text-[18px] text-white font-extrabold'>
					Beyoung Presents
				</p>
				<p className='text-[34px] text-white mt-[24px] font-extrabold leading-[45px]'>
					Breezy Summer <br /> Style
				</p>
				<p className='text-[16px] text-white mt-[9px] font-medium'>
					UPTO 50% OFF
				</p>
				<button className='text-[20px] underline text-white mt-[41px] font-extrabold'>
					Explore Items
				</button>
			</div>
		</section>
	)
}
