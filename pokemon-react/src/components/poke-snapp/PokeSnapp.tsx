import { useEffect, useState } from 'react';

import './PokeSnapp.scss'
import { ISprites } from '../../models/PokemonDetail.model';

export interface IImg {
    key:string;
    value: string;
}

export const PokeSnapp = (item: any) => {

    const [ currentImg, setCurrentImg ] = useState<IImg>({
        key: "front",
        value: ""
    });

    useEffect(() => {
        if(item) {
            setCurrentImg({
                key: "front",
                value: item?.sprites?.front_default
            });
        }
    }, [item]);

    function onChangeCurrentImg() {
        if(currentImg.key == "front") {
            setCurrentImg({
                key: "back",
                value: item?.sprites?.back_default
            })
        }
        if(currentImg.key == "back") {
            setCurrentImg({
                key: "front",
                value: item?.sprites?.front_default
            })
        }
    }

    const snapp = 'snapp';
    return (
        <div className={snapp}>
            {item && (
                <img  src={currentImg.value} 
                    alt='img pokemon'
                    className={`${snapp}__img`}
                    onMouseOver={() => onChangeCurrentImg()}
                    onMouseOut={() => onChangeCurrentImg()}/>
            )}
        </div>
    )
}