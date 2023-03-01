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
import { MantineProvider, ColorSchemeProvider, ColorScheme, ActionIcon } from '@mantine/core';
import { useState } from 'react';
export default function Home() {
  
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    const dark = colorScheme === 'dark';
  
  return(
    <>
    <Head>
      <title>Welcome to the Chaos Foundry</title>
      <meta name="description" content="The Chaos Foundry is the Techonological and Artistic Hub of the Chaos Gumi." key="metadescription" />
    </Head>
    <div>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme = {{colorScheme: colorScheme}} withGlobalStyles withNormalizeCSS>
      <h1>This is the Sample Home</h1>
      </MantineProvider>
      </ColorSchemeProvider>
      <ActionIcon variant ="outline" color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle darkmode">
        {dark ? '☀️' : '🌙'}
      </ActionIcon>
    </div>
    </>
  )

}