import * as React from 'react';
import { H1, H2, Li, P, PageDiv, Ul } from '../components/CustomisedElements/CustomisedElements';

export default function AboutUsPage() {
    return (
        <PageDiv >
            <H1>About us</H1>

            <P>Active lifestyles are associated with numerous physical developments,
                they enhance feelings of energy,
                well-being and independence,
                reduce the risk of many diseases including cognitive decline and dementia.</P><br />
            <P>People with disabilities can experience limitations in hearing, vision,
                mobility or cognition which
                may impact on the level of activity if appropriate support is not available.
                In fact, and according to Active Lives Adult Survey November 2017-18,
                Disabled adults are twice as likely as non-disabled adults to be physically inactive
                (42 per cent vs 21 per cent).</P><br />
            <P>BSPORT+ recognizes how important is to analyse and identify factors that motivate
                and activate people with disabilities to establish pre-conditions for further actions
                at all levels.</P><br />

            <H2>Objectives</H2>

            <P>BSPORT+ seeks the promotion of an active participation of people with disabilities in
                physical/sport activities and their adoption of healthier lifestyles through:
            </P><br />

            <Ul>
                <Li>Creating a solid knowledge basis and generate evidence on the attitudes, motivations,
                    barriers and habits of people with disabilities, to support the action.</Li>
                <Li>Generating a comprehensive provision on all existing assistive sport technology solutions
                    suitable for people with disabilities.</Li>
                <Li>Producing a need-oriented capacity building programme tailored-made to professionals
                    working with people with disabilities.</Li>
                <Li>Design a policy framework and establish pre-conditions to public innovations and
                    professional initiatives towards the activation of people with disabilities.</Li>
            </Ul><br />
        </PageDiv>
    );
}