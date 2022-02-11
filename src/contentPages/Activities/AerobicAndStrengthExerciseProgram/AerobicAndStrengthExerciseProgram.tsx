import * as React from 'react';
import { PageDiv, H1, H2, H3, H4, P, Ul, Li } from '../../../components/CustomisedElements/CustomisedElements';
import WarmUpExercise1 from './WarmUpExercise1.png';
import AerobicExercise2 from './AerobicExercise2.png';
import StrengthExercise3 from './StrengthExercise3.png';
import StrengthExercise4 from './StrengthExercise4.png';
import StrengthExercise5 from './StrengthExercise5.png';
import StrengthExercise6 from './StrengthExercise6.png';
import StretchingAndRelaxation7 from './StretchingAndRelaxation7.png';
import StretchingAndRelaxation8 from './StretchingAndRelaxation8.png';
import StretchingAndRelaxation9 from './StretchingAndRelaxation9.png';
import StretchingAndRelaxation10 from './StretchingAndRelaxation10.png';
import StretchingAndRelaxation11 from './StretchingAndRelaxation11.png';
import StretchingAndRelaxation12 from './StretchingAndRelaxation12.png';
import StretchingAndRelaxation13 from './StretchingAndRelaxation13.png';



const AerobicAndStrengthExerciseProgram = () => {
    return (
        <PageDiv >
            <H1>Personal Well-being<br />
                Aerobic and strength exercise program for people with
                depression and / or stress (B-SPORT +)</H1>

            <H2>1. Explanation of the activity</H2>
            <P>Based on the selected literature, a possible exercise program for people with depression has been
                developed.</P>
            <P>The project takes place twice a week, on Tuesdays from 6:00 p.m. to 7:30 p.m. and on Thursdays from 6:00 p.m. to 7:00 p.m. The total time of the project is 12 weeks, and can be carried out in institutions that have the appropriate material such as gyms. A limit of two absences per month cannot be exceeded. The exercise routine should be supervised by professionals.</P>

            <H3>Tuesday</H3>

            <H4>Warm-up exercise (5 minutes)</H4>
            <Ul>
                <Li>2 minutes of joint mobility:
                    <Ul>
                        <Li>Neck: lateral and forward-back rotation. 15 repetitions each.</Li>
                        <Li>Shoulders: forward-back rotation. 15 repetitions each.</Li>
                        <Li>Hips: 360º rotation. 15 repetitions in each direction.</Li>
                        <Li>Knees: left / right rotation. 15 repetitions each way.</Li>
                        <Li>Ankles: left / right rotation. 10 repetitions each way.</Li>
                    </Ul>
                </Li>

                <Li>3 minutes of stretching:
                    <Ul>
                        <Li>Arms: we cross the arm in front of the chest and press with the other hand. 15
                            seconds each arm.</Li>
                        <Li>Shoulders: we raise the arm, holding the elbow flexing down. 15 seconds each arm.</Li>
                        <Li>Calves: We place our hands on the wall / support and stretch the leg, supporting the
                            tip of the foot. 15 seconds each leg.</Li>
                        <Li>Quadriceps: Standing, bend one knee and gently stretch with the hand. 15 seconds
                            each leg.</Li>
                        <Li>Adductors: we sit down and look for the tip of the foot with our hand. 15 seconds
                            each leg.</Li>
                    </Ul>
                </Li>
            </Ul>
            <img src={WarmUpExercise1} alt='' />

            <H4>Aerobic exercise (20 minutes)</H4>
            <Ul>
                <Li>Running</Li>
            </Ul>
            <img src={AerobicExercise2} alt='' />

            <H4>Deceleration period (5 minutes)</H4>
            <Ul>
                <Li>Slow down for 5 minutes for heart rate recovery.</Li>
            </Ul>

            <H4>Strength exercise (45 minutes)</H4>
            <Ul>
                <Li>Three sets of 8-12 reps on each machine with 70% of maximum strength capacity:
                    <Ul>
                        <Li>the chest (chest press): 3x12</Li>
                        <img src={StrengthExercise3} alt='' />
                        <Li>back (low row): 3x12</Li>
                        <img src={StrengthExercise4} alt='' />
                        <Li>quadriceps (leg extension): 3x12</Li>
                        <img src={StrengthExercise5} alt='' />
                        <Li>ischium (leg flexion), using the machines: 3x12</Li>
                        <img src={StrengthExercise6} alt='' />
                    </Ul>
                </Li>
            </Ul>

            <H4>Stretching and relaxation (10 minutes)</H4>
            <Ul>
                <Li>Neck: We touch the chest with the chin and exert pressure on the nape with clasped hands.</Li>
                <img src={StretchingAndRelaxation7} alt='' />
                <Li>Arm: with the trunk straight, pass one arm in front of the chest touching the opposite
                    shoulder. Rest the other hand on the elbow and use force.</Li>
                <img src={StretchingAndRelaxation8} alt='' />
                <Li>Back: We sit on our knees, with our buttocks on our heels, stretching our arms as much as
                    possible. After a few seconds we move our hands to the side while continuing to stretch
                    them.</Li>
                <img src={StretchingAndRelaxation9} alt='' />
                <Li>Buttocks: face up, we bend our legs and take it by the knee, using force to bring the knee to
                    the chest.</Li>
                <img src={StretchingAndRelaxation10} alt='' />
                <Li>Twin: we get up and pick up one leg, touching the tip of the other foot with our hands.</Li>
                <img src={StretchingAndRelaxation11} alt='' />
                <Li>Back: We stretch both legs and touch the tips of the feet</Li>
                <img src={StretchingAndRelaxation12} alt='' />
                <Li>Abdominal breathing: Lying down, place your hands, one on your chest and one on your
                    stomach. Inhale through your nose for a few seconds, noticing how the hand on your
                    stomach goes up and the other doesn't. Hold for a few seconds, and exhale through your
                    mouth gently until your abdominal muscles contract.</Li>
                <img src={StretchingAndRelaxation13} alt='' />
            </Ul>

            <H3>Thursday</H3>

            <H4>Warm-up exercise (5 minutes)</H4>
            <Ul>
                <Li>2 minutes of joint mobility:
                    <Ul>
                        <Li>Neck: lateral and forward-back rotation. 15 repetitions each.</Li>
                        <Li>Shoulders: forward-back rotation. 15 repetitions each.</Li>
                        <Li>Hips: 360º rotation. 15 repetitions in each direction.</Li>
                        <Li>Knees: left / right rotation. 15 repetitions each way.</Li>
                        <Li>Ankles: left / right rotation. 10 repetitions each way.</Li>
                    </Ul>
                </Li>

                <Li>3 minutes of stretching:
                    <Ul>
                        <Li>Arms: we cross the arm in front of the chest and press with the other hand. 15
                            seconds each arm.</Li>
                        <Li>Shoulders: we raise the arm, holding the elbow flexing down. 15 seconds each arm.</Li>
                        <Li>Calves: We place our hands on the wall / support and stretch the leg, supporting the
                            tip of the foot. 15 seconds each leg.</Li>
                        <Li>Quadriceps: Standing, bend one knee and gently stretch with the hand. 15 seconds
                            each leg.</Li>
                        <Li>Adductors: we sit down and look for the tip of the foot with our hand. 15 seconds
                            each leg.</Li>
                    </Ul>
                </Li>
            </Ul>
            <img src={WarmUpExercise1} alt='' />

            <H4>HIIT aerobic and strength exercise (24 minutes)</H4>
            <Ul>
                <Li>High intensity sprint training: 7 sets of 20 seconds with high training intensity.
                    <Ul>
                        <Li>Material: exercise bike.</Li>
                        <Li>Duration of effort: 30 seconds with high intensity. </Li>
                        <Li>Micropauses: 30 seconds after each effort.</Li>
                        <Li>Macropause: 4 minutes. Every 4 repetitions a pause of more than 4 minutes to
                            repeat the next series.</Li>
                        <Li>Reps: 4</Li>
                        <Li>Series: 3</Li>
                    </Ul>
                </Li>
            </Ul>

            <H4>Stretching and relaxation (10 minutes)</H4>
            <Ul>
                <Li>Neck: We touch the chest with the chin and exert pressure on the nape with clasped hands.</Li>
                <img src={StretchingAndRelaxation7} alt='' />
                <Li>Arm: with the trunk straight, pass one arm in front of the chest touching the opposite
                    shoulder. Rest the other hand on the elbow and use force.</Li>
                <img src={StretchingAndRelaxation8} alt='' />
                <Li>Back: We sit on our knees, with our buttocks on our heels, stretching our arms as much as
                    possible. After a few seconds we move our hands to the side while continuing to stretch
                    them.</Li>
                <img src={StretchingAndRelaxation9} alt='' />
                <Li>Buttocks: face up, we bend our legs and take it by the knee, using force to bring the knee to
                    the chest.</Li>
                <img src={StretchingAndRelaxation10} alt='' />
                <Li>Twin: we get up and pick up one leg, touching the tip of the other foot with our hands.</Li>
                <img src={StretchingAndRelaxation11} alt='' />
                <Li>Back: We stretch both legs and touch the tips of the feet</Li>
                <img src={StretchingAndRelaxation12} alt='' />
                <Li>Abdominal breathing: Lying down, place your hands, one on your chest and one on your
                    stomach. Inhale through your nose for a few seconds, noticing how the hand on your
                    stomach goes up and the other doesn't. Hold for a few seconds, and exhale through your
                    mouth gently until your abdominal muscles contract.</Li>
                <img src={StretchingAndRelaxation13} alt='' />
            </Ul>
        </PageDiv>
    );
};

export default AerobicAndStrengthExerciseProgram;