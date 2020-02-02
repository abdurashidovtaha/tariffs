import React from 'react'

export default function Tarif({ tarif }) {
    let hitClass = "";
    tarif.hit ? hitClass = "picture" : hitClass = "nothing";

    return (
        <div className="tarifs">
            <div className="block f">
                <h4 className="name">{tarif.name}</h4>
                {tarif.hit && <img src={tarif.hitUrl} alt="hitPic" className="hit"/>}
                <p>{tarif.fee && tarif.fee}</p>
                <div className="price">{tarif.price !== 0 && tarif.price}
                    <div className="right">
                        <div className="rubleSign">{tarif.price !== 0 && tarif.rubleSign}</div>
                        <div className="slashTime">{tarif.price !== 0 && tarif.slashTime}</div>
                    </div>
                </div>
            </div>
            <div className="block">
                <h3 className="internetAmount">{tarif.internetAmount !== 0 && tarif.internetAmount}
                    <span className="internetMemory">{tarif.internetAmount !== 0 && tarif.internetMemory}</span>
                </h3>
                <span className="internetUnlimit">{tarif.internetUnlimit !== 0 && tarif.internetUnlimit}</span>
                <div className="socialIcons">
                    {tarif.socialMedia && tarif.socialMediaIcones.map(o => <img src={o} alt="mediaIcon" className="icon"/>)}
                </div>
                <div className="socialMedia">{tarif.socialMedia}</div>
                <div className="roaming">{tarif.roaming}</div>
            </div>
            <div className="block">
                <p className="callMinutesAmount">{tarif.callMinutesAmount !== 0 && tarif.callMinutesAmount}
                    <span className="callMinutes">{tarif.callMinutesAmount !== 0 && tarif.callMinutes}</span>
                </p>
                <span className="callUnlimit">{tarif.callUnlimit !== 0 && tarif.callUnlimit}</span>
            </div>
            <div className="block">
                <p className="smsAmount">{tarif.smsAmount !== 0 && tarif.smsAmount}
                    <span className="smsText">{tarif.smsAmount !== 0 && tarif.smsText}</span>
                </p>
            </div>
        </div>
    )
}
