import subprocess


subprocess.call("git add .", shell=True)    
subprocess.call("git commit -m 'produccion'", shell=True)    
subprocess.call("git push origin master", shell=True)    