"use client";

import { Button } from '@/components/ui/button';
import React from 'react'
import {signIn} from "next-auth/react"
const AuthButton = () => {
  return (
      <Button   onClick={() => {
        signIn("google")
      }} variant="outline">
            ابدا مجانا
        </Button>
  )
}

export default AuthButton