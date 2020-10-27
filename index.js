
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()
const line = require('@line/bot-sdk');
const cors = require('cors')

app.use(cors());
app.use('/line', router)
router.use(bodyParser.json());

const port = 3000;

async function linePush(){
  const client = new line.Client({
    channelAccessToken: '3N9mejaif7H3M/7mz6FOb4BdcN2kDFpQjazPXZ+nP6p6lR5OVYYd2nBWwlceAF5bf8J177HT10PXC25k/5BaKQp5cjpQxOvRATMLa8v65/gQJj+ZTddRMN2dnFtnfZubjydl8HwAD9/QdGixZuhX0QdB04t89/1O/w1cDnyilFU='
  });

  const message = {
    type: 'text',
    text: '你好帥'
  };

  client.pushMessage('Ud3bc63094222812eb3e4b43dcfd6f077', message)
    .then(() => {
      console.log('done')
    })
    .catch((err) => {
      // error handling
    });
}

  router.get('/autosend', async (req, res) => {
    linePush()
    .then((result) =>{
      res.status(200).send(result)
    })
    .catch((e)=>{
      console.log(e)
      res.status(500).send(e.message)
    })
  })
  
  app.listen(port, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`==>  Listening on port ${port}.`)
    }
  })