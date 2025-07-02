
import { Phone, Mail, Clock, Car, Book, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      details: ["0758 123 456", "0758 123 457"],
      color: "text-red-600"
    },
    {
      icon: Mail,
      title: t('email'),
      details: ["info@julesverne.ro", "admitere@julesverne.ro"],
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: t('schedule'),
      details: [t('mondayFriday'), t('saturdayOnRequest')],
      color: "text-purple-600"
    },
    {
      icon: Car,
      title: t('address'),
      details: [t('streetAddress'), t('sectorAddress')],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contactToday')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gray-100 flex items-center justify-center`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1 text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t('scheduleVisitCard')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('visitDescription')}
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  {t('reserveVisit')}
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Book className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t('admissionDossier')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('admissionDescription')}
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  {t('downloadDocuments')}
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">
            {t('openEnrollment')}
          </h3>
          <p className="text-red-100 mb-4">
            {t('enrollmentDescription')}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">0758 123 456</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
