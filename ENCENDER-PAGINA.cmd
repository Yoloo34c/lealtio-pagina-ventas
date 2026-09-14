@echo off
setlocal
title Lealtio - Vista previa local
cd /d "%~dp0"

powershell.exe -NoProfile -Command "try { $respuesta = Invoke-WebRequest -Uri 'http://127.0.0.1:5173/' -UseBasicParsing -TimeoutSec 2; if ($respuesta.StatusCode -eq 200) { exit 0 } }; exit 1" >nul 2>nul
if not errorlevel 1 (
  echo La pagina de Lealtio ya esta encendida.
  start "" "http://127.0.0.1:5173/#inicio"
  timeout /t 2 /nobreak >nul
  exit /b 0
)

where node >nul 2>nul
if not errorlevel 1 (
  set "NODE_EXE=node"
  goto :node_ready
)

set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%NODE_EXE%" goto :node_ready

echo No se encontro Node.js para encender la pagina.
echo Abre el proyecto desde Codex y escribe: enciende la pagina.
pause
exit /b 1

:node_ready
echo Encendiendo la pagina de Lealtio...
echo.
echo La pagina se abrira en unos segundos.
echo Deja esta ventana abierta mientras quieras verla.
echo Para apagarla, cierra esta ventana.
echo.

start "" powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 3; Start-Process 'http://127.0.0.1:5173/#inicio'"
"%NODE_EXE%" "node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5173

echo.
echo La pagina se apago.
pause
