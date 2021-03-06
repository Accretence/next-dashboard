import Link from 'next/link'

import { Text, Grid, useTheme } from '@geist-ui/core'

export default function ({ config }) {
    const theme = useTheme()

    return (
        <>
            <footer>
                <div className="FooterWrapper">
                    <Grid.Container gap={1} my={2}>
                        <Grid
                            px={0}
                            style={{ display: 'block' }}
                            xs={24}
                            md={8}
                            mb={2}
                        >
                            <Text h4 my={0}>
                                {config['meta']['title'].toUpperCase()}
                            </Text>
                            <Text
                                mt={0}
                                small
                                style={{ fontSize: '0.7rem' }}
                                type="secondary"
                            >
                                Copyright &copy; {new Date().getFullYear()}{' '}
                                {config.meta.title}. All rights reserved.
                            </Text>
                        </Grid>
                        <Links config={config} />
                    </Grid.Container>
                </div>
            </footer>
            <style jsx global>
                {`
                    footer {
                        border-top: 1px solid ${theme.palette.border};
                    }
                    .FooterWrapper {
                        align-items: start;
                        width: ${config.theme.width};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        vertical-align: text-top;
                        box-sizing: border-box;
                    }
                    footer a {
                        color: ${theme.palette.accents_4}!important;
                    }
                    footer a:hover {
                        color: ${theme.palette.foreground}!important;
                    }
                `}
            </style>
        </>
    )
}

function Links({ config }) {
    return (
        <>
            <>
                {config &&
                    Object.keys(config['footer']).map((category) => {
                        const element = config['footer'][category]

                        return (
                            <Grid
                                style={{ display: 'block' }}
                                xs={12}
                                md={4}
                                key={Math.random()}
                            >
                                <Text h5 small style={{ fontSize: '1rem' }}>
                                    {category}
                                </Text>
                                {element.map((foo) => (
                                    <Link key={foo.label} href={foo.value}>
                                        <a>
                                            <Text
                                                mr={4}
                                                px={0}
                                                h5
                                                small
                                                style={{ fontSize: '1rem' }}
                                            >
                                                {foo.label}
                                            </Text>
                                        </a>
                                    </Link>
                                ))}
                            </Grid>
                        )
                    })}
            </>
            <style jsx global>
                {`
                    h5 {
                        white-space: nowrap;
                    }
                `}
            </style>
        </>
    )
}
