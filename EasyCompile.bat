call npm run build
call npm run lint
echo on
rmdir cpp /S /Q
mkdir cpp
copy dist\build.html cpp\index.html
cd cpp
"C:\Program Files\Git\usr\bin\gzip.exe" -9 -n index.html
python ../tools/bin2c.py --progmem index.html.gz
del index.html.gz
pause