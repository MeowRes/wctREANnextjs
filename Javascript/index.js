import React, { useState } from "react";

const Archive = ({
    subject,
    year,
    title,
    previewdesc,
    preimg
    
}) => {
    const [preview, setpreview] = useState(false);
    const handlepreview = () => setpreview(true)

    return(
        <div>
            <div>
                <h5>{title}</h5>
                <p>{subject}</p>
                <p>{year}</p>
            </div>
            <button onClick={handlepreview}>Preview</button>

            {preview && <>
                <p>{previewdesc}</p>
                <img>{preimg}</img>
                <button onClick={window.console.log('File Downloaded!')}>⬇️Download</button>
            </> }

        </div>
    )
}

export default Archive