/* Created by Chaos Foundry Tech Team : Site Modernization SOI group
Est. 2020 - Created 02/27/2023
Use via Open Source M.I.T licences: MantineCSS, NextJS, WpGraphql, etc. (more to be added) 
Deliverable Date: TBD - in progress*/

/* Tasks for The Director and Director's Director for stream: 
-App Shell Refactor
-Drawer Design
-Page Design
 */

import Head from 'next/head';
import Base from '../components/appshell';
export default function Home() {
  
  return(
    <>
    <Head>
      <title>Welcome to the Chaos Foundry</title>
      <meta name="description" content="The Chaos Foundry is the Techonological and Artistic Hub of the Chaos Gumi." key="metadescription" />
    </Head>
    <Base />
    </>
  )

}