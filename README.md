# Comandos interesantes

ssh -i "ponte-chispas.pem" admin@18.216.175.121

cd ~/.ssh
eval $(ssh-agent -s)
ssh-add promoton

cd ~/ponte_chispas_ad

docker ps -a

curl "http://localhost:4000/search"


# RECORDATORIO ACTIVE DIRECTORY

- DOCUMENTACION: http://ldapjs.org/client.html

CN = Common Name
OU = Organizational Unit
DC = Domain Component


- FUENTE https://www.ietf.org/rfc/rfc2253.txt  

(rfc2253)

CN      commonName
L       localityName
ST      stateOrProvinceName
O       organizationName
OU      organizationalUnitName
C       countryName
STREET  streetAddress
DC      domainComponent
UID     userid