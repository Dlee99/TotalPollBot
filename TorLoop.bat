:loop
cd Tor
start tor.exe
timeout /t 5
cd ..
node bot.js baseDomain pollId choiceId
taskkill /IM tor.exe
goto loop
