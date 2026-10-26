@echo off
chcp 65001 > nul
title Buket Baytar - GitHub Pages Yayina Alma
echo ========================================================
echo   GitHub Pages Yayina Alma Scripti
echo ========================================================
echo.
echo Kodlar GitHub deponuza gonderiliyor...
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   Tebrikler! Kodlariniz basariyla yuklendi!
    echo   Siteniz 1-2 dakika icinde https://buketbaytar.github.io/
    echo   adresinde yayinda olacaktir.
    echo ========================================================
) else (
    echo.
    echo [HATA] Yukleme basarisiz oldu. Lutfen oncelikle GitHub'da
    echo 'buketbaytar.github.io' adinda bir depo olusturdugunuzdan emin olun.
)

echo.
pause
