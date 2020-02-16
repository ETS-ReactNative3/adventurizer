import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Paper, Box, Grid, TextField, Button } from '@material-ui/core';

import Util from './../../Util.js';
import config from 'react-global-configuration';

import LoadingOverlay from './../modules/LoadingOverlay.js';

class TermsOfUse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content contentFilled">
        <Paper>
          <Box p={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box>
<h2>Adventurizer Terms of Use</h2>
	<p>These terms and conditions outline the rules and regulations for the use of Adventurizer's Website.</p> <br /> 
	<span> Adventurizer</span> is located at:<br /> 
	<address><br />
	</address>
	<p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Adventurizer's website 
	if you do not accept all of the terms and conditions stated on this page.</p>
	<p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
	and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website
	and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
	to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client
	or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake
	the process of our assistance to the Client in the most appropriate manner, whether by formal meetings
	of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect
	of provision of the Company's stated services/products, in accordance with and subject to, prevailing law
	of . Any use of the above terminology or other words in the singular, plural,
	capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p><h2>Cookies</h2>
	<p>We employ the use of cookies. By using Adventurizer's website you consent to the use of cookies 
	in accordance with Adventurizer's privacy policy.</p><p>Most of the modern day interactive web sites
	use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site
	to enable the functionality of this area and ease of use for those people visiting. Some of our 
	affiliate / advertising partners may also use cookies.</p><h2>License</h2>
	<p>Unless otherwise stated, Adventurizer and/or it's licensors own the intellectual property rights for
	all material on Adventurizer. All intellectual property rights are reserved. You may view and/or print
	pages from https://adventurizer.net for your own personal use subject to restrictions set in these terms and conditions.</p>
	<p>You must not:</p>
	<ol>
		<li>Republish material from https://adventurizer.net</li>
		<li>Sell, rent or sub-license material from https://adventurizer.net</li>
		<li>Reproduce, duplicate or copy material from https://adventurizer.net</li>
	</ol>
	<p>Redistribute content from Adventurizer (unless content is specifically made for redistribution).</p>
<h2>Reservation of Rights</h2>
	<p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular
	link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also
	reserve the right to amend these terms and conditions and its linking policy at any time. By continuing
	to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>
<h2>Removal of links from our website</h2>
	<p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact
	us about this. We will consider requests to remove links but will have no obligation to do so or to respond
	directly to you.</p>
	<p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness
	or accuracy; nor do we commit to ensuring that the website remains available or that the material on the
	website is kept up to date.</p>
<h2>Content Liability</h2>
	<p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify
	and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any
	page on your Web site or within any context containing content or materials that may be interpreted as
	libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or
	other violation of, any third party rights.</p>
<h2>Disclaimer</h2>
	<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>
	<ol>
	<li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
	<li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
	<li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
	<li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
	</ol>
	<p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a)
	are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or
	in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort
	(including negligence) and for breach of statutory duty.</p>
	<p>To the extent that the website and the information and services on the website are provided free of charge,
	we will not be liable for any loss or damage of any nature.</p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default TermsOfUse;