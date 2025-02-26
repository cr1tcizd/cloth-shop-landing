import ArrowRightIcon from '/src/app/assets/arrowRight.svg?react'

export default function HomeCategoriesWomen() {
	return (
		<section className='px-[100px] mt-[100px]'>
			<div className='flex gap-[20px] h-[32px] items-center  mb-[70px]'>
				<span className='w-[6px] h-full bg-pink-400 rounded-[10px]' />
				<h1 className='text-[34px]'>Categories For Women</h1>
			</div>
			<div className='flex flex-wrap justify-between gap-y-[50px]'>
				<div className='w-[270px]'>
					<img src='/src/app/assets/women-1.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Hoodies & Sweetshirt</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='/src/app/assets/women-2.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Coats & Parkas</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='/src/app/assets/women-3.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Tees & T-Shirt</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='/src/app/assets/women-4.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Boxers</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
			</div>
		</section>
	)
}
