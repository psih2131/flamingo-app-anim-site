<template>
    <main class="main legal-main">
        <section class="legal-sec">
            <div class="container">
                <div class="legal-container">
                    <div class="policy__headline">
                      <p class="legal-sec__date">Last updated November 10, 2022</p>
                      <h1 class="legal-sec__title">Privacy Notice</h1>
                    </div>
                    <div class="legal-sec__subtitle">
                      <p>
                        This privacy notice for AccuraSoft Ltd., doing business as "Flamingo – Travel Days Tracker app" 
                        <span> ("Flamingo", "Flamingo Tracker", "Flamingo – Travel Days Tracker", “we”, “us”, or “our”),</span>
                        describes how and why we might collect, store, use, and/or share
                        <span>( 'process' )</span>
                        your information when you use our services
                        <span> ('Services') ,</span> such as when you:
                      </p>
                    </div>

                    <div class="legal-sec__text-wrapper text-container">
                      <div>
                        <ul>
                          <li>Download and use our mobile application (Flamingo – Travel Days Tracker), and use of the <nuxt-link to="/">https://flamingotracker.com</nuxt-link> website or any other application or website of ours that links to this privacy notice</li>
                          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                        </ul>
                        <p>
                          <b> Questions or concerns? </b> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@flamingotracker.com .
                        </p>
                      </div>

                      <div>
                        <h2>
                          SUMMARY OF KEY POINTS
                        </h2>
                        <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click <a style="color: blue" @click="scrollTo('whatInformationDoWeCollect')">here </a> to go directly to our table of contents.</p>
                        <p><b> What personal information do we process?</b> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with AccuraSoft Ltd. and the Services, the choices you make, and the products and features you use. Click  <a  style="color: blue" @click="scrollTo('personalInformation')">here </a>  to learn more.</p>
                        <p><b>Do we process any sensitive personal information? </b>We do not process sensitive personal information.</p>
                        <p><b>How do we process your information?</b>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click <a style="color: blue" @click="scrollTo('WhatLegalBassesDoWeRely')">here</a> to learn more.</p>
                        <p><b>In what situations and with which types of parties do we share personal information? </b> We may share information in specific situations and with specific categories of third parties. Click <a style="color: blue" @click="scrollTo('whenAndWithWhomDo')">here</a> to learn more.</p>
                        <p><b>How do we keep your information safe? </b>  We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click <a style="color: blue">here</a> to learn more.</p>
                        <p><b>What are your rights?</b>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click <a style="color: blue" target="_blank" href="https://app.termly.io/notify/22e130d1-e7f1-461b-9567-bbd832d403d6" >here</a> to learn more.</p>
                        <p><b>How do you exercise your rights?</b>The easiest way to exercise your rights is by filling out our data subject request form available <a style="color: blue"  target="_blank" href="https://app.termly.io/notify/22e130d1-e7f1-461b-9567-bbd832d403d6" >here</a> , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                        <p>Want to learn more about what AccuraSoft Ltd. does with any information we collect? Click <a @click="scrollTo('whatInformationDoWeCollect')" style="color: blue">here</a> to review the notice in full.</p>
                      </div>

                      <div>
                        <h2>
                          TABLE OF CONTENTS
                        </h2>
                        <div class="table_of_contents">
                          <div v-for="(item, key) in titles" :key="key" @click="scrollTo(`${item.value}`)">{{item.text}}</div>
                        </div>
                        <p></p>
                      </div>

                      <div class="whatInformationDoWeCollect">
                        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
                        <p class="personalInformation">
                          <b>Personal information you disclose to us</b>
                        </p>
                        <p>
                          <b>In Short:</b>
                          <em>
                            We collect personal information that you provide to us.
                          </em>
                        </p>
                        <p>
                          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        </p>
                        <p>
                          <b>Personal Information Provided by You.</b>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                          <ul>
                            <li>names</li>
                          </ul>
                        </p>
                        <p>
                          <b>Sensitive Information. </b>We do not process sensitive information.
                        </p>
                        <p>
                          <b>Payment Data.</b> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Apple. You may find their privacy notice link(s) here: <a style="color: blue" target="_blank" href="https://www.apple.com/legal/privacy/">https://www.apple.com/legal/privacy.</a>
                        </p>
                        <p>
                          <b>Application Data. </b>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                        </p>
                        <ul>
                          <li><em>Geolocation Information.</em>We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</li>
                          <li><em>Mobile Device Data. </em>We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</li>
                          <li><em>Push Notifications. </em>We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
                        </ul>
                        <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
                        <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                        <h3>
                          Information automatically collected
                        </h3>
                        <p><b>In Short:</b> <em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
                        <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                        <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                        <p>The information we collect includes:</p>
                        <ul>
                          <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
                          <li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                          <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                        </ul>
                      </div>

                      <div class="howDoWeProcessYourInformation">
                        <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                        <p>
                          <b>In Short: </b> <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
                        </p>
                        <p>
                          <b>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</b>
                        </p>
                        <ul>
                          <li><b>To deliver and facilitate delivery of services to the user.</b>We may process your information to provide you with the requested service.</li>
                          <li><b>To request feedback.</b>We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                          <li><b>To protect our Services.</b> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                          <li><b>To identify usage trends.</b> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                          <li><b>To determine the effectiveness of our marketing and promotional campaigns.</b>We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
                          <li><b>To save or protect an individual's vital interest.</b>We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
                        </ul>
                      </div>

                      <div class="WhatLegalBassesDoWeRely">
                        <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
                        <p>
                          <b>In Short: </b> <em>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</em>
                        </p>

                        <h3>If you are located in the EU or UK, this section applies to you.</h3>
                        <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
                        <ul>
                          <li><b>Consent.</b> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click <a style="color: blue" @click="scrollTo('controlsForDoNot')">here</a> to learn more.</li>
                          <li><b>Performance of a Contract.</b> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                          <li><b>Legitimate Interests.</b> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                            <ul>
                              <li>Analyse how our services are used so we can improve them to engage and retain users</li>
                              <li>Support our marketing activities</li>
                              <li>Diagnose problems and/or prevent fraudulent activities</li>
                              <li>Understand how our users use our products and services so we can improve user experience</li>
                            </ul>
                          </li>
                          <li><b>Legal Obligations.</b> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                          <li><b>Vital Interests.</b> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                        </ul>
                      </div>

                      <h3>If you are located in Canada, this section applies to you.</h3>
                      <p>
                        We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time. Click
                        <a style="color: blue" @click="scrollTo('controlsForDoNot')">here</a> to learn more.
                      </p>
                      <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
                      <ul>
                        <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                        <li>For investigations and fraud detection and prevention</li>
                        <li>For business transactions provided certain conditions are met</li>
                        <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                        <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                        <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                        <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                        <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                        <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                        <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                        <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                        <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                        <li>If the information is publicly available and is specified by the regulations</li>
                      </ul>

                      <div class="whenAndWithWhomDo">
                        <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                      </div>
                      <p><b>In Short:</b> <em>We may share information in specific situations described in this section and/or with the following categories of third parties.</em></p>
                      <p><b>Vendors, Consultants, and Other Third-Party Service Providers.</b> We may share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:</p>
                      <ul>
                        <li>Data Analytics Services</li>
                        <li>Performance Monitoring Tools</li>
                        <li>Testing Tools</li>
                        <li>Data Storage Service Providers</li>
                        <li>Cloud Computing Services</li>
                        <li>Communication & Collaboration Tools</li>
                        <li>Sales & Marketing Tools</li>
                      </ul>
                      <p>
                        We also may need to share your personal information in the following situations:
                      </p>
                      <ul>
                        <li><b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                        <li><b>When we use Google Maps Platform APIs. </b>We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). To find out more about Google’s Privacy Notice, please refer to this <a style="color: blue" href="https://policies.google.com/privacy" target="_blank">link</a>. We obtain and store on your device ('cache') your location for six (6) months. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.</li>
                        <li><b>Affiliates.</b>We may share your information with our affiliates, in which case we will require those affiliates to honour this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                        <li><b>Business Partners.</b>We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                      </ul>

                      <div class="doWeUseCookies">
                        <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                      </div>
                      <p>
                        <b>In Short:</b>
                        <em>We may use cookies and other tracking technologies to collect and store your information.</em>
                      </p>
                      <p>
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                      </p>

                      <div class="howLongDoWeKeep">
                        <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                      </div>
                      <p>
                        <b>In Short:</b>
                        <em>We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</em>
                      </p>
                      <p>
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
                      </p>
                      <p>
                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                      </p>

                      <div class="howDoWeKeepYourInformation">
                        <h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                      </div>
                      <p>
                        <b>In Short:</b>
                        <em>We aim to protect your personal information through a system of organisational and technical security measures.</em>
                      </p>
                      <p>
                        We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                      </p>

                      <div class="whatAreYourPrivacy">
                        <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                      </div>
                      <p>
                        <b>In Short:</b>
                        <em>In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em>
                      </p>
                      <p>
                        In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section
                        <a style="color: blue" @click="scrollTo('howCanYouReview')">'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' </a>below.
                      </p>
                      <p>
                        We will consider and act upon any request in accordance with applicable data protection laws.
                      </p>
                      <p>
                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:
                        <a style="color: blue" href="https://ec.europa.eu/newsroom/article29/items/612080" target="_blank">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</a>
                      </p>
                      <p>
                        If you are located in Switzerland, the contact details for the data protection authorities are available here:
                        <a style="color: blue" href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank"> https://www.edoeb.admin.ch/edoeb/en/home.html.</a>
                      </p>
                      <p>
                        <b>Withdrawing your consent:</b> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section
                        <a style="color: blue" @click="scrollTo('howCanYouReview')"> 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' </a>below.
                      </p>
                      <p>
                        However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                      </p>
                      <p>
                        <b>Cookies and similar technologies:</b> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit
                        <a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" style="color: blue" >http://www.aboutads.info/choices/.</a>
                      </p>
                      <p>
                        If you have questions or comments about your privacy rights, you may email us at privacy@flamingotracker.com.
                      </p>

                      <div class="controlsForDoNot"><h2>
                        9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                      </div>
                      <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

                      <div class="body__title doCaliforniaResidents">
                        <h2>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
                      </div>
                      <p>
                        <b>In Short:</b>
                        <em>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em>
                      </p>
                      <p>
                        California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                      </p>
                      <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>
                      
                      <h3>
                        CCPA Privacy Notice
                      </h3>
                      <p>The California Code of Regulations defines a 'resident' as:</p>
                      <p>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</p>
                      <p>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</p>
                      <p>All other individuals are defined as 'non-residents'.</p>
                      <p>If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>
                      
                      <h3>What categories of personal information do we collect?</h3>
                      <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
                      <table style="width: 100%;">
                        <tbody>
                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><span class="body__text-bold"><span class="body__text-bold"><span data-custom-class="body_text"><strong>Category</strong></span></span></span></td>
                          <td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;"><span class="body__text-bold"><span class="body__text-bold"><span data-custom-class="body_text"><strong>Examples</strong></span></span></span></td>
                          <td style="width: 14.9084%; border-right: 1px solid black; border-top: 1px solid black; text-align: center;"><span class="body__text-bold"><span class="body__text-bold"><span data-custom-class="body_text"><strong>Collected</strong></span></span></span></td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">A. Identifiers</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; vertical-align: middle; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div class="body_text body__text-bold" style="line-height: 1.5;">
                              <span class="body_text body__text-bold">YES</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">B. Personal information categories listed in the California Customer Records statute</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text" ><span data-custom-class="body_text">Name, contact information, education, employment, employment history, and financial information</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div style="line-height: 1.5;">
                              <span class="body__text-bold"><span class="body__text-bold"><span data-custom-class="body_text">YES</span></span></span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">C. Protected classification characteristics under California or federal law</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Gender and date of birth</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">NO</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">D. Commercial information</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Transaction information, purchase history, financial details, and payment information</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">NO</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">E. Biometric information</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Fingerprints and voiceprints</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">NO</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">F. Internet or other similar network activity</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">YES</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">G. Geolocation data</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Device location</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">YES</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text" ><span class="body__text"><span data-custom-class="body_text">H. Audio, electronic, visual, thermal, olfactory, or similar information</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">NO</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">I. Professional or employment-related information</span></span></span>
                            </div>
                          </td>
                          <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></span></span>
                            </div>
                          </td>
                          <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">NO</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; width: 33.8274%;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">J. Education Information</span></span></span>
                            </div>
                          </td>
                          <td style="border-right: 1px solid black; border-top: 1px solid black; width: 51.4385%;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Student records and directory information</span></span></span>
                            </div>
                          </td>
                          <td style="text-align: center; border-right: 1px solid black; border-top: 1px solid black; width: 14.9084%;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold">NO</span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="border-width: 1px; border-color: black; border-style: solid; width: 33.8274%;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">K. Inferences drawn from other personal information</span></span></span>
                            </div>
                          </td>
                          <td style="border-bottom: 1px solid black; border-top: 1px solid black; border-right: 1px solid black; width: 51.4385%;">
                            <div style="line-height: 1.5;">
                              <span class="body__text"><span class="body__text"><span data-custom-class="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span>
                            </div>
                          </td>
                          <td style="text-align: center; border-right: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black; width: 14.9084%;">
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                            <div data-custom-class="body_text" style="line-height: 1.5;">
                              <span class="body__text-bold"><span class="body__text-bold"><span data-custom-class="body_text">YES</span></span></span>
                            </div>
                            <div style="line-height: 1.5;">
                              <br>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <p></p>
                      <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or m</p>

                      <ul>
                        <li>Receiving help through our customer support channels;</li>
                        <li>Participation in customer surveys or contests; and</li>
                        <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                      </ul>
                      <p>
                        How do we use and share your personal information?
                      </p>
                      <p>
                        AccuraSoft Ltd. collects and shares your personal information through:
                      </p>
                      <ul>
                        <li>Targeting cookies/Marketing cookies</li>
                        <li>Social media cookies</li>
                        <li>Beacons/Pixels/Tags</li>
                      </ul>
                      <p>
                        More information about our data collection and sharing practices can be found in this privacy notice.
                      </p>
                      
                      <h3>
                        Will your information be shared with anyone else?
                      </h3>
                      <p>
                        We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
                      </p>
                      <p>
                        We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.
                      </p>
                      <p>
                        AccuraSoft Ltd. has not sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. AccuraSoft Ltd. has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
                      </p>
                      <ul>
                        <li>Category A. Identifiers, such as contact details like your real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.</li>
                        <li>Category B. Personal Information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history, and financial information.</li>
                        <li>Category F. Internet or other electronic network activity information, such as browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements.</li>
                        <li>Category G. Geolocation data, such as device location.</li>
                        <li>Category K. Inferences drawn from any of the personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics.
                          The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under
                          <a @click="scrollTo('whenAndWithWhomDo')" style="color: blue">'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'.</a></li>
                      </ul>
                      <h3>Your rights with respect to your personal data</h3>
                      <p><b>Right to request deletion of the data — Request to delete</b></p>
                      <p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>
                      <p><b>Right to be informed — Request to know</b></p>
                      <p>Depending on the circumstances, you have a right to know:</p>
                      <ul>
                        <li>whether we collect and use your personal information;</li>
                        <li>the categories of personal information that we collect;</li>
                        <li>the purposes for which the collected personal information is used;</li>
                        <li>whether we sell your personal information to third parties;</li>
                        <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
                        <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                        <li>the business or commercial purpose for collecting or selling personal information.</li>
                      </ul>
                      <p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>
                      <p><b>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</b></p>
                      <p>We will not discriminate against you if you exercise your privacy rights.</p>
                      <p><b>Verification process</b></p>
                      <p>
                        Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                      </p>
                      <p>
                        We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                      </p>
                      <h3>Other privacy rights</h3>
                      <ul>
                        <li>You may object to the processing of your personal information.</li>
                        <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
                        <li>You can designate an authorised agent to make a request under the CCPA on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with the CCPA.</li>
                        <li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
                      </ul>
                      <p>To exercise these rights, you can contact us by email at ccpa@flamingotracker.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>

                      <div class="doWeMakeUpdates">
                        <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                      </div>
                      <p>
                        <b>In Short:</b> 
                        <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
                      </p>
                      <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

                      <div class="howCanYouContact">
                        <h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                      </div>
                      <p>If you have questions or comments about this notice, you may email us at privacy@flamingotracker.com or by post to:</p>
                      <p>AccuraSoft Ltd.
                      <br>71-75 Shelton Street
                      <br>London WC2H 9JQ
                      <br>United Kingdom</p>

                      <div class="howCanYouReview">
                        <h2>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
                      </div>
                      <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking
                        <nuxt-link style="color: blue" to="/contact-us">here</nuxt-link>
                      </p>
                    </div>

                    <!--
                    <p class="legal-sec__date">LAST UPDATED NOVEMBER 10, 2022</p>
                    <h1 class="legal-sec__title">Privacy Notice</h1>
                    <p class="legal-sec__subtitle">This privacy notice for AccuraSoft Ltd., doing business as JuJu Media (“JuJu Media”, “we”, “us”, or “our”),describes how and why we might collect, store, use, and/or share ( 'process' ) your information when you use our services ('Services') , such as when you:</p>

                    <div class="legal-sec__text-wrapper text-container">
                        <p>This privacy notice for AccuraSoft Ltd., doing business as JuJu Media (“JuJu Media”, “we”, “us”, or “our”),describes how and why we might collect, store, use, and/or share ( 'process' ) your information when you use our services ('Services') , such as when you:</p>
                        <ul>
                            <li>Download and use our mobile application (Flamingo – Travel Days Tracker) , and use of the https://flamingotracker.com website or any other application or website of ours that links to this privacy notice</li>
                            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                        </ul>
                        <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@flamingotracker.com .</p>

                        <h2>Summary of keypoints</h2>
                        <p>This <a href="">summary</a> provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>

                        <p>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with AccuraSoft Ltd. and the Services, the choices you make, and the products and features you use. Click  here to learn more.</p>

                        <p>Do we process any sensitive personal information? We do not process sensitive personal information.</p>

                        <p>How do we process your information?We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.</p>

                        <p>In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Click here to learn more.</p>
                        
                        <p>How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.</p>

                        <p>What are your rights?Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.</p>

                        <p>How do you exercise your rights?The easiest way to exercise your rights is by filling out our data subject request form available here , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                        
                        <p>Want to learn more about what AccuraSoft Ltd. does with any information we collect? Click here to review the notice in full.</p>

                        <h2>What information do we collect?</h2>

                        <p>Personal information you disclose to us
                            In Short: We collect personal information that you provide to us.
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            Personal Information Provided by You.The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>

                        <h3>How can you contact us about this policy?</h3>

                        <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>

                        <ol>
                            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                        </ol>
                    </div>
                    -->
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: "privacyPolicy",
  data() {
    return {
      titles: [
        { text: '1. WHAT INFORMATION DO WE COLLECT?', value: 'whatInformationDoWeCollect'},
        { text: '2. HOW DO WE PROCESS YOUR INFORMATION?', value: 'howDoWeProcessYourInformation'},
        { text: '3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?', value: 'WhatLegalBassesDoWeRely'},
        { text: '4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?', value: 'whenAndWithWhomDo'},
        { text: '5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?', value: 'doWeUseCookies'},
        { text: '6. HOW LONG DO WE KEEP YOUR INFORMATION?', value: 'howLongDoWeKeep'},
        { text: '7. HOW DO WE KEEP YOUR INFORMATION SAFE?', value: 'howDoWeKeepYourInformation'},
        { text: '8. WHAT ARE YOUR PRIVACY RIGHTS?', value: 'whatAreYourPrivacy'},
        { text: '9. CONTROLS FOR DO-NOT-TRACK FEATURES', value: 'controlsForDoNot'},
        { text: '10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?', value: 'doCaliforniaResidents'},
        { text: '11. DO WE MAKE UPDATES TO THIS NOTICE?', value: 'doWeMakeUpdates'},
        { text: '12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?', value: 'howCanYouContact'},
        { text: '13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?', value: 'howCanYouReview'},
      ]
    }
  },
  methods: {
    scrollTo(value) {
      window.scrollTo({
        top: document.querySelector(`.${value}`).offsetTop - 100,
        behavior: 'smooth'
      })
    },
  }
}
</script>