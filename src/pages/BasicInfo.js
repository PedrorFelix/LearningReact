import './styles/BasicInfo.css';
import { useTranslation } from 'react-i18next';

export function BasicInfo() {
    const {t} = useTranslation();
    const jsonSnippet = `{
    "name": "Pedro Félix",
    "age": 25,
    "nationality": "Portuguese",
    "languages": {
        "Portuguese": "Native",
        "English": "C2",
        "Spanish": "B2",
        "Italian": "A1",
        "German": "A0"
    },
    "favoriteHobbies": [ 
        "Traveling",
        "Games",
        "Reading" 
    ],
    "favoriteMovies&Series": "Waaaaay to Many, Text Me About This"
}`;

    return(
        <div className="basicInfo">
            <p className="basicInfoTitle">{t('componentText.basicInfoText')} pedroFelix.json:</p>
            <div className="codeSnippet">
                <pre><code>{jsonSnippet}</code></pre>
            </div>
        </div>
    )
}