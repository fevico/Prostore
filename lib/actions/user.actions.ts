"use server"

import { signInSchema, signUpSchema } from "../validator"
import { signIn, signOut } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { hashSync } from "bcrypt-ts-edge"
import {prisma} from "@/db/prisma"
import { formatError } from "../utils"

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

export async function signUpUser(prevState: unknown, formData: FormData) {
    try {
        const user = signUpSchema.parse({
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword")
        })
        const hashedPassword = hashSync(user.password, 10)
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashedPassword
            }
        })
        await signIn("credentials", {
            email: user.email,
            password: user.password
        })
        return {success: true, message: "User signed up successfully"}
    } catch (error) {
        if(isRedirectError(error)){
            throw error
        }        
        return {success: false, message: formatError(error)}
    }
}