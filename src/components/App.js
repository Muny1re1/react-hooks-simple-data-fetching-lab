import React, { useEffect, useState } from "react";

function App() {
    const [src, setSrc] = useState('');

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => setSrc(data.message))
            .catch(error => console.error("Error fetching dog image:", error));
    }, []);

    if (!src) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <img src={src} alt="A Random Dog" />
        </div>
    );
}

export default App;