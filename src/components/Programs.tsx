
import { Baby, User, Star, Clock, Book, Cake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Baby,
      title: t('smallGroup'),
      age: t('smallGroupAge'),
      color: "bg-pink-100 text-pink-600",
      badgeColor: "bg-pink-500",
      description: t('smallGroupDescription'),
      features: [
        t('gradualAdaptation'),
        t('sensoryGames'), 
        t('languageDevelopment'),
        t('primarySocialization')
      ],
      schedule: "8:00 - 16:00",
      maxChildren: t('smallGroupCapacity')
    },
    {
      icon: User,
      title: t('middleGroup'),
      age: t('middleGroupAge'),
      color: "bg-red-100 text-red-600",
      badgeColor: "bg-red-500",
      description: t('middleGroupDescription'),
      features: [
        t('creativeActivities'),
        t('readingInitiation'),
        t('funMath'),
        t('physicalEducation')
      ],
      schedule: "8:00 - 16:00",
      maxChildren: t('middleGroupCapacity')
    },
    {
      icon: Star,
      title: t('bigGroup'),
      age: t('bigGroupAge'),
      color: "bg-green-100 text-green-600",
      badgeColor: "bg-green-500",
      description: t('bigGroupDescription'),
      features: [
        t('schoolPreparation'),
        t('thematicProjects'),
        t('englishLanguage'),
        t('stemActivities')
      ],
      schedule: "8:00 - 16:00",
      maxChildren: t('bigGroupCapacity')
    },
    {
      icon: Cake,
      title: t('preparatoryGroup'),
      age: t('preparatoryGroupAge'),
      color: "bg-purple-100 text-purple-600",
      badgeColor: "bg-purple-500",
      description: t('preparatoryGroupDescription'),
      features: [
        t('preschoolCurriculum'),
        t('cognitiveDevelopment'),
        t('advancedSocialSkills'),
        t('psychologicalPreparation')
      ],
      schedule: "8:00 - 16:00",
      maxChildren: t('preparatoryGroupCapacity')
    }
  ];

  const extraActivities = [
    { name: t('english'), icon: Book },
    { name: t('music'), icon: Star },
    { name: t('dance'), icon: User },
    { name: t('arts'), icon: Book },
    { name: t('swimming'), icon: Star },
    { name: t('karate'), icon: User }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('ourPrograms')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('programsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${program.color}`}>
                  <program.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-800 mb-2">
                  {program.title}
                </CardTitle>
                <Badge className={`${program.badgeColor} text-white`}>
                  {program.age}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">{t('mainActivities')}:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {program.schedule}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {program.maxChildren}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('extracurricularActivities')}
            </h3>
            <p className="text-gray-600">
              {t('extracurricularDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {extraActivities.map((activity, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-colors duration-200">
                <activity.icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-800">{activity.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
