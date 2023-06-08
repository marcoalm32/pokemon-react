import { useEffect, useState } from 'react';

import './PokeSnapp.scss'
import { ISprites } from '../../models/PokemonDetail.model';
import { ImgType } from '../../models/enums/imgType';

export const PokeSnapp = (item: any) => {

    const [ currentImg, setCurrentImg ] = useState<string>(item?.sprites?.front_default);

    useEffect(() => {
        if(item) {
            setCurrentImg(item?.sprites?.front_default);
        }
    }, [item]);

    const onChangeCurrentImg = (imgType: string) => {
        switch(imgType) {
            case ImgType.FRONT:
                setCurrentImg(item?.sprites?.back_default);
                break;
            case ImgType.BACK: 
                setCurrentImg(item?.sprites?.front_default);
                break;
            case ImgType.FRONT_SHINY:
                setCurrentImg(item?.sprites?.back_shiny);
                break;
        }
    }

    const snapp = 'snapp';
    return (
        <div className={snapp}>
            {item && (
                <img  src={currentImg} 
                    alt='img pokemon'
                    className={`${snapp}__img`}
                    onMouseOver={() => onChangeCurrentImg(ImgType.FRONT)}
                    onMouseOut={() => onChangeCurrentImg(ImgType.BACK)}
                    onClick={() => onChangeCurrentImg(ImgType.FRONT_SHINY)}/>
            )}
        </div>
    )
}