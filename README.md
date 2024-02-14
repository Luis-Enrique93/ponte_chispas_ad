# Comandos interesantes

ssh -i "ponte-chispas.pem" admin@18.216.175.121

cd ~/.ssh
eval $(ssh-agent -s)
ssh-add promoton

cd ~/ponte_chispas_ad

docker ps -a

curl "http://localhost:4000/search?query=ou=users,ou=system"


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





entry: {
    "messageId":2,
    "protocolOp":100,
    "type":"SearchResultEntry",
    "objectName":"ou=users,ou=system",
    "attributes":[],"controls":[]
}

entry: {
    "messageId":2,
    "protocolOp":100,
    "type":"SearchResultEntry",
    "objectName":"cn=mike,ou=users,ou=system",
    "attributes":[
        {"type":"sn","values":["jhon"]},
        {"type":"cn","values":["mike"]}
    ],
    "controls":[]
}

curl "http://localhost:4000/search?query=ou=users,ou=system"
curl "http://localhost:4000/search?query=cn=users,dc=bot,dc=corp"
curl "http://localhost:4000/search?query=OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp"


<!-- query para obtener usuarios de TRT, PTC -->
OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp