import { Button } from '@/components/ui/button';
import { Github, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import AuthButton from './auth/auth-button';
import { getServerSession } from 'next-auth';
import { options } from '@/lib/auth-options';
import Image from 'next/image';

const Header = async () => {
 const session = await getServerSession(options);
  return (
<div className="w-full border-b p-3 border-white flex justify-between items-center flex-row fixed backdrop-blur-lg ">
    <div>
        <h1 className="font-extrabold cursor-pointer">SmartLearn</h1>
    </div>
    <div className="flex justify-center items-center flex-row gap-2">
      {!session?.user?.email && (
  <AuthButton />

      )}
      {session?.user?.email && (
        <Image src={session.user.image} width={40} height={40} className=' rounded-full '/>
      )}
        <Button variant="outline">
            <Github />
        </Button>
    </div>
</div>

  )
}

export default Header