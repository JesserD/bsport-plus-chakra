import React from 'react';
import CardList from '../components/CardList';
import data from '../assets/bSportPlus.json';


interface LearningOutcomesProps {
    category: string
}
interface IActivity {
    title: string;
    partner: string;
    link: string;
    logo: string
    targetGroup: string;
    needs: string;
    challenges: string;
    references: Object[];
    KeySuccessFactors: string
}
interface IExcerciseProgram {
    title: string;
    partner: string;
    link: string;
    logo: string
}
const CardPage: React.FC<LearningOutcomesProps> = ({ category }) => {
    const { Activites } = data.ExampleOfActivites;
    const { Exercise } = data.ExampleOfExcerciseProgram;
    const cards: object[] = [];

    if (category.match('Activities')) {
        Exercise.forEach(({ title, partner, link, logo }: IExcerciseProgram) => {
            cards.push({ partner: partner, content: title, link: link, logo: logo });
        });
        return (<CardList {...cards} />);
    }
    Activites.forEach(({ partner, targetGroup, challenges, KeySuccessFactors, needs, title, link, logo }: IActivity) => {
        let newObj = {};
        if (category.match('Disabilities'))
            newObj = { partner: partner, content: targetGroup, link: link, logo: logo };
        else if (category.match('Challenges'))
            newObj = { partner: partner, content: challenges, link: link, logo: logo };
        else if (category.match('Key Success Factors'))
            newObj = { partner: partner, content: KeySuccessFactors, link: link, logo: logo };
        else if (category.match('Activity Titles'))
            newObj = { partner: partner, content: title, link: link, logo: logo };
        else if (category.match('Needs'))
            newObj = { partner: partner, content: needs, link: link, logo: logo };
        else { }
        cards.push(newObj);
    });
    return (<CardList {...cards} />);
};
export default CardPage;
