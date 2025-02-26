export default function HomeTopBrandsDeal() {
	return (
		<section className='px-[100px] mt-[100px] mb-[100px]'>
			<div className='bg-[#3C4242] flex flex-col items-center text-white rounded-[12px] pt-[44px] pb-[60px] px-[123px]'>
				<h2 className=' text-[50px] font-extrabold'>Top Brands Deal</h2>
				<p className='text-[22px] mt-[25px]'>
					Up to <span className='text-yellow-300 font-medium'>60%</span> off on
					brands
				</p>
				<div className='flex justify-between mt-[67px] w-full'>
					<img
						className='rounded-[8px]'
						src='/src/app/assets/brand-1.jpg'
						alt=''
					/>
					<img
						className='rounded-[8px]'
						src='/src/app/assets/brand-2.jpg'
						alt=''
					/>
					<img
						className='rounded-[8px]'
						src='/src/app/assets/brand-3.jpg'
						alt=''
					/>
					<img
						className='rounded-[8px]'
						src='/src/app/assets/brand-4.jpg'
						alt=''
					/>
					<img
						className='rounded-[8px]'
						src='/src/app/assets/brand-5.jpg'
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}
