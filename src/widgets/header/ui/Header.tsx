import SearchIcon from '@mui/icons-material/Search'

import HeartIcon from './../../../app/assets/heart.svg?react'
import UserIcon from './../../../app/assets/user.svg?react'
import CartIcon from './../../../app/assets/shopping cart.svg?react'

import Logo from './../../../app/assets/Logo.svg?react'

export default function Header() {
	return (
		<header className='py-8 border-[#BEBCBD] border-b-[1px] @container'>
			<div className='flex w-[1440px] px-[100px] mx-auto'>
				<Logo />
				<nav className='flex gap-[76px] items-center ml-auto'>
					<ul className='flex gap-10'>
						<li className={`cursor-pointer text-[22px] text-[#807D7E]`}>
							Shop
						</li>
						<li className={`cursor-pointer text-[22px] text-[#807D7E]`}>Men</li>
						<li className={`cursor-pointer text-[22px] text-[#807D7E]`}>
							Women
						</li>
						<li className={`cursor-pointer text-[22px] text-[#807D7E]`}>
							Combos
						</li>
						<li className={`cursor-pointer text-[22px] text-[#807D7E]`}>
							Joggers
						</li>
					</ul>
					<div className='relative flex h-[44px]'>
						<SearchIcon
							className='absolute left-[23px] top-[50%] transform-[translateY(-50%)] text-center text-[#807D7E]'
							sx={{ height: '20px' }}
						/>
						<input
							className='bg-[#F6F6F6] pl-[52px] rounded text-[#807D7E]'
							placeholder='Search'
							type='text'
							name=''
							id=''
						/>
					</div>
					<div className='flex gap-3'>
						<HeartIcon
							className='p-[12px] bg-[#F6F6F6] rounded-[8px]'
							width={44}
							height={44}
						/>
						<UserIcon
							className='p-[12px] bg-[#F6F6F6] rounded-[8px]'
							width={44}
							height={44}
						/>
						<CartIcon
							className='p-[12px] bg-[#F6F6F6] rounded-[8px]'
							width={44}
							height={44}
						/>
					</div>
				</nav>
			</div>
		</header>
	)
}
