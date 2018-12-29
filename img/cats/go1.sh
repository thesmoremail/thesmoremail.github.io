mkdir photos-Optimized;for photos in *.png;do convert -verbose $photos -quality 85% -resize 100x100 ./photos-Optimized/$photos ; done
