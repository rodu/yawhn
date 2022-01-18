var express = require('express');
var router = express.Router();
const { exec } = require('child_process');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Yawhn!' });
});

router.post('/sleep', function (req, res, next) {
  // Uses shell command to put computer to sleep
  exec('systemctl suspend', (error) => {
    if (error) {
      res.status(500).send('Suspend failed');
    }

    res.status(200).send('Yawhn! I am going to sleep...');
  });
});

module.exports = router;
