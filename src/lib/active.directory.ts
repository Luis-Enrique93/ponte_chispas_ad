import { createClient, Client } from 'ldapjs'


export class ActiveDirectory
{
    public static client: Client


    private constructor(ip, ip2, port, user, password) 
    {
        console.log('Active Directory: Starting client...')

        // ActiveDirectory.client = createClient({
        //     url: `ldap://127.0.0.1:10389`,
        // })

        // ActiveDirectory.client.bind('uid=admin,ou=system', 'secret', (err) =>
        // {
        //     // assert.ifError(err);
        //     if (err)
        //         console.log('err:' + err)

        //     else
        //         console.log('success')
        // })

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
            // assert.ifError(err);
            if (err)
                console.log('err:' + err)

            else
            {
                console.log('success')
                console.log('logueado!')
            }
        })



        // console.log('Active Directory client:')
        // console.log(ActiveDirectory.client)

        // const ad = new activedirectory({
        //     url: `ldap://${ip}:${port}`,
        //     baseDN: 'dc=bot,dc=corp',
        // })

        // console.log(ad)

        // ad.authenticate(user, password, (err, auth) =>
        // {
        //     console.log('authenticating...')

        //     if (err)
        //     {
        //         console.log('ERROR: ' + JSON.stringify(err))
        //         return
        //     }

        //     if (auth)
        //     {
        //         console.log('Authenticated!')
        //     }
        //     else
        //     {
        //         console.log('Authentication failed!')
        //     }
        // })

        return 'success'
    }


    public static Start(ip, ip2, port, user, password)
    {
        if (!ActiveDirectory.client)
            new ActiveDirectory(ip, ip2, port, user, password)
    }
}