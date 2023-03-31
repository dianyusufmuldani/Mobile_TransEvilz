import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import idTranslation from './locales/id.json';


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng:'id',
    resources:{
        id:idTranslation,
        en:enTranslation
    },
    react:{
        useSuspense:false
    }
     
})

export default i18next