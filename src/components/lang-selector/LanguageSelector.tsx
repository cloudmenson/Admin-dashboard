// const availableLanguages: any = [
//   {
//     id: '1',
//     imgsrc:
//       'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
//     langName: 'Roman Joined the Team!',
//   },
//   {
//     id: '2',
//     imgsrc:
//       'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg',
//     langName: 'Ukrainian (UA)',
//   },
//   {
//     id: '3',
//     imgsrc:
//       'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg',
//     langName: '中国人 (Chinese)',
//   },
// ];
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  const availableLanguages = ['uk', 'ua'];

  return (
    <div>
      <div>
        <span>{i18n.language.toUpperCase()}</span>
      </div>

      <ul>
        {availableLanguages?.map(
          (language) =>
            language !== i18n.language && (
              <li key={language} onClick={() => changeLanguage(language)}>
                {language.toUpperCase()}
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default LanguageSelector;
