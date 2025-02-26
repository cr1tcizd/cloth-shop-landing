import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			className='border-[1px] border-black px-[16px] py-[10px] rounded-[4px]'
			{...props}
		>
			{children}
		</button>
	)
}
