import './styles/BasicInfo.css';
import { useTranslation } from 'react-i18next';

export function BasicInfo() {
    const {t} = useTranslation();

    const jsonSnippet = {
        [t('componentText.basicInfo.nameLabel')]: "Pedro Félix",
        [t('componentText.basicInfo.ageLabel')]: 25,
        [t('componentText.basicInfo.nacionalityLabel')]: t('componentText.basicInfo.nacionalityValue'),
        [t('componentText.basicInfo.languagesLabel')]: {
            [t('componentText.basicInfo.language1')]: t('componentText.basicInfo.nativeLabel'),
            [t('componentText.basicInfo.language2')]: "C2",
            [t('componentText.basicInfo.language3')]: "B2",
            [t('componentText.basicInfo.language4')]: "A1",
            [t('componentText.basicInfo.language5')]: "A0"
        },
        [t('componentText.basicInfo.favHobbiesLabel')]: [
            t('componentText.basicInfo.travelingHobbie'),
            t('componentText.basicInfo.gamingHobbie'),
            t('componentText.basicInfo.readingHobbie')
        ]
    };

    return(
        <div className="basicInfo">
            <p className="basicInfoTitle">{t('componentText.basicInfo.title')} pedroFelix.json:</p>
            <div className="codeSnippet">
                <pre><code>{JSON.stringify(jsonSnippet, null, 4)}</code></pre>
            </div>
        </div>
    )
}