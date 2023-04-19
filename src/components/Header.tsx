import { Sparkle } from "phosphor-react";
import './Header.css'

interface HeaderProps {
    title: string
}
export function Header (props: HeaderProps) {
    return (
        <div className='time-line-header'>
        {props.title}
        <Sparkle/>
      </div>
    )   
}