import { FC } from 'react';

export type DisclaimerProps = {
  classes: {
    [key: string]: string;
  };
};

export const Disclaimer: FC<DisclaimerProps> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <h1 className='font-bold text-3xl w-full'>Disclaimer for Spores Launchpad</h1>
        <p className="mt-5 mb-5 text-base">
          Participation in the Spores Launchpad involves significant risks, including the potential loss of funds. Users
          should only invest what they can afford to lose. The information provided on this platform does not constitute
          financial advice, and participants are encouraged to conduct their own research before engaging in any token
          sales or investments.
        </p>

        <p className="text-base">
          All claims, content, designs, algorithms, estimates, roadmaps, specifications, and performance measurements
          described in this project are made in good faith by{' '}
          <span className="font-bold">Spores Labs, Spores Launchpad, Spores Network</span>, and its affiliates{' '}
          <span className="font-bold">("SL")</span>. It is the responsibility of the reader to verify the accuracy and
          truthfulness of this information. Furthermore, nothing in this project constitutes a solicitation for
          investment. Any content produced by <span className="font-bold">SL</span> or developer resources provided by{' '}
          <span className="font-bold">SL</span> have not been subject to audit and are for educational and inspirational
          purposes only.
        </p>

        <p>
          <span className="font-bold">SL</span> does not encourage, induce, or sanction the deployment, integration, or
          use of any applications in violation of applicable laws or regulations and hereby prohibits any such actions.
          This includes the use of any applications by the reader (a) in violation of export control or sanctions laws
          of the United States or any other applicable jurisdiction; (b) if the reader is located in or ordinarily
          resident in a country or territory subject to comprehensive sanctions administered by the U.S. Office of
          Foreign Assets Control (OFAC); or (c) if the reader is or is working on behalf of a Specially Designated
          National (SDN) or a person subject to similar blocking or denied party prohibitions.
        </p>

        <h2 className="text-2xl md:font-bold mt-5 mb-5">Restricted Countries & Territories:</h2>
        <p className='mb-5'>The following countries and territories are restricted from participating in the Spores Launchpad:</p>

        <ul className='list-disc pl-6 space-y-1'>
          <li>Afghanistan</li>
          <li>American Samoa</li>
          <li>Angola</li>
          <li>Azerbaijan</li>
          <li>Bahamas</li>
          <li>Belarus</li>
          <li>Bosnia and Herzegovina</li>
          <li>Botswana</li>
          <li>Burundi</li>
          <li>Cambodia</li>
          <li>Cameroon</li>
          <li>Canada</li>
          <li>Central African Republic</li>
          <li>Chad</li>
          <li>China</li>
          <li>Congo (Congo-Brazzaville)</li>
          <li>Cuba</li>
          <li>Democratic Republic of the Congo</li>
          <li>Eritrea</li>
          <li>Ethiopia</li>
          <li>Ghana</li>
          <li>Guam</li>
          <li>Guinea</li>
          <li>Guinea-Bissau</li>
          <li>Haiti</li>
          <li>Hong Kong</li>
          <li>Iran</li>
          <li>Iraq</li>
          <li>Laos</li>
          <li>Lebanon</li>
          <li>Libya</li>
          <li>Madagascar</li>
          <li>Mozambique</li>
          <li>Myanmar</li>
          <li>Nicaragua</li>
          <li>North Korea</li>
          <li>Pakistan</li>
          <li>Puerto Rico</li>
          <li>Serbia</li>
          <li>Seychelles</li>
          <li>Singapore</li>
          <li>Somalia</li>
          <li>South Sudan</li>
          <li>Sri Lanka</li>
          <li>Sudan</li>
          <li>Syria</li>
          <li>Tajikistan</li>
          <li>Trinidad and Tobago</li>
          <li>Tunisia</li>
          <li>Turkmenistan</li>
          <li>Uganda</li>
          <li>United States of America</li>
          <li>Uzbekistan</li>
          <li>Vanuatu</li>
          <li>Venezuela</li>
          <li>Yemen</li>
          <li>Zimbabwe</li>
          <li>
          Additionally, participation is restricted from the Crimea region and any non-government controlled areas of
          Ukraine.
          </li>
        </ul>

        

        <p className="mt-5 mb-5 font-base">
          The reader should be aware that U.S. export control and sanctions laws prohibit U.S. persons (and other
          persons that are subject to such laws) from transacting with persons in certain countries and territories or
          that are on the SDN list. As a project based primarily on open-source software, there is a risk that
          sanctioned persons may bypass prohibitions and access the code comprising the Spores blockchain protocol (or
          other project code or applications).
        </p>

        <p className="mt-5 mb-5 font-base">
          Accordingly, there is a risk to individuals that other persons using the Spores blockchain protocol may be
          sanctioned persons and that transactions with such individuals would violate U.S. export controls and
          sanctions law. This risk applies to individuals, organizations, and other ecosystem participants that deploy,
          integrate, or use the Spores blockchain protocol code directly (e.g., as a node operator), as well as
          individuals that transact on the Spores blockchain through light clients, third-party interfaces, and/or
          wallet software.
        </p>

        <p>
          By using this Website (Spores.app), you hereby accept and agree to the Terms and Conditions hereunder as
          legally binding upon you. If you do not wish to comply with these Terms and Conditions, you should not use
          this Website. The Company reserves the right to modify any or all Terms and Conditions at any time without
          notice.
        </p>

        <div className="mt-5 font-base">
          <p>
            If you require any more information or have any questions about our site’s disclaimer, please feel free to
            contact us by email at <a className='font-bold' href="mailto:customersupport@spores.app">customersupport@spores.app</a>
          </p>
        </div>

        <p></p>
      </div>
    </div>
  );
};
