import * as React from 'react';
import { A, H1, H2, H3, Li, Ol, P, PageDiv, Ul } from '../../../components/CustomisedElements/CustomisedElements';
import ChairTwists from './ChairTwists.png';
import UpwardsPunches from './UpwardsPunches.png';
import Marching from './Marching.png';
import KneeLifts from './KneeLifts.png';
import ArmCurls from './ArmCurls.png';
import ActivityJournal from './ActivityJournal.png';

const ExerciseAtHome = () => {
  return (
    <PageDiv >
      <H1>Love food and live healthy (B-SPORT+)</H1>

      <H2>Explanation of the activity</H2>

      <P>The aim of the activity is to increase physical activity among people with an occupational disease
        (such as depression and burnout) and other employees at the work floor. We want to offer
        inclusive low-threshold and local initiatives to companies to increase participation and access to
        sports for their employees. </P>

      <Ul>
        <Li><b>Eating with diabetes:</b> healthy balanced diet, healthy eating habits,
          cooking tips, meal plans, drinks and diabetes, carbohydrate count, etc.
        </Li><br />
        <Li><b>Sport and dabetes:</b>informing about hypo and how to spot its related warning sign,
          best types of exercise, how to keep active at home, at work, 
          or simply while sitting down, etc.</Li><br />
      </Ul>

      <H3>Five ways to move more while sitting</H3>
      <P>Before you start, make sure you are sitting as upright as possible, with your feet on the ground or a hard surface.
        Repeat each activity <strong>for one minute</strong>. Always check with your GP before starting a new physical activity.
      </P>

      <Ul>
        <Li>
          <b>Chair twists</b>
          <Ol>
            <Li>Slowly turn your upper body to the right while keeping your hips facing forwards.</Li>
            <Li>Count to five and then return to the middle so you are facing forwards.</Li>
            <Li>Repeat, but now turn to the left.</Li>
          </Ol>
          <img src={ChairTwists} alt='' />
        </Li><br />

        <Li><b>Upwards punches</b>
          <Ol>
            <Li>Put yor arms out to your sides with your elbows bent and kuckles pointing up to the ceiling. Your thumbs should face each other. </Li>
            <Li>Slowly punch upwards and then bring your arms back to the starting position.</Li>
          </Ol>
          <img src={UpwardsPunches} alt='' />
        </Li><br />

        <Li><b>Arm curls</b>
          <Ol>
            <Li>Start with your arms hanging naturally. Keep your elbows by your sides and raise your right hand towards your right shoulder. </Li>
            <Li>Bring your right arm back down and repeat with your left arm. </Li>
          </Ol>
          <img src={ArmCurls} alt='' />
        </Li><br />

        <Li><b>Knee lifts</b>
          <Ol>
            <Li>Lift your right knee off the ground and then place it back on the floor.</Li>
            <Li>Repeat with your left knee</Li>
          </Ol>
          <img src={KneeLifts} alt='' />
        </Li><br />

        <Li><b>Marching</b>
          <Ol>
            <Li>Continue with the knee lifts, but this time introduce alternate arm curls each time. This means your right leg should lift at the same time your left arm bends</Li>
          </Ol>
          <img src={Marching} alt='' />
        </Li><br />
      </Ul>

      <P>For more inspiration visit
        <A href='https://www.diabetes.org.uk/move-more/'>diabetes.org.uk/move-more</A>
      </P>
      <P>Those examples have been retrived from Diabetes UK.</P>

      <H3>Activity journal</H3>
      <P>Take some time each week to record your journey and keep track of your successes for the next 10 weeks.
        This will help to keep you motivated to move a little bit more each day.</P>

      <P>The following table is an example of activity journal for people with diabetes to track their progress while introducing movement in their life. </P>
      <A href='./ActivityJournal.pdf'>
        <img src={ActivityJournal} alt='Click here to go to the activity journal example' />
      </A>
    </PageDiv>
  );
};

export default ExerciseAtHome;