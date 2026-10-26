@echo off
chcp 65001 > nul
title Buket Baytar - Portfolyo Calistirma Scripti
echo ========================================================
echo   Buket Baytar Portfolyo Projesi Baslatiliyor...
echo ========================================================
echo.

if not exist node_modules (
    echo [1/2] Bagimliliklar yukleniyor...
    call npm install
) else (
    echo [1/2] Bagimliliklar hazir.
)

echo [2/2] Gelistirici sunucusu baslatiliyor (Tarayici otomatik acilacak)...
echo.
echo Portfolyonuz calisirken bu pencereyi acik tutun.
echo Kapatmak icin CTRL+C tuslarina basabilirsiniz.
echo.

call npm run dev -- --open

pause
