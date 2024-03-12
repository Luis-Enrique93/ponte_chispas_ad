import { Injectable } from '@nestjs/common'
import { ActiveDirectory } from './lib/active.directory'
import { SearchOptions } from 'ldapjs'
import { Cron } from '@nestjs/schedule'


@Injectable()
export class AppService 
{
    public opts: SearchOptions = {
        filter: '(objectClass=*)',
        scope: 'sub', // para ver sub carpetas
    }


    public async searchUsers(search: string = 'OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp'): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            const data = []

            ActiveDirectory.client.search(search, this.opts, (err, res) =>
            {
                res.on('searchEntry', (entry) =>
                {
                    const obj = {}

                    obj['objectName'] = entry?.pojo?.objectName

                    for (const value of entry?.pojo?.attributes)
                    {
                        obj[value?.type] = value?.values.length > 1 ? value.values : value?.values[0]
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


    // @Cron('*/3 * * * *')
    // public handleCron(): void
    // {
    //     ActiveDirectory.client.search("OU=Agents,OU=Banrural I GT,OU=Users Production W10,DC=BOT,DC=corp", this.opts, (err, res) =>
    //     {
    //         res.on('searchEntry', (entry) =>
    //         {
    //             console.log(`cron: ${entry.pojo.objectName}`)
    //         })

    //         res.on('error', (err) =>
    //         {
    //             console.error('error: ' + err.message)
    //         })

    //         res.on('end', (result) =>
    //         {
    //             console.log('ejecutando end')
    //             console.log('status: ' + result.status)
    //         })
    //     })
    // }
}
