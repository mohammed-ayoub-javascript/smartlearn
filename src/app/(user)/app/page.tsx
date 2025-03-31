import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const AppUser = () => {
  return (
<div className='w-full p-4 space-y-6  rounded-xl'>
    <h2 className='text-3xl font-bold text-white'>إحصائيات الأداء</h2>
    
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <Card className='relative overflow-hidden transition-all duration-300  border-2 border-gray-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'>
            <CardHeader className='flex flex-row items-center justify-between p-6'>
                <div className='space-y-2'>
                    <CardTitle className='text-lg text-gray-400'>
                        نقاط XP
                    </CardTitle>
                    <div className='text-3xl font-bold text-white'>
                        184
                    </div>
                </div>
                <div className='p-3 rounded-full bg-blue-500/20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
            </CardHeader>
        </Card>

        <Card className='relative overflow-hidden transition-all duration-300  border-2 border-gray-800 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]'>
            <CardHeader className='flex flex-row items-center justify-between p-6'>
                <div className='space-y-2'>
                    <CardTitle className='text-lg text-gray-400'>
                        الرسائل هذا الشهر
                    </CardTitle>
                    <div className='text-3xl font-bold text-white'>
                        10
                    </div>
                </div>
                <div className='p-3 rounded-full bg-green-500/20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
            </CardHeader>
        </Card>

        <Card className='relative overflow-hidden transition-all duration-300  border-2 border-gray-800 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'>
            <CardHeader className='flex flex-row items-center justify-between p-6'>
                <div className='space-y-2'>
                    <CardTitle className='text-lg text-gray-400'>
                        الترتيب
                    </CardTitle>
                    <div className='text-3xl font-bold text-white'>
                        1<sup className='ml-1 text-sm text-gray-400'>st</sup>
                    </div>
                </div>
                <div className='p-3 rounded-full bg-purple-500/20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </div>
            </CardHeader>
        </Card>
    </div>

    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <Card className=' border-2 border-gray-800'>
            <CardHeader className='border-b border-gray-800 p-6'>
                <div className='text-2xl font-bold text-white'>الاشعارات</div>
                <CardDescription className='text-gray-400'>
                    احدث الاشعارات
                </CardDescription>
            </CardHeader>
            <CardContent className='p-6 space-y-4'>
                <div className='group p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-all cursor-pointer'>
                    <div className='text-lg font-semibold text-white group-hover:text-blue-400 transition-colors'>
                        تهانينا، تحصلت على درع المحارب
                    </div>
                    <div className='text-blue-400 text-xl font-bold mt-2'>
                        +10XP
                    </div>
                </div>

                <div className='group p-4 rounded-lg border border-gray-800 hover:border-green-500 transition-all cursor-pointer'>
                    <div className='text-lg font-semibold text-white group-hover:text-green-400 transition-colors'>
                        أول رسالة في المنتدى
                    </div>
                    <div className='text-green-400 text-xl font-bold mt-2'>
                        +74XP
                    </div>
                </div>

                <div className='group p-4 rounded-lg border border-gray-800 hover:border-purple-500 transition-all cursor-pointer'>
                    <div className='text-lg font-semibold text-white group-hover:text-purple-400 transition-colors'>
                        أول رسالة إلى الذكاء الاصطناعي
                    </div>
                    <div className='text-purple-400 text-xl font-bold mt-2'>
                        +100XP
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card className=' border-2 border-gray-800'>
            <CardHeader className='border-b border-gray-800 p-6'>
                <div className='text-2xl font-bold text-white'>الانجازات</div>
                <CardDescription className='text-gray-400'>
                    الانجازات المحققة
                </CardDescription>
            </CardHeader>
            <CardContent className='p-6 grid grid-cols-2 gap-4'>
                <div className='p-4 rounded-lg border border-gray-800 text-center'>
                    <div className='mx-auto mb-3 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center'>
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className='text-white font-medium'>المبتدئ</div>
                    <div className='text-gray-400 text-sm'>أول تسجيل دخول</div>
                </div>

                <div className='p-4 rounded-lg border border-gray-800 text-center'>
                    <div className='mx-auto mb-3 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center'>
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className='text-white font-medium'>المتفاعل</div>
                    <div className='text-gray-400 text-sm'>10 مشاركات</div>
                </div>

                <div className='p-4 rounded-lg border border-gray-800 text-center'>
                    <div className='mx-auto mb-3 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center'>
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='text-white font-medium'>الخبير</div>
                    <div className='text-gray-400 text-sm'>1000 نقطة</div>
                </div>
            </CardContent>
        </Card>
    </div>
</div>
  )
}

export default AppUser