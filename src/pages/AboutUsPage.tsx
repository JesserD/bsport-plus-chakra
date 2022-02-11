import * as React from 'react';
import { H1, H2, Li, P, PageDiv, Ul } from '../components/CustomisedElements/CustomisedElements';

export default function AboutUsPage() {
    const [text, setText] = React.useState('');
    const [valid, setVaild] = React.useState(false);

    const removeOldAlert = () => {
        var oldAlert = document.getElementById('alert');
        if (oldAlert)
            document.body.removeChild(oldAlert);
    };

    const addAlert = (aMsg: string) => {
        removeOldAlert();
        var newAlert = document.createElement('label');
        newAlert.setAttribute('role', 'alert');
        newAlert.setAttribute('id', 'alert');
        newAlert.setAttribute('for', 'email');
        var msg = document.createTextNode(aMsg);
        newAlert.appendChild(msg);
        document.body.appendChild(newAlert);
    };

    const handelOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        let aSearchTerm = '';
        let aMsg = '';

        if (event.currentTarget.id.match('name')) {
            aSearchTerm = '';
            aMsg = 'name is invalid';
        }
        else if (event.currentTarget.id.match('email')) {
            aSearchTerm = '@';
            aMsg = 'Email is invalid';
        }
        else if (event.currentTarget.id.match('message')) {
            aSearchTerm = '';
            aMsg = 'Message is invalid';
        }
        let invalid = (event.currentTarget.value.indexOf(aSearchTerm) < 0);
        if (invalid) {
            event.currentTarget.setAttribute('aria-invalid', 'true');
            setVaild(false);
            addAlert(aMsg);
        } else {
            event.currentTarget.setAttribute('aria-invalid', 'false');
            removeOldAlert();
            setVaild(true);
        }
        setText(event.currentTarget.value);
    };

    function checkValidity(aID: string, aSearchTerm: string, aMsg: string) {
        var elem = document.getElementById(aID) as HTMLInputElement;

        if (elem != null) {
            var invalid = (elem.value.indexOf(aSearchTerm) < 0);
            if (invalid) {
                elem.setAttribute('aria-invalid', 'true');
                addAlert(aMsg);
            } else {
                elem.setAttribute('aria-invalid', 'false');
                removeOldAlert();
            }
        }
        return undefined;
    };
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

            <H2>Contact Us</H2>

            <form>
                <fieldset>
                    <legend>Please enter your contact details</legend>
                    <label htmlFor='name'>Your name (required): </label>
                    <input name='name' id='name' aria-required='true' value={text}
                        onChange={handelOnChange}
                        style={{ outline: 'solid #000000' }} />
                    <br /><br />
                    <label htmlFor='email'>E-Mail address (required): </label>
                    <input name='email' id='email' aria-required='true'
                        onChange={handelOnChange}
                        style={{ outline: 'solid #000000' }} /><br />
                    <label htmlFor='email' hidden={valid ? true : false} style={{ color: 'red' }}>
                        E-Mail address is invaild!</label>
                    <br /><br />
                    <label htmlFor='website'>Website (optional): </label>
                    <input name='website' id='website'
                        style={{ outline: 'solid #000000' }} />
                </fieldset>
                <br />
                <label htmlFor='message'>Please enter your message (required): </label>
                <br /><br />
                <textarea name='message' id='message' rows={5} cols={80}
                    style={{ outline: 'solid #000000' }} aria-required='true'></textarea>
                <br /><br />
                <input type='submit' name='submit' value='Send message' style={{ outline: 'solid #000000' }} />
                <br /><br />
                <input type='reset' name='reset' value='Reset form' style={{ outline: 'solid #000000' }} />
            </form>

        </PageDiv>
    );
}