import React from 'react';
import CardList from '../components/CardList';
import data from '../assets/bSportPlus.json';
import RanNumGenerator from '../features/RanNumGenerator';

const RandomPage: React.FC = () => {
    const { Activites } = data.ExampleOfActivites;
    const cards: object[] = [];
    const randomIntList: number[] = RanNumGenerator(0, Activites.length - 1, 4);

    cards.push({
        partner: Activites[randomIntList[0]].partner,
        content: Activites[randomIntList[0]].targetGroup,
        link: Activites[randomIntList[0]].link,
        logo: Activites[randomIntList[0]].logo
    });
    cards.push({
        partner: Activites[randomIntList[1]].partner,
        content: Activites[randomIntList[1]].challenges,
        link: Activites[randomIntList[1]].link,
        logo: Activites[randomIntList[1]].logo
    });
    cards.push({
        partner: Activites[randomIntList[2]].partner,
        content: Activites[randomIntList[2]].needs,
        link: Activites[randomIntList[2]].link,
        logo: Activites[randomIntList[2]].logo
    });
    cards.push({
        partner: Activites[randomIntList[3]].partner,
        content: Activites[randomIntList[3]].KeySuccessFactors,
        link: Activites[randomIntList[3]].link,
        logo: Activites[randomIntList[3]].logo
    });
    return (<CardList {...cards} />);
};

export default RandomPage;
