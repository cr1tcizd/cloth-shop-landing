import LinkFacebookIcon from '/src/app/assets/link-1.svg?react'
import LinkInstIcon from '/src/app/assets/link-2.svg?react'
import LinkTwitIcon from '/src/app/assets/link-3.svg?react'
import PlayMarketIcon from '/src/app/assets/playmarket.svg?react'
import AppStoreIcon from '/src/app/assets/appstore.svg?react'

export default function Footer() {
	return (
		<footer className='bg-[#3C4242] pt-[82px] pb-[40px]'>
			<div className='w-[1440px] px-[100px] mx-auto'>
				<div className='flex justify-between px-[75px]'>
					<div className='text-[#F6F6F6] flex flex-col'>
						<b className='text-[28px]'>Need Help</b>
						<div className='flex flex-col gap-[5px] mt-[15px]'>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Contact Us
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Track Order
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Returns & Refunds
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								FAQ's
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Career
							</a>
						</div>
					</div>
					<div className='text-[#F6F6F6] flex flex-col'>
						<b className='text-[28px]'>Company</b>
						<div className='flex flex-col gap-[5px] mt-[15px]'>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								About Us
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								euphoria Blog
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								euphoriastan
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Collaboration
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Media
							</a>
						</div>
					</div>
					<div className='text-[#F6F6F6] flex flex-col'>
						<b className='text-[28px]'>More Info</b>
						<div className='flex flex-col gap-[5px] mt-[15px]'>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Term and Conditions
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Privacy Policy
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Shipping Policy
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Sitemap
							</a>
						</div>
					</div>
					<div className='text-[#F6F6F6] flex flex-col'>
						<b className='text-[28px]'>Location</b>
						<div className='flex flex-col gap-[5px] mt-[15px]'>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								support@euphoria.in
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								Eklingpura Chouraha, Ahmedobad Main Road
							</a>
							<a className='text-[18px] font-light leading-[216%]' href=''>
								(NH 8-Near Mahadev Hotel) Udaipur, India- 313002
							</a>
						</div>
					</div>
				</div>
				<div className='px-[75px] flex justify-between'>
					<div className='self-end flex gap-[10px]'>
						<div className='bg-white w-[37px] h-[37px] rounded-[10px] flex items-center justify-center'>
							<LinkFacebookIcon />
						</div>
						<div className='bg-white w-[37px] h-[37px] rounded-[10px] flex items-center justify-center'>
							<LinkInstIcon />
						</div>
						<div className='bg-white w-[37px] h-[37px] rounded-[10px] flex items-center justify-center'>
							<LinkTwitIcon />
						</div>
						<div className='bg-white w-[37px] h-[37px] rounded-[10px] flex items-center justify-center'>
							<p className='text-[17px] text-[#2A2F2F] font-bold'>in</p>
						</div>
					</div>
					<div className='flex flex-col gap-[19px]'>
						<b className='text-[#F6F6F6] text-[28px] leading-[216%]'>
							Download The App
						</b>
						<div className='flex gap-[21px]'>
							<div className='w-[159px] flex gap-[12px] items-center bg-[#404040] px-[10px] py-[10px] rounded-[15px] text-white'>
								<PlayMarketIcon />
								<div className='flex flex-col'>
									<p className='text-[10px]'>android app on</p>
									<p className='text-[18px]'>Google Play</p>
								</div>
							</div>
							<div className='w-[159px] flex gap-[12px] items-center bg-[#404040] px-[10px] py-[10px] rounded-[15px] text-white'>
								<AppStoreIcon />
								<div className='flex flex-col'>
									<p className='text-[10px]'>Avaible on the</p>
									<p className='text-[18px]'>App Store</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='text-white text-[18px] leading-[200%] font-bold text-center mt-[40px]'>
					Copyright © 2023 Euphoria Folks Pvt Ltd.All rights reserved.
				</div>
			</div>
		</footer>
	)
}
