export default function HomeNewArrival() {
	return (
		<section className='px-[100px]'>
			<div className='flex gap-[20px] h-[32px] items-center  mb-[70px]'>
				<span className='w-[6px] h-full bg-pink-400 rounded-[10px]' />
				<h1 className='text-[34px]'>New Arrival</h1>
			</div>
			<div className='flex justify-between px-[37px]'>
				<div className='flex flex-col gap-[24px]'>
					<img src='/src/app/assets/arrival-1.jpg' alt='' />
					<b>Knitted Joggers</b>
				</div>
				<div className='flex flex-col gap-[24px]'>
					<img src='/src/app/assets/arrival-2.jpg' alt='' />
					<b>Full Sleeve</b>
				</div>
				<div className='flex flex-col gap-[24px]'>
					<img src='/src/app/assets/arrival-3.jpg' alt='' />
					<b>Active T-Shirts</b>
				</div>
				<div className='flex flex-col gap-[24px]'>
					<img src='/src/app/assets/arrival-4.jpg' alt='' />
					<b>Urban-Shirts</b>
				</div>
			</div>
		</section>
	)
}
