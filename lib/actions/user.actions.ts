"use server"

import { signInSchema } from "../validator"
import { signIn, signOut } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error"

// sign in user with credentials 
export async function signInUser(prevState: unknown, formData: FormData) {
    try {
        const user = signInSchema.parse({
            email: formData.get("email"),
            password: formData.get("password")
        })
        await signIn("credentials", user)
        return {success: true, message: "User signed in successfully"}      
    } catch (error) {
        if(isRedirectError(error)){
            throw error
        }
        return {success: false, message: "Invalid credentials"}
    }
}

// sign out user
export async function signOutUser() {
    await signOut()
}