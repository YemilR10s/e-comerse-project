'use client'

import { WixClientContext } from "@/context/wixClient"
import { useContext } from "react"

export const useWixClient = ()=>{

    return useContext(WixClientContext)
}