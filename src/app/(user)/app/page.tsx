"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { dbOperations } from "@/local/information-local"

interface Achievement {
  title: string;
  xp: string;
  data: string;
}

interface Notification {
  title: string;
  content: string;
}

const AppUser = () => {
  const [studentData, setStudentData] = useState<{
    level: number;
    xp: number;
    achievements: Achievement[];
    notifications: Notification[];
  } | null>(null)

  useEffect(() => {
    const loadData = async () => {
      await dbOperations.initialize()
      const data = await dbOperations.getData()
      setStudentData({
        level: data.level,
        xp: data.xp,
        achievements: data.achievements,
        notifications: data.notifications
      })
    }
    loadData()
  }, [])

  if (!studentData) return (
    <div className="w-full p-4 text-white">
      جاري تحميل البيانات...
    </div>
  )

  return (
    <div className='w-full p-4 space-y-6 rounded-xl'>
      <h2 className='text-3xl font-bold text-white'>إحصائيات الأداء</h2>
      
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <Card className='relative overflow-hidden transition-all duration-300 border-2 border-gray-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'>
          <CardHeader className='flex flex-row items-center justify-between p-6'>
            <div className='space-y-2'>
              <CardTitle className='text-lg text-gray-400'>
                نقاط XP
              </CardTitle>
              <div className='text-3xl font-bold text-white'>
                {studentData.xp}
              </div>
            </div>
            <div className='p-3 rounded-full bg-blue-500/20'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </CardHeader>
        </Card>

        <Card className='relative overflow-hidden transition-all duration-300 border-2 border-gray-800 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]'>
          <CardHeader className='flex flex-row items-center justify-between p-6'>
            <div className='space-y-2'>
              <CardTitle className='text-lg text-gray-400'>
                المستوى الحالي
              </CardTitle>
              <div className='text-3xl font-bold text-white'>
                {studentData.level}
              </div>
            </div>
            <div className='p-3 rounded-full bg-green-500/20'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </CardHeader>
        </Card>

        <Card className='relative overflow-hidden transition-all duration-300 border-2 border-gray-800 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'>
          <CardHeader className='flex flex-row items-center justify-between p-6'>
            <div className='space-y-2'>
              <CardTitle className='text-lg text-gray-400'>
                عدد الإنجازات
              </CardTitle>
              <div className='text-3xl font-bold text-white'>
                {studentData.achievements.length}
              </div>
            </div>
            <div className='p-3 rounded-full bg-purple-500/20'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <Card className='border-2 border-gray-800'>
          <CardHeader className='border-b border-gray-800 p-6'>
            <div className='text-2xl font-bold text-white'>الاشعارات</div>
            <CardDescription className='text-gray-400'>
              احدث الاشعارات
            </CardDescription>
          </CardHeader>
          <CardContent className='p-6 space-y-4'>
            {studentData.notifications.map((notification, index) => (
              <div key={index} className='group p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-all cursor-pointer'>
                <div className='text-lg font-semibold text-white group-hover:text-blue-400 transition-colors'>
                  {notification.title}
                </div>
                <div className='text-blue-400 text-xl font-bold mt-2'>
                  {notification.content}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className='border-2 border-gray-800'>
          <CardHeader className='border-b border-gray-800 p-6'>
            <div className='text-2xl font-bold text-white'>الانجازات</div>
            <CardDescription className='text-gray-400'>
              الانجازات المحققة
            </CardDescription>
          </CardHeader>
          <CardContent className='p-6 grid grid-cols-2 gap-4'>
            {studentData.achievements.map((achievement, index) => (
              <div key={index} className='p-4 rounded-lg border border-gray-800 text-center'>
                <div className='mx-auto mb-3 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center'>
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className='text-white font-medium'>{achievement.title}</div>
                <div className='text-gray-400 text-sm'>+{achievement.xp} XP</div>
                <div className='text-gray-500 text-xs mt-1'>
                  {new Date(achievement.data).toLocaleDateString()}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AppUser