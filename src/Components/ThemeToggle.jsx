import React, { use, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {

    const [isDarkM, setisDarkM] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setisDarkM(true)
            document.documentElement.classList.add("dark");
        }
        else {
            localStorage.setItem("theme", "light");
            setisDarkM(false);
        }
    }, [])
    const toggle = () => {
        if (isDarkM) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setisDarkM(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setisDarkM(true);
        }
    }


    return (
        <div>
            <button onClick={toggle} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2  rounded-full transition-colors duration-300","focus:outline-hidden")}>{isDarkM ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' />}</button>
        </div>
    )
}

export default ThemeToggle
