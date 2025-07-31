import './style/BasicInfo.css';

export function BasicInfo() {

    const jsonSnippet = `{
    "name": "Pedro Félix",
    "age": 25,
    "nationality": "Portuguese",
    "languages": {
        "Professional Level (C2)": [
            "Portuguese", 
            "English"
        ],
        "Conversational Level (B2)": "Spanish",
        "Begginer Level (A1)": "Italian",
        "Active Learning (Pre-A1)": "German"
    },
    "favoriteHobbies": [ 
        "Traveling",
        "Games",
        "Reading" 
    ],
    "favoriteMovies&Series": "Waaaaay to Many, Text Me About This"
}`;

    return(
        <div className="BasicInfo">
            <p className="BasicInfoTitle">Here's a little snippet of pedroFelix.json:</p>
            <div className="CodeSnippet">
                <pre><code>{jsonSnippet}</code></pre>
            </div>
        </div>
    )
}