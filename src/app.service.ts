import { Injectable } from '@nestjs/common'
import { ActiveDirectory } from './lib/active.directory'
import { SearchOptions } from 'ldapjs'


@Injectable()
export class AppService 
{
    public opts: SearchOptions = {
        filter: '(objectClass=*)',
        scope: 'sub',
        attributes: ['dn', 'sn', 'cn']
    }


    constructor() { }


    public async getHello()
    {
        ActiveDirectory.client.search('', this.opts, (err, res) =>
        {
            res.on('searchRequest', (searchRequest) =>
            {
                console.log('searchRequest: ', searchRequest.messageId)
            })

            // este es el que importa
            res.on('searchEntry', (entry) =>
            {
                console.log('entry: ' + JSON.stringify(entry.pojo))
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
