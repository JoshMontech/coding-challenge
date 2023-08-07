import Image from "next/image"
import Link from "next/link"
import splash from "@/public/splash.svg"
import chevron from "@/public/chevron.svg"
import EmailForm from "@/components/EmailForm"

export default function Home() {
    return (
        <main
            className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col px-[24px]"
            style={{ maxHeight: "calc(100vh-90px)" }}
        >
            <section className="relative flex h-full">
                <div className="relative mt-[24px] flex flex-col gap-[24px] md:mt-[100px] lg:mt-[125px]">
                    <Link
                        className="flex items-center gap-[16px] self-start rounded-[14px] bg-tertiary py-[4px] pl-[4px] pr-[8px] text-[12px] leading-[20px]"
                        href="/"
                    >
                        <div className="rounded-[10px] bg-secondary px-[12px] py-[2px] uppercase">
                            We&#39;re Hiring
                        </div>
                        <div className="">Visit our careers page</div>
                        <div className="mr-2 text-xl text-gray-400">
                            <Image
                                src={chevron}
                                height={11}
                                width={6}
                                alt="chevron icon"
                            />
                        </div>
                    </Link>
                    <div className="flex w-full flex-col gap-[20px] md:max-w-[400px] lg:max-w-[475px]">
                        <div className="flex flex-col">
                            <div className="lin text-[36px] font-black leading-[40px] md:text-5xl">
                                <div className="">A better way to</div>
                                <div className="text-accent">ship web apps</div>
                            </div>
                        </div>
                        <div className="text-secondary">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui Lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat.
                        </div>
                    </div>
                    <div className="mt-[24px] flex max-w-[509px] flex-col gap-[16px]">
                        <EmailForm />
                        <div className="text-[14px] text-sm leading-[20px] text-secondary">
                            Start your free 14-day trial, no credit card
                            necessary. By providing your email, you agree to our{" "}
                            <Link className="font-bold" href="/">
                                &nbsp;terms or service.
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-[-100px] right-0 z-[-10] md:bottom-auto md:right-[-275px] lg:right-[-125px] max:absolute max:right-0">
                    <Image
                        src={splash}
                        // added to prevent console warning -- redundant
                        style={{ width: 625, height: 625 }}
                        height={625}
                        width={625}
                        alt="splash image"
                    />
                </div>
            </section>
        </main>
    )
}
