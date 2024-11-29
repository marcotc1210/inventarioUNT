#!/bin/bash
cd api
php artisan serve &
sleep 2
cd ../reactapp
npm run dev