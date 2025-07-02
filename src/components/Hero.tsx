
import { Star, Book, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-red-50 to-green-50 min-h-screen flex items-center overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                {t('eliteKindergarten')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 break-words">
              <span className="text-red-600">Jules Verne</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-4xl text-green-600">
                {t('adventuresInLearning')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                {t('scheduleVisit')}
              </Button>
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 px-6 sm:px-8 py-3">
                <Book className="mr-2 h-5 w-5" />
                {t('discoverPrograms')}
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-red-600">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t('yearsExperience')}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-green-600">200+</div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t('happyChildren')}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-yellow-600">20+</div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t('dedicatedEducators')}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative px-4 lg:px-0">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-lg">
              <div className="absolute top-4 left-4 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute top-4 right-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-8">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center"
                  alt={t('happyChildren')}
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-4"
                />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {t('adventuresInLearning')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('heroDescription').split('!')[0]}!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
