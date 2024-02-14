import { createClient, Client } from 'ldapjs'
import * as activedirectory from 'activedirectory'


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

        // ActiveDirectory.client = createClient({
        //     url: [
        //         `ldap://${ip}:${port}/dc=bot,dc=corp`,
        //         `ldaps://${ip2}:${port}/dc=bot,dc=corp`
        //     ],
        //     reconnect: true,
        // })

        // console.log('Active Directory client:')
        // console.log(ActiveDirectory.client)

        const ad = new activedirectory({
            url: `ldap://${ip}:${port}`,
            baseDN: 'dc=bot,dc=corp',
        })

        ad.authenticate(user, password, (err, auth) =>
        {
            if (err)
            {
                console.log('ERROR: ' + JSON.stringify(err))
                return
            }

            if (auth)
            {
                console.log('Authenticated!')
            }
            else
            {
                console.log('Authentication failed!')
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