import * as React from 'react';
import { H1, H2, H3, H4, Li, P, PageDiv, Ul } from '../../../components/CustomisedElements/CustomisedElements';
import WarmUp1 from './WarmUp1.png';

const WeeklyFitnessProgram = () => {
    return (
        <PageDiv >
            <H1></H1>

            <H2>1. Explanation of the activity</H2>
            <P>Regular	physical activity is essential to help keep blood glucose levels under control. It is most effective when it includes a combination	of both <em>aerobic exercise</em> (e.g. jogging,	swimming, cycling …) and <em>resistance training</em>, as well as reducing the amount of time spent	being inactive.</P>

            <P>There are established international pediatric exercise guidelines for the pediatric population and a comprehensive pediatric-specific review of exercise in both T1D and Type 2 Diabetes by Pivovarov et al. provides current perspectives and a decision tree-based approach for blood glucose management in children with T1D .</P>

            <P>If you are treated with T1D, staying active can help lower your chances of developing other complications. These can include high blood pressure, heart disease, nerve damage, and vision loss.
            </P>

            <P>Regular exercise may also help improve your overall quality of life.</P>

            <P>Strenuous activity can cause blood sugar to drop. This can lead to low blood sugar, which is called <b>hypoglycemia</b>. Intense bouts of exercise can also cause blood sugar to rise. If it rises above normal levels, it’s known as <b>hyperglycemia</b>.</P>

            <P>Take a moment to learn how you can exercise with type 1 diabetes while keeping blood sugar in a safe range.</P>

            <P>Aerobic exercise involves repeated and continuous movement of large muscle groups . Activities such as walking, cycling, jogging, and swimming rely primarily on aerobic energy-producing systems (day 3 and 4 of the fitness program).</P>

            <P>Resistance (strength) training includes exercises with free weights, weight machines, body weight, or elastic resistance bands (day 1 and 2).</P>

            <P>Flexibility exercises improve range of motion around joints . Balance activities like tai chi and yoga combine flexibility, balance, and resistance activities (day 6).</P>

            <P>Mixed activities, such as interval training or team/individual field sports, are associated with better glucose stability than those that are predominantly aerobic , although variable results have been reported for intermittent, high-intensity exercise (day 5).</P>

            <Ul>
                In our seven day fitness program for T1D young people we have combined all the types of activities described above to take benefit from their impact on different body systems.
                <Li>In type 1 diabetes, aerobic training increases cardio respiratory fitness, decreases insulin resistance, and improves lipid levels and endothelial function.</Li>

                <Li>The effect of resistance exercise on glycemic control in type 1 diabetes is unclear. However, resistance exercise can assist in minimizing risk of exercise-induced hypoglycemia in type 1 diabetes.</Li>

                <Li>Stretching increases range of motion around joints and flexibility but does not affect glycemic control.</Li>

                <Li>Additional carbohydrate intake and/or insulin reductions are typically required to maintain glycemic balance during and after physical activity.</Li>

                <Li>Frequent blood glucose checks are required to implement carbohydrate intake and insulin dose adjustment strategies.</Li>

                <Li>Insulin users can exercise using either basal-bolus injection regimens or insulin pumps, but there are advantages and disadvantages to both insulin delivery methods.</Li>

                <Li>Continuous glucose monitoring during physical activity can be used to detect hypoglycemia when used as an adjunct rather than in place of capillary glucose tests.</Li>
            </Ul>
            <P><b> The target range for blood glucose prior to exercise should ideally be between 90 and 250 mg/dL (5.0 and 13.9 mmol/L).</b></P>

            <P>Carbohydrate intake required will vary with insulin regimens, timing of exercise, type of activity, and more, but it will also depend on starting blood glucose levels.</P>

            <P>Very intense exercise such as sprinting, brief but intense aerobic exercise , and heavy power lifting may promote hyperglycemia, especially if starting blood glucose levels are elevated.
            </P>

            <P>Similarly, combining resistance training (done first) with aerobic training (second) optimizes glucose stability in type 1 diabetes.
            </P>

            <P><strong>Individuals with type 1 diabetes should test for blood ketones if they have           unexplained hyperglycemia (250 mg/dL).<br />
                Exercise should be postponed or suspended if blood ketone levels are elevated (1.5 mmol/L), as blood glucose levels and ketones may rise further with even mild activity.
            </strong></P>

            <P>Regular stretching and appropriate progression of activities should be done to manage joint changes and diabetes-related orthopedic limitations.
            </P>

            <P><strong> Exercise management for young people with T1D is complex and one approach does not fit all.</strong></P>

            <P>Many factors influence an individual’s glycemic response to exercise including the type, intensity and duration of the activity, the amount of insulin on board and the person’s stress/anxiety levels.
            </P>

            <P>To further complicate management, even when all these factors are kept constant, an individual’s response to exercise may or may not be predictable on repeated exercise occasions.
                Diabetes should not prevent individuals from achieving their exercise goals whether these are occasional fun activities or at a more high- performance level. Indeed, many individuals with T1D have gone on to accomplish extraordinary sporting achievements.
            </P>

            <H3>Physical activity program</H3>

            <P>Based on the selected literature, a possible exercise program for people with T1D has been developed.</P>

            <P>The project takes place 3 to 6 times/ week, preferably in the morning.</P>

            <P>The total time of the program is 12 weeks, and can be carried out by both individuals who have or not have access in sport centres.</P>

            <P>The program is designed to fit the possibilities of different target groups about the need of equipments.</P>

            <P><strong>The exercise routine should be supervised by professionals.</strong></P>

            <H4>Day 1 - HIIT (High Intensity Interval Training)</H4>
            <Ul>
                <Li>WARM UP: 10-15 MINUTES</Li>
                <Li>9 EXERCISES</Li>
                <Li>30-45 SECOND WARM UP PER EXERCISE</Li>
            </Ul>

            <Ul>
                <P>Follow this warm up routine before exercising :</P>
                <Li>Jogging</Li>
                <Li>Marching</Li>
                <Li>Back-kicking exercise</Li>
                <Li>Front-kicking exercise</Li>
                <Li>Hands-in-the-air exercise</Li>
                <Li>Foot-touching exercise</Li>
                <Li>Knee-bending exercise</Li>
                <Li>Ankle-holding Stretch</Li>
                <Li>Arm, leg, and torso stretch</Li>
            </Ul>
            <img src={WarmUp1} alt='' />


        </PageDiv>
    );
};

export default WeeklyFitnessProgram;