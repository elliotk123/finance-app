cd finance-server
call npm run build-server
cd ../finance-app
call npm run package-web
cd ..
mkdir finance-app-package
cd finance-app-package
mkdir web 
mkdir server
cd web
mkdir dist
xcopy c:\git\finance-app\finance-app\dist c:\git\finance-app\finance-app-package\web\dist /O /X /E /H /K
copy c:\git\finance-app\finance-app\server.exe c:\git\finance-app\finance-app-package\web
copy c:\git\finance-app\finance-server\build\app.exe c:\git\finance-app\finance-app-package\server


