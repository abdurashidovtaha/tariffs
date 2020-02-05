import React from 'react'
import Tarif from '../Tarif/Tarif';

export default function TariffList(props) {
    const tarifs = [
        {
            id: 1, name: "Везде онлайн", fee: "", price: 500, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: true,
            hitUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D1%85%D0%B8%D1%82-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6-png-4.png",
            internetAmount: 40, internetMemory: "ГБ", internetUnlimit: "+безлимитные",
            socialMediaIcones: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'
            ],
            socialMedia: true, roaming: true,
            callMinutesAmount: 500, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 50, smsText: "SMS",
        },
        {
            id: 2, name: "Мой онлайн", fee: "", price: 400, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: false, hitUrl: "",
            internetAmount: 15, internetMemory: "ГБ", internetUnlimit: "+безлимитные",
            socialMediaIcones: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'
            ],
            socialMedia: true, roaming: true,
            callMinutesAmount: 500, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 0, smsText: "SMS",
        },
        {
            id: 2, name: "Мой онлайн+", fee: "", price: 700, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: false, hitUrl: "",
            internetAmount: 40, internetMemory: "ГБ", internetUnlimit: "+безлимитные",
            socialMediaIcones: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'
            ],
            socialMedia: true, roaming: true,
            callMinutesAmount: 800, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 0, smsText: "SMS",
        },
        {
            id: 2, name: "Мой разговор", fee: "", price: 200, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: false, hitUrl: "",
            internetAmount: 2, internetMemory: "ГБ", internetUnlimit: "",
            socialMediaIcones: [],
            socialMedia: false, roaming: true,
            callMinutesAmount: 200, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 0, smsText: "SMS",
        },
        {
            id: 2, name: "Мой Tele2", fee: "", price: 7, rubleSign: "₽", slashTime: "/ДЕНЬ", hit: false, hitUrl: "",
            internetAmount: 5, internetMemory: "ГБ", internetUnlimit: "",
            socialMediaIcones: [],
            socialMedia: false, roaming: true,
            callMinutesAmount: 0, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 0, smsText: "SMS",
        },
        {
            id: 2, name: "Безлимит", fee: "", price: 650, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: false, hitUrl: "",
            internetAmount: 0, internetMemory: "", internetUnlimit: "БЕЗЛИМИТНЫЙ ИНТЕРНЕТ",
            socialMediaIcones: [],
            socialMedia: true, roaming: true,
            callMinutesAmount: 500, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 50, smsText: "SMS",
        },
        {
            id: 2, name: "Премиум", fee: "", price: 1500, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: false, hitUrl: "",
            internetAmount: 50, internetMemory: "ГБ", internetUnlimit: "",
            socialMediaIcones: [],
            socialMedia: true, roaming: true,
            callMinutesAmount: 2000, callMinutes: "мин", callUnlimit: "+ безлимит на Tele2 России",
            smsAmount: 500, smsText: "SMS",
        },
        {
            id: 2, name: "Классический", fee: "Без абонентской платы", price: 0, rubleSign: "₽", slashTime: "/МЕСЯЦ",
            hit: false, hitUrl: "",
            internetAmount: 0, internetMemory: "ГБ", internetUnlimit: "",
            socialMediaIcones: [],
            socialMedia: false, roaming: true,
            callMinutesAmount: 0, callMinutes: "мин", callUnlimit: "",
            smsAmount: 0, smsText: "SMS",
        },
        {
            id: 2, name: "Интернет для устройств", fee: "Без абонентской платы", price: 0, rubleSign: "₽", slashTime: "/МЕСЯЦ",
            hit: false, hitUrl: "",
            internetAmount: 0, internetMemory: "ГБ", internetUnlimit: "",
            socialMediaIcones: [],
            socialMedia: false, roaming: true,
            callMinutesAmount: 0, callMinutes: "мин", callUnlimit: "",
            smsAmount: 0, smsText: "SMS",
        },
        {
            id: 2, name: "Интернет для вещей", fee: "", price: 300, rubleSign: "₽", slashTime: "/МЕСЯЦ", hit: false, hitUrl: "",
            internetAmount: 300, internetMemory: "МБ", internetUnlimit: "",
            socialMediaIcones: [],
            socialMedia: false, roaming: true,
            callMinutesAmount: 30, callMinutes: "мин", callUnlimit: "",
            smsAmount: 100, smsText: "SMS",
        },
    ];

    return (
        <div>
            <h1 className="title">{props.title}</h1>
            {tarifs.map(o => <Tarif tarif={o} />)}
        </div>
    )
}
