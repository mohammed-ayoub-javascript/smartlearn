import { Button } from '@/components/ui/button'
import React from 'react'
import AuthButton from './auth/auth-button'
import { getServerSession } from 'next-auth';
import { options } from '@/lib/auth-options';
import Link from 'next/link';

const Hero = async () => {
    const session = await getServerSession(options);

  return (
<div className='h-screen flex justify-center items-center flex-col w-full border-b border-gray-800 bg-black'>
    <h1 className='text-xl md:text-4xl lg:text-5xl font-extrabold text-white text-center px-4'>
        <span className='bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
            ابدأ رحلة التعلم
        </span>
        <br />
        في أي مجال بالذكاء الاصطناعي
    </h1>
    
    <p className='mt-5 text-gray-300 text-sm md:text-base lg:text-lg text-center opacity-90'>
        انشر الدروس، تعلم مع الذكاء الاصطناعي، مجانًا
    </p>
    
    {!session?.user?.email && (
  <AuthButton />

      )}
      {session?.user?.email && (
       <Link href={"/app"}>
        <Button>
            لوحة التحكم
        </Button>
       </Link>
      )}
</div>
  )
}

export default Hero