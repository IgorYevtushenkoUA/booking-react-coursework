import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

const lang = localStorage.getItem('lang') === 'en' ? 'en' : localStorage.getItem('lang');

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    react: {
        useSuspense: false,
    },
    fallbackLng: lang,
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n