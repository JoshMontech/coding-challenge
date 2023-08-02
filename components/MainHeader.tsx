"use client"
import Link from "next/link"
import Logo from "./Logo"
import { useState } from "react"

const MainHeader = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <header className="top-0 flex w-full max-w-[1280px] bg-primary p-[24px] text-primary max:mx-auto">
            <nav className="flex min-h-[42px] w-full items-center justify-between">
                <div className="flex items-center gap-[40px]">
                    <Logo />
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
                <button className="sm:hidden" onClick={() => setExpanded(true)}>
                    button
                </button>
                {expanded && (
                    <div className="fixed left-0 right-0 top-0 z-10 mx-2 mt-2 rounded-[6px] bg-white text-black">
                        <ul
                            className={`flex flex-col gap-[24px] p-[24px] md:flex`}
                        >
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
                            <button className="">Start Free Trial</button>
                            <div>
                                Existing Customer?{" "}
                                <span className="font-bold">Login</span>
                            </div>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default MainHeader
