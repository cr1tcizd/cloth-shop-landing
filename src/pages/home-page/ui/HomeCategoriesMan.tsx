import ArrowRightIcon from '/src/app/assets/arrowRight.svg?react'

export default function HomeCategoriesMan() {
	return (
		<section className='px-[100px] mt-[100px]'>
			<div className='flex gap-[20px] h-[32px] items-center  mb-[70px]'>
				<span className='w-[6px] h-full bg-pink-400 rounded-[10px]' />
				<h2 className='text-[34px]'>Categories For Men</h2>
			</div>
			<div className='flex flex-wrap justify-between gap-y-[50px]'>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-1.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Shirts</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-2.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Printed T-Shirts</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-3.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Plain T-Shirt</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-4.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Polo T-Shirt</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-5.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Hoodies & Sweetshirt</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-6.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Jeans</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-7.jpg' alt='' />
					<div className='flex items-center justify-between mt-[15px]'>
						<div>
							<b className='text-[18px]'>Activewear</b>
							<p className='text-[13px] text-[#7F7F7F]'>Explore Now!</p>
						</div>
						<ArrowRightIcon />
					</div>
				</div>
				<div className='w-[270px]'>
					<img src='./src/app/assets/men-8.jpg' alt='' />
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
