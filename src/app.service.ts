import { Injectable } from '@nestjs/common'
import { ActiveDirectory } from './lib/active.directory'
import { SearchOptions } from 'ldapjs'


@Injectable()
export class AppService 
{
    public opts: SearchOptions = {
        filter: '(objectClass=*)',
        // scope: 'base', // no ver sub carpetas
        scope: 'sub', // para ver sub carpetas
        // attributes: ['sn', 'cn']
    }


    constructor() { }


    public async getHello(search: string = 'cn=users,dc=bot,dc=corp')
    {
        ActiveDirectory.client.search("OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp", this.opts, (err, res) =>
        {
            res.on('searchRequest', (searchRequest) =>
            {
                console.log('searchRequest: ', searchRequest.messageId)
            })

            // este es el que importa
            res.on('searchEntry', (entry) =>
            {
                console.log('----- start -----')

                console.log(entry?.pojo)

                for (const value of entry?.pojo.attributes)
                {
                    console.log(value.values)
                }

                console.log('----- end -----')
            })

            res.on('searchReference', (referral) =>
            {
                console.log('referral: ' + referral.uris.join())
            })

            res.on('error', (err) =>
            {
                console.error('error: ' + err.message)
            })

            res.on('end', (result) =>
            {
                console.log('status: ' + result.status)
            })
        })

        return 'Hello World!'
    }
}
