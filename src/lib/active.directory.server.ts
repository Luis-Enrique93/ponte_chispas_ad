import { createServer, Server } from 'ldapjs'
import { ActiveDirectory } from './active.directory'


export class ActiveDirectoryServer
{
    public static server: Server

    
    private constructor() 
    {
        console.log('Active Directory: Starting server...')
        ActiveDirectoryServer.server = createServer()
        
        ActiveDirectoryServer.server.search('o=example', (req, res, next) => {
            console.log('req: ', req)
            console.log('endpoint')

            const obj = {
                dn: req.dn.toString(),
                attributes: {
                    objectclass: ['organization', 'top'],
                    o: 'example'
                }
            }
          
            if (req.filter.matches(obj.attributes))
                res.send(obj)
          
            res.end()
        })

        ActiveDirectoryServer.server.listen(389, '127.0.0.1', ActiveDirectoryServer.OnListen)
    }


    public static Start()
    {
        if (!ActiveDirectoryServer.server)
            new ActiveDirectoryServer()
    }


    private static OnListen(): void
    {
        console.log('server: ', ActiveDirectoryServer.server)

        ActiveDirectory.Start()
    }


    private static Close(): void
    {

    }
}