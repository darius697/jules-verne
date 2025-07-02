
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-red-600 text-red-600 hover:bg-red-50 font-semibold min-w-12"
    >
      {currentLanguage === 'ro' ? 'RO' : 'RU'}
    </Button>
  );
};

export default LanguageSwitcher;
