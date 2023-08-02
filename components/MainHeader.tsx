"use client"
import Link from "next/link"
import hamburger from "../public/hamburger.svg"
import Image from "next/image"
import { useTheme } from "next-themes"
import Logo from "./Logo"
import { useState } from "react"

const MainHeader = () => {
    const [expanded, setExpanded] = useState(false)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        theme === "base" ? setTheme("funk") : setTheme("base")
    }

    return (
        <header className="relative z-[11] flex w-full max-w-[1280px] bg-primary p-[24px] text-primary max:mx-auto">
            <nav className="flex min-h-[42px] w-full items-center justify-between">
                <div className="flex items-center gap-[40px]">
                    <button onClick={() => toggleTheme()}>
                        <Logo color={"#6366F1"} />
                    </button>
                    <ul className={`hidden gap-[40px] md:flex`}>
                        <li>
                            <Link href="/">Product</Link>
                        </li>
                        <li>
                            <Link href="/">Features</Link>
                        </li>
                        <li>
                            <Link href="/">Marketplace</Link>
                        </li>
                        <li>
                            <Link href="/">Company</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden gap-[24px] md:flex">
                    <ul className="flex items-center gap-[24px]">
                        <li>
                            <Link href="/">Log In</Link>
                        </li>
                        <li className="rounded-[6px] bg-quaternary px-[17px] py-[9px]">
                            <Link href="/">Start Free Trial</Link>
                        </li>
                    </ul>
                </div>
                <button className="md:hidden" onClick={() => setExpanded(true)}>
                    <Image
                        src={hamburger}
                        height={24}
                        width={24}
                        alt="splash image"
                    />
                </button>
                <div
                    onClick={() => setExpanded(false)}
                    className={`fixed bottom-0 left-0 right-0 top-0 bg-[#6b7280] transition-opacity duration-300 ease-in-out ${
                        expanded ? "z-10 opacity-75" : "z-[-1] h-0 opacity-0"
                    }`}
                />
                <div
                    className={`transition-height fixed left-0 right-0 top-0 mx-2 mt-2 rounded-[6px] bg-white text-black duration-300 ease-in-out ${
                        expanded
                            ? "z-20 h-[395px] opacity-100"
                            : "z-[-10] h-0 opacity-0"
                    }`}
                >
                    <div className=" mb-[24px] rounded-[6px] bg-inversePrimary p-[24px]">
                        <div className="mb-[24px] flex justify-between">
                            <button onClick={() => toggleTheme()}>
                                <Logo color={"#4F46E5"} />
                            </button>
                            <button
                                className="mt-[-16px] text-2xl text-tertiary"
                                onClick={() => setExpanded(false)}
                            >
                                &#10006;
                            </button>
                        </div>

                        <ul className={`flex flex-col gap-[24px]`}>
                            <li>
                                <Link href="/">Product</Link>
                            </li>
                            <li>
                                <Link href="/">Features</Link>
                            </li>
                            <li>
                                <Link href="/">Marketplace</Link>
                            </li>
                            <li>
                                <Link href="/">Company</Link>
                            </li>
                            <button className="rounded-[6px] bg-inverseSecondary px-[16px] py-[12px] text-primary">
                                Start Free Trial
                            </button>
                            <div className="text-center">
                                Existing Customer?
                                <a className="font-bold" href="/">
                                    {" "}
                                    Login
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader
