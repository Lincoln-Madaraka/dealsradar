import React from 'react'

const BackgroundBlur = () => {
    return (
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-20 w-50 h-50 bg-orange-300 rounded-full blur-xl" />
            <div className="absolute top-40 right-32 w-24 h-24 bg-pink-300 rounded-full blur-lg" />
            <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-2xl" />
            <div className="absolute bottom-20 right-20 w-58 h-38 bg-orange-200 rounded-full blur-xl" />
        </div>
    )
}

export default BackgroundBlur
