import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHour } from './utils/convert-hour'
import { AdProps } from './types/Ad'
import { convertMinutes } from './utils/convert-minutes'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return res.json(games)
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId: string = req.params.id
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            weekdays: ad.weekDays.split(','),
            hourStart: convertMinutes(ad.hourStart),
            hourEnd: convertMinutes(ad.hourEnd),
        }
    }))
})

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        },
    })

    return res.json({
        discord: ad.discord,
    })
})

app.post('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    const body: AdProps = req.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHour(body.hourStart),
            hourEnd: convertHour(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })

    return res.status(201).json(ad)
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))