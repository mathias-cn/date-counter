import { ReactNode, MouseEventHandler } from "react"

interface ButtonProps {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="font-bold bg-slate-800 w-8 h-8 text-slate-50 rounded-md">
            {children}
        </button>
    )
}