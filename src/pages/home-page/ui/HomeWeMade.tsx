export default function HomeWeMade() {
	return (
		<section className='px-[100px] mt-[100px] flex'>
			<div className='bg-[url(/src/app/assets/weMade.jpg)] w-full max-w-[614px] h-[639px] bg-cover text-white pt-[183px] px-[74px]'>
				<b className='text-[34px]'>
					WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
				</b>
				<p className='text-[20px] mt-[30px] font-light pr-[50px]'>
					In our journey to improve everyday fashion, euphoria presents EVERYDAY
					wear range - Comfortable & Affordable fashion 24/7
				</p>
				<button className='mt-[50px] bg-white px-[44px] py-[12px] text-[#3C4242] rounded-[8px]'>
					Shop Now
				</button>
			</div>
			<div className='bg-[url(/src/app/assets/weMade-2.jpg)] w-full h-[639px] bg-cover'></div>
		</section>
	)
}
