import { createClient, Client } from 'ldapjs'


export class ActiveDirectory
{
    public static client: Client


    private constructor(ip, ip2, port, user, password) 
    {
        console.log('Active Directory: Starting client...')

        console.log('creando cliente')
        ActiveDirectory.client = createClient({
            url: [
                `ldap://${ip}:${port}`,
                `ldaps://${ip2}:${port}`
            ],
            reconnect: true,
        })

        console.log('logueando')
        ActiveDirectory.client.bind(user, password, (err) =>
        {
            if (err)
                console.log('err:' + err)

            else
            {
                console.log('success')
                console.log('logueado!')
            }
        })

        return 'success'
    }


    public static Start(ip, ip2, port, user, password)
    {
        if (!ActiveDirectory.client)
            new ActiveDirectory(ip, ip2, port, user, password)
    }
}