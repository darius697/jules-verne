import { Book, Phone, Mail, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="public/julesvernelogo_bun.png"
                alt=""
                className="w-22 h-16"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-300">
                  {t("aracipAccreditation")}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickContact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">0689 05 050</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">gradiforyou@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("schedule")}</h3>
            <div className="space-y-2 text-gray-300">
              <p>{t("mondayFriday")}</p>
              <p>{t("saturdayOnRequest")}</p>
              <p>{t("sundayClosed")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">{t("allRightsReserved")}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {t("privacyPolicy")}
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {t("termsConditions")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
