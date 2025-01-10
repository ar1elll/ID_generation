import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
const port = 3000;


function generateModifiedID() {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).join('');
    const id = new Date().getTime().toString(); 
    let result = '';
    let i = 0;

    while (i < id.length) {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        const numberFromID = parseInt(id.slice(i, i + randomNum), 10) || 0;
        const letterIndex = numberFromID % alphabet.length;
        const letter = alphabet[letterIndex];
        result += letter + id.slice(i + randomNum, i + 2 * randomNum);
        i += 2 * randomNum;
    }

    return {
        originalID: id,
        modifiedID: result,
    };
}


app.get('/generate-uniqe-id', (req, res) => {
    const uniqeId = generateModifiedID();
    res.json(uniqeId); 
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
