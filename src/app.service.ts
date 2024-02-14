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

    // promotong
    // Administrator
    public async getHello(search: string = 'cn=users,dc=bot,dc=corp')
    {
        ActiveDirectory.client.search(search, this.opts, (err, res) =>
        {
            res.on('searchRequest', (searchRequest) =>
            {
                console.log('searchRequest: ', searchRequest.messageId)
            })

            // este es el que importa
            res.on('searchEntry', (entry) =>
            {
                console.log('-----')
                console.log(entry?.pojo)
                console.log(entry?.pojo.attributes[0].values)
                console.log('-----')
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
