import { useState } from 'react';

export default function SideMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fixed left-0 top-0 h-full flex transition-all duration-300 z-[100]`}>
            <div className={`h-full overflow-hidden transition-all duration-300 bg-old-white backdrop-blur-md ${isOpen ? 'w-[565px]' : 'w-0'}`}>
                <div className={`h-full transition-opacity duration-300 ${isOpen ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                    {children}
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="h-full w-[35px] bg-old-white hover:bg-white border border-l-0 border-white/5 flex items-center justify-center group"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                )}
            </button>
        </div>
    );
}