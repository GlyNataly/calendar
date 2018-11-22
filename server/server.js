let express = require('express');
let app  = express();
let data = {
    "mo": [
         {
           "bt": 240,
           "et": 779
         }
    ],
    "tu": [
    ],
    "we": [
    ],
    "th": [
      {
     "bt": 240,
           "et": 779
      },
      {
     "bt": 1140,
           "et": 1319
      }
    ],
    "fr": [
      {
     "bt": 660,
           "et": 1019
      }
    ],
    "sa": [
         {
           "bt": 0,
           "et": 1439
         }
       ],
    "su": []
   };

app.use(express.static('client/build'));
app.use(express.json());

app.get('/api', (req, res) => {
    console.log(`get: ${JSON.stringify(data)}`)
    res.send(data);
});

app.post('/api', (req, res) => {
    console.log(`post: ${JSON.stringify(req.body)}`);
    data = req.body;
    res.send();
});

app.listen(3001);