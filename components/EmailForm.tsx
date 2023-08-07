"use client"
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { MUTATION_CREATE_NEW_USER } from "@/lib/graphql/mutationCreateNewUser"
const CREATE_NEW_USER = gql(MUTATION_CREATE_NEW_USER)

const EmailForm = () => {
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
                        onChange={(e) => setEmail(e.target.value)}
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
    )
}

export default EmailForm
