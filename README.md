ssh -i "ponte-chispas.pem" admin@18.216.175.121

cd ~/.ssh
eval $(ssh-agent -s)
ssh-add promoton

