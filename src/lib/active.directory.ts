import { createClient, Client, SearchOptions } from 'ldapjs'


export class ActiveDirectory
{
    public static client: Client

    
    private constructor() 
    {
        console.log('Active Directory: Starting client...')

        ActiveDirectory.client = createClient({
            url: `ldap://127.0.0.1:10389`,
        })

        ActiveDirectory.client.bind('uid=admin,ou=system', 'secret', (err) => {
            // assert.ifError(err);
            if (err)
                console.log('err:' + err)

            else
                console.log('success')
        })
    }


    public static Start()
    {
        if (!ActiveDirectory.client)
            new ActiveDirectory()
    }
}