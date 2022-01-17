import * as React from 'react';

export default function AboutUsPage() {

    const removeOldAlert = () => {
        var oldAlert = document.getElementById("alert");
        if (oldAlert)
            document.body.removeChild(oldAlert);
    };

    const addAlert = (aMsg: string) => {
        removeOldAlert();
        var newAlert = document.createElement("div");
        newAlert.setAttribute("role", "alert");
        newAlert.setAttribute("id", "alert");
        var msg = document.createTextNode(aMsg);
        newAlert.appendChild(msg);
        document.body.appendChild(newAlert);
    };

    const checkValidity = (aID: string, aSearchTerm: string, aMsg: string) => {
        var elem = document.getElementById(aID) as HTMLInputElement;
        if (elem != null) {
            var invalid = (elem.value.indexOf(aSearchTerm) < 0);
            if (invalid) {
                elem.setAttribute("aria-invalid", "true");
                addAlert(aMsg);
            } else {
                elem.setAttribute("aria-invalid", "false");
                removeOldAlert();
            }
        }
        return undefined;
    };
    return (
        <div style={{ width: '60%' }} >
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'red' }}>About us</h1>

            <p>Active lifestyles are associated with numerous physical developments,
                they enhance feelings of energy,
                well-being and independence,
                reduce the risk of many diseases including cognitive decline and dementia.</p><br />
            <p>People with disabilities can experience limitations in hearing, vision,
                mobility or cognition which
                may impact on the level of activity if appropriate support is not available.
                In fact, and according to Active Lives Adult Survey November 2017-18,
                Disabled adults are twice as likely as non-disabled adults to be physically inactive
                (42 per cent vs 21 per cent).</p><br />
            <p>BSPORT+ recognizes how important is to analyse and identify factors that motivate
                and activate people with disabilities to establish pre-conditions for further actions
                at all levels.</p><br />

            <h2 style={{ fontSize: '25px', fontWeight: 'bold', color: 'red' }}>Objectives</h2>

            <p>BSPORT+ seeks the promotion of an active participation of people with disabilities in
                physical/sport activities and their adoption of healthier lifestyles through:
            </p><br />

            <ul>
                <li>Creating a solid knowledge basis and generate evidence on the attitudes, motivations,
                    barriers and habits of people with disabilities, to support the action.</li>
                <li>Generating a comprehensive provision on all existing assistive sport technology solutions
                    suitable for people with disabilities.</li>
                <li>Producing a need-oriented capacity building programme tailored-made to professionals
                    working with people with disabilities.</li>
                <li>Design a policy framework and establish pre-conditions to public innovations and
                    professional initiatives towards the activation of people with disabilities.</li>
            </ul><br />

            <h2 style={{ fontSize: '25px', fontWeight: 'bold', color: 'red' }}>Contact Us</h2>

            <form>
                <fieldset>
                    <legend>Please enter your contact details</legend>
                    <label htmlFor='name'>Your name (required): </label>
                    <input name='name' id='name' aria-required='true'
                        onBlur={checkValidity('name', ' ', 'Invalid name entered!')}
                        style={{ outline: 'solid #000000' }} />
                    <br /><br />
                    <label htmlFor='email'>E-Mail address (required): </label>
                    <input name='email' id='email' aria-required='true'
                        onBlur={checkValidity('email', '@', 'Invalid e-mail address')}
                        style={{ outline: 'solid #000000' }} />
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

        </div>
    );
}