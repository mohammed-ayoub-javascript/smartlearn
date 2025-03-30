import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import React from 'react'

const Pricing = () => {
    const pricing = [
        {
            title: 'مجانا',
            description: "مناسب للتعلم السريع والتجربة",
            price: 0,
            features: [
                "الوصول إلى الدروس الأساسية",
                "إمكانية طرح الأسئلة في المنتدى العام",
                "تجربة محدودة للذكاء الاصطناعي التعليمي",
            ],
        },
        {
            title: 'أساسي',
            description: "خطة أساسية للمبتدئين في التعلم",
            price: 10,
            features: [
                "الوصول إلى جميع الدروس المجانية",
                "إمكانية تحميل بعض الدروس",
              "50 رسالة يوميا الى الذكاء الاصطناعي",
            ],
        },
        {
            title: 'محترف',
            description: "مناسب للتعلم العميق واكتساب مهارات متقدمة",
            price: 15,
            features: [
                "الوصول إلى جميع الدورات المتقدمة",
                "إمكانية تحميل جميع الدروس",
                "دعم تقني مباشر",
               "150 رسالة يوميا الى الذكاء الاصطناعي" ,
                "إمكانية إنشاء مسارات تعلم مخصصة",
            ],
        },
        {
            title: 'النجاح',
            description: "خطة النجاح مع نظام تعليمي متقدم",
            price: 25,
            features: [
                "الوصول غير المحدود إلى جميع المحتويات والدورات الحصرية",
                "إمكانية تحميل غير محدودة",
                "رسائل غير محدودة للذكاء الاصطناعي",
                "إمكانية الحصول على توصيات شخصية",
                "أولوية في الدعم الفني"
            ],
        },
    ];
    
  return (
    <div className='flex bg-black  justify-center items-center flex-col w-full border-b border-gray-200 dark:border-gray-800 p-8 bg-gradient-to-b '>
        <div className='text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'>
            التسعير
        </div>
        <p className='text-white text-lg mb-8 text-center max-w-2xl'>
            اختر الخطة التي تناسب أهدافك التعليمية. ابدأ مجانًا أو اختر خطة مدفوعة للحصول على ميزات متقدمة.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4'>
            {pricing.map((item, index) => (
                <Card 
                    key={item.description}
                    className={`group relative hover:border-blue-500 transition-all duration-300 h-full flex flex-col 
                        ${index === 2 ? 'border-2 border-blue-500 dark:border-blue-600 scale-105' : 'border-gray-200 dark:border-gray-800'}
                        hover:shadow-lg dark:hover:shadow-blue-500/10`}
                >
                    {index === 2 && (
                        <div className='absolute top-0 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-b-md'>
                            الأكثر شهرة
                        </div>
                    )}
                    
                    <CardHeader className='pb-3'>
                        <CardTitle className={`text-2xl font-bold ${index === 2 ? 'text-blue-600' : 'text-white'}`}>
                            {item.title}
                        </CardTitle>
                        <CardDescription className='text-white h-12'>
                            {item.description}
                        </CardDescription>
                        <div className='mt-4'>
                            <span className='text-4xl font-bold text-white'>
                                {item.price}$
                            </span>
                            <span className='text-white text-sm'>/شهريًا</span>
                        </div>
                    </CardHeader>
                    
                    <CardContent className='flex-1 flex flex-col pt-0'>
                        <div className='space-y-3 mb-6'>
                            {item.features.map((pr) => (
                                <div 
                                    key={pr}
                                    className='flex items-start gap-2 text-white'
                                >
                                    <Check className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                                    <span className='text-sm leading-tight'>{pr}</span>
                                </div>
                            ))}
                        </div>
                        
                        <button className={`mt-auto w-full py-3 text-sm font-semibold rounded-lg transition-colors
                            ${index === 2 ? 
                                'bg-blue-600 text-white hover:bg-blue-700' :
                                'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            ابدأ الآن
                        </button>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default Pricing