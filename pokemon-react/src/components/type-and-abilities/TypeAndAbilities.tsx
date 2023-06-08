import { FunctionComponent, useEffect, useState } from "react";

import { BsFire, BsWater, } from 'react-icons/bs';
import { GiFlyingTrout, 
    GiGhost, 
    GiHighGrass, 
    GiHighKick, 
    GiOvermind, 
    GiPoisonBottle, 
    GiStoneSphere,
    GiFairyWand } from 'react-icons/gi';
import { FaDragon } from 'react-icons/fa';
import { AiFillBug, AiFillThunderbolt } from 'react-icons/ai';
import { MdOutlineSevereCold, MdTerrain } from 'react-icons/md';
import { RiEmotionNormalFill } from 'react-icons/ri';
import { SiMediafire } from 'react-icons/si';
import { CgPokemon } from 'react-icons/cg';
import { IGeneric } from "../../models/PokemonDetail.model";

import './TypeAndAbilities.scss';

type typeAndAbilitiesModel = {
    slot: number,
    type: IGeneric,
    ability: IGeneric,
}

export const TypeAndAbilities: FunctionComponent<any> = ({slot, type, ability}: typeAndAbilitiesModel) => {
    const [ selectedIcon, setSelectedIcon ] = useState<any>(<CgPokemon />)

    useEffect(() => {
        let item;
        if(type) {
            item = type;
        }
        if(ability) {
            setSelectedIcon(<SiMediafire />);
            return;
        }
        switch (item?.name) {
            case "fire":
                setSelectedIcon(<BsFire/>);
                break;
            case "water":
                setSelectedIcon(<BsWater/>);
                break;
            case "flying":
                setSelectedIcon(<GiFlyingTrout/>);
                break;
            case "bug":
                setSelectedIcon(<AiFillBug/>)  ;
                break;
            case "normal":
                setSelectedIcon(<RiEmotionNormalFill/>);
                break;
            case "electric":
                setSelectedIcon(<AiFillThunderbolt/>);
                break;
            case "poison":
                setSelectedIcon(<GiPoisonBottle />);
                break;
            case "ground":
                setSelectedIcon(<MdTerrain />)  ;
                break;
            case "grass":
                setSelectedIcon(<GiHighGrass/>);
                break;
            case "rock":
                setSelectedIcon(<GiStoneSphere/>);
                break;
            case "ice":
                setSelectedIcon(<MdOutlineSevereCold/>);
                break;
            case "ghost":
                setSelectedIcon(<GiGhost/>);
                break;
            case "psychic":
                setSelectedIcon(<GiOvermind/>);
                break;
            case "fighting":
                setSelectedIcon(<GiHighKick />);
                break;
            case "dragon":
                setSelectedIcon(<FaDragon />);  
                break;
            case "fairy":
                setSelectedIcon(<GiFairyWand />);
                break;
            default:
                setSelectedIcon(<CgPokemon />);
                break;
        }
    }, [type, ability]);

  const typeAndAbilities = "type-and-abilities";

  return (
    <div className={typeAndAbilities}>
      {selectedIcon && <div className={`${typeAndAbilities}__icon`}>{selectedIcon}</div>}
      <span 
        className={`${typeAndAbilities}__name`}>
            {type ? type?.name[0].toUpperCase() + '' + type?.name.substring(1)
                : ability?.name}
        </span>
    </div>
  );
}