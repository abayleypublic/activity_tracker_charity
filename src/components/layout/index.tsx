import { Box, useBreakpointValue } from '@chakra-ui/react'
import { base } from './base'
import { lg } from './lg'

export interface LayoutProps {
    challenge?: Challenge
    progress?: Progress
}

const Layout: React.FC<LayoutProps> = (props) => {
    const layout = useBreakpointValue({ base, lg })
    return layout ? layout(props) : null
}

export default Layout
