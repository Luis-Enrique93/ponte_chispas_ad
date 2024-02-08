import subprocess


class Auto:
    @staticmethod
    def start():
        print('--- start ---')
        subprocess.call('git pull origin master', shell=True)
        subprocess.call('sudo docker-compose -f docker-compose.yaml up --build -d', shell=True)
        subprocess.call('docker system prune -a', shell=True)
        print('--- end ---')


Auto.start()

# docker-compose up --build -d