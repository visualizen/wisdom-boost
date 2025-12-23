import React from 'react';
import { Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedHeroButton = () => {
    const { t } = useLanguage();

    return (
        <div className="relative group">
            <Button
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative overflow-hidden rounded-full text-lg px-10 shadow-lg transition-all duration-500 bg-sky-500 hover:bg-sky-600 text-white border border-white/30 hover:-translate-y-1 py-6 md:py-8"
            >
                <span className="relative z-10 flex items-center text-white font-bold tracking-wide">
                    {t('hero.cta')}
                    <Plane className="ml-2 animate-pulse" size={20} />
                </span>

                {/* Subtle shine effect instead of full animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Button>
        </div>
    );
};

export default AnimatedHeroButton;
