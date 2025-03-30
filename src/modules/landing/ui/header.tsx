import { Button } from '@/components/ui/button';
import { Github, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Header = () => {

  return (
<div className="w-full border-b p-3 border-white flex justify-between items-center flex-row fixed backdrop-blur-lg ">
    <div>
        <h1 className="font-extrabold cursor-pointer">SmartLearn</h1>
    </div>
    <div className="flex justify-center items-center flex-row gap-2">
        <Button variant="outline">
            ابدا مجانا
        </Button>
        <Button variant="outline">
            <Github />
        </Button>
    </div>
</div>

  )
}

export default Header