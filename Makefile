deploy:
	rsync -avz --cvs-exclude --exclude docker-compose.yml --exclude Makefile  . ../homepage/
