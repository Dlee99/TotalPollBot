:loop
start /min Tor\tor.exe
SET /A rtime=%RANDOM%*6/32768+6
timeout %rtime%
node bot.js
taskkill /IM tor.exe
goto loop
