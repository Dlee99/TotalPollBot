:loop
start Tor\tor.exe
timeout /t 5
node bot.js baseDomain pollId choiceId
taskkill /IM tor.exe
goto loop
