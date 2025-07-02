
import { Star, Book, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Book,
      title: t('innovativeEducation'),
      description: t('innovativeEducationDesc')
    },
    {
      icon: Star,
      title: t('qualifiedEducators'),
      description: t('qualifiedEducatorsDesc')
    },
    {
      icon: Clock,
      title: t('flexibleSchedule'),
      description: t('flexibleScheduleDesc')
    },
    {
      icon: Users,
      title: t('personalizedDevelopment'),
      description: t('personalizedDevelopmentDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('aboutJulesVerne')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('ourMission')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('missionDescription1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('missionDescription2')}
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Book className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {t('aracipAccreditation')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('approvedCurriculum')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop&crop=center"
              alt={t('happyChildren')}
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white">{t('satisfiedParents')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-red-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
