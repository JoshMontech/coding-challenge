"use client"
import Image from "next/image"
import Link from "next/link"
import splash from "@/public/splash.svg"
import chevron from "@/public/chevron.svg"
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { MUTATION_CREATE_NEW_USER } from "@/lib/graphql/mutationCreateNewUser"
const CREATE_NEW_USER = gql(MUTATION_CREATE_NEW_USER)

export default function Home() {
    const [createNewUser] = useMutation(CREATE_NEW_USER)
    const [email, setEmail] = useState("")
    const [toastBar, setToastBar] = useState({ message: "", type: "error" })

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const emailAdded = (email) => {
        setToastBar({
            message: `"${email}" added!`,
            type: `success`,
        })
        setEmail("")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!validateEmail(email)) {
            setToastBar({
                message: "Please enter a real email",
                type: "error",
            })
            return
        }

        try {
            const resp = await createNewUser({
                variables: {
                    name: event.target.email.value,
                    username: event.target.email.value,
                    email: event.target.email.value,
                },
            })

            const { email } = resp.data.createUser

            emailAdded(email)
        } catch (error) {
            setToastBar({
                message: "An issue occurred",
                type: "error",
            })
        }
    }

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
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="relative flex w-full flex-col gap-[12px]">
                                {toastBar.message !== "" && (
                                    <div
                                        className={`absolute top-[-42px] rounded-[4px] px-[16px] py-[4px] text-center md:self-start ${
                                            toastBar.type === "error"
                                                ? "border-[2px] border-red-500 bg-red-200 text-red-500"
                                                : "border-[2px] border-green-500 bg-green-200 text-green-500"
                                        }`}
                                    >
                                        {toastBar.message}
                                    </div>
                                )}
                                <div className="flex flex-col gap-[12px] sm:flex-row">
                                    <input
                                        className="w-full rounded-[6px] px-[16px] py-[12px] text-tertiary sm:w-[300px] md:w-[350px]"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="rounded-[6px] bg-secondary px-[16px] py-[12px]"
                                    >
                                        Start free trial
                                    </button>
                                </div>
                            </div>
                        </form>
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
