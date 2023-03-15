import { useState } from 'react';
import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme, Anchor } from '@mantine/core';

export default function Base() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return( 
        <AppShell
         styles={{
            main: {
                background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.purple[0],
            },
         }}
         navbarOffsetBreakpoint="xs"
         asideOffSetBreakpoint="xs"
         navbar = {
            <Navbar p="md" hiddenBreakpoint={!opened} width={{sm: 200, lg:300}}>
                <Anchor href= '/'> Home</Anchor>
                <Anchor href= '/archive/[postSlug].js'>The Archive </Anchor>
            </Navbar>
         }
         aside = {
            <MediaQuery breakpoint="xs" styles={{ display: 'none'}}>
                <Aside p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300}}>
                    <Text> Testing if this sidebar works</Text>
                </Aside>
            </MediaQuery>
         }
         footer = {
            <Footer height={60} p="xs">
                <Text>Built partially live on <Anchor href="www.twitch.tv/chaosfoundry">Our Twitch Channel</Anchor> 2023</Text>
            </Footer>
         }
         header = {
            <Header height={{ base: 50, md: 70}} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
                    <MediaQuery largerThan="md" styles={{ display: 'none'}}>
                        <Burger opened={opened} onClick={ () => setOpened((o) => !o)}
                        size="sm" color={theme.colors.gray[6]} mr="xl"  />
                    </MediaQuery>
                <Text 
                fz="lg" 
                ta="center">The Chaos Foundry Directive Interface</Text>
                </div>

            </Header>
         }
        >
            <Text> 
                <h1> Does this work? </h1>
                <p>Let's see if this works. </p>

            </Text>
                
        </AppShell>
    );
}