export function BasicInfo() {

    const name = "Pedro Félix";
    const age = 25;
    const nationality = "Portuguese";

    const jsonSnippet = `
    {
    "name": "${name}",
    "age": ${age},
    "nationality": "${nationality}"
    }`;

    return(
        <div className="BasicInfo">
            <p className="BasicInfoTitle">Here's a little snippet about me in a familiar format:</p>
            <div className="CodeSnippet">
                <pre><code>{jsonSnippet}</code></pre>
            </div>
        </div>
    )
}