import * as React from 'react';
import DeskBike from './DeskBike.png';
import Gymlib from './Gymlib.png';
import FitbitCare from './FitbitCare.png';
import { H1, H2, Li, P, PageDiv, Ul } from '../../../components/CustomisedElements/CustomisedElements';

const ExerciseAtWork = () => {

  return (
    <PageDiv>
      <H1>Mens sana in corpore sano - A Sound mind in a sound
        body (B-SPORT+)</H1>

      <H2>Explanation of the activity</H2>

      <P>The aim of the activity is to increase physical activity among people with an occupational disease
        (such as depression and burnout) and other employees at the work floor. We want to offer
        inclusive low-threshold and local initiatives to companies to increase participation and access to
        sports for their employees.</P>

      <P>
        Practicing sports at the work floor can have various formats.
        The employer can encourage its employees to ‘go to work’ in an active way.
        This can be by bike or by foot for example. Another possibility of providing sport activities for employees is by installing sport infrastructure that can be used during the lunch break or installing dynamic office furniture for example.
        This way, workers can practice sports really at the work floor during working hours. It is also possible to encourage employees to practice sports after the office hours, by providing a gym subscription or organizing small challenges and competitions among the colleagues for example. Of course, employers can also invest in all of these formats. Certainly in these times of homeworking, employees can use some tools to be more active and practice sports.
      </P>

      <P>Some good existing practices already rolled out in Belgium, are:</P>

      <Ul>
        <Li><b>Sport at work:</b> wants to support companies in improving the level of movement and sports
          participation of their employees at the workplace. This is done by organizing walks or yoga
          sessions during the lunch break, installing sport facilities or providing dynamic office
          furniture (like desk bikes, sit-stand desk etc.) or by nudging for example.
          <img src={DeskBike} alt='Every 3 steps you make going up the stairs burn 1 calorie.' />
        </Li><br />

        <Li><b>‘No steps, no glory’-challenge</b>: challenges companies and organizations to participate in
          encouraging the employees to take 10 000 steps each day for a month.</Li><br />

        <Li><b>Wellbeing@Work:</b> supports companies to reduce absenteeism, to find a way to encourage
          employees to exercise more, to concentrate better and to adopt a better posture, guide the employees personally or in group to experience less stress, prevention against burnout
          and depression, better communication and time management, create an ideal working
          environment and higher job satisfaction for employees. </Li><br />

        <Li><b>Bicycle allowance:</b> this is some sort of kilometre allowance that an employer can give to its
          employees who make all or part of their home-work journey by bicycle. The employer can
          choose himself how much he wants to offer per kilometre, but until €0.24/km it is free from
          taxes. This way it is a good financial incentive for both employers and employees to travel
          partly to work by bike. </Li><br />

        <Li><b>Corazón:</b> the program contributes to more productivity, less absenteeism, less staff costs
          and a more positive work environment. Practicing more sport activities can be achieved by
          sporting at the work place during or after office hours, in team building activities, small
          group trainings, personal training sessions and more.</Li><br />

        <Li><b>Gymlib:</b> some sort of sports voucher that gives access to more than 3500 sports and
          wellness facilities. The target group of this voucher is employees, to strengthen their quality
          of life and overall wellbeing.
          <img src={Gymlib} alt='' />
        </Li><br />

        <Li><b>Fitbit Care:</b> this health platform motivates employees to own their health across the care
          continuum, from general wellness to chronic condition management. It is a deeply
          personal health experience, powered by trackers and smartwatches, apps, digital
          interventions and human health coaching, that meets employees where they are in their
          health and safety journey, and engages them to take the next step.
          <img src={FitbitCare} alt='Fitbit Care promotes phsyical health, emotional well-being, work place readiness, and connectedness.' />
        </Li><br />
      </Ul>

    </PageDiv >
  );
};

export default ExerciseAtWork;