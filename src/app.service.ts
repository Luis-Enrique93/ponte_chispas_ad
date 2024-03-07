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


    public async securityGroup()
    {
        ActiveDirectory.client.search("OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp", this.opts, (err, res) =>
        {
            res.on('searchEntry', (entry) =>
            {
                console.log('========================================================================')
                console.log(entry?.pojo)
                console.log(entry?.pojo?.objectName)
                console.log('========================================================================')
            })
            res.on('error', (err) =>
            {
                console.error('error: ' + err.message)
            })

            res.on('end', (result) =>
            {
                console.log('ejecutando end')
                console.log('status: ' + result.status)
            })
        })
    }


    public async getHello(search: string = 'cn=users,dc=bot,dc=corp'): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            const data = []

            ActiveDirectory.client.search("OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp", this.opts, (err, res) =>
            {
                res.on('searchEntry', (entry) =>
                {
                    const obj = {}

                    obj['objectName'] = entry?.pojo?.objectName

                    for (const value of entry?.pojo?.attributes)
                    {
                        obj[value?.type] = value?.values[0]
                    }

                    console.log(obj)

                    data.push(obj)
                })

                res.on('error', (err) =>
                {
                    console.error('error: ' + err.message)
                    reject(err)
                })

                res.on('end', (result) =>
                {
                    console.log('ejecutando end')
                    console.log('status: ' + result.status)
                    resolve(data)
                })
            })
        })
    }
}
