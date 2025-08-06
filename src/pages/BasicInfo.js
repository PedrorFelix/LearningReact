import './styles/BasicInfo.css';

export function BasicInfo() {

    const jsonSnippet = `{
    "name": "Pedro Félix",
    "age": 25,
    "nationality": "Portuguese",
    "languages": {
        "Portuguese": "C2 (Native)",
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
            <p className="basicInfoTitle">Here's a little snippet of pedroFelix.json:</p>
            <div className="codeSnippet">
                <pre><code>{jsonSnippet}</code></pre>
            </div>
        </div>
    )
}