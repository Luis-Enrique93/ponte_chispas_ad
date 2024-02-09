import { createClient, Client, SearchOptions } from 'ldapjs'


export class ActiveDirectory
{
    public static client: Client


    private constructor(ip, port, user, password) 
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

        ActiveDirectory.client = createClient({
            url: `ldap://${ip}:${port}`,
            reconnect: true,
        })

        console.log('Active Directory client:')
        console.log(ActiveDirectory.client)
    }


    public static Start(ip, port, user, password)
    {
        if (!ActiveDirectory.client)
            new ActiveDirectory(ip, port, user, password)
    }
}