import type { NextPage } from 'next'
import { Box, Button, Typography } from '@mui/joy'

const Spacer = ({ rems }) => <Box sx={{ margin: `${rems}rem` || '4rem' }} />

const Home: NextPage = () => {
  return (
    <Box sx={{ margin: '16px' }}>
        <Typography level="h1">
            Buttons
        </Typography>
        <Spacer rems={1} />
        <Typography level="h3">
            Large
        </Typography>
        <Button variant="solid" size="lg">Solid</Button>
        <Button variant="soft" size="lg">Soft</Button>
        <Button variant="outlined" size="lg">Outlined</Button>
        <Button variant="plain" size="lg">Plain</Button>
        <Spacer rems={1} />
        <Typography level="h3">
            Medium
        </Typography>
        <Button variant="solid" size="md">Solid</Button>
        <Button variant="soft" size="md">Soft</Button>
        <Button variant="outlined" size="md">Outlined</Button>
        <Button variant="plain" size="md">Plain</Button>
        <Spacer rems={1} />
        <Typography level="h3">
            Small
        </Typography>
        <Button variant="solid" size="sm">Solid</Button>
        <Button variant="soft" size="sm">Soft</Button>
        <Button variant="outlined" size="sm">Outlined</Button>
        <Button variant="plain" size="sm">Plain</Button>
        
        <Spacer rems={4} />
        
        <Typography level="display1">display1</Typography>
        <Typography level="display2">display2</Typography>
        <Typography level="h1">h1</Typography>
        <Typography level="h2">h2</Typography>
        <Typography level="h3">h3</Typography>
        <Typography level="h4">h4</Typography>
        <Typography level="h5">h5</Typography>
        <Typography level="h6">h6</Typography>
        <Typography level="body1">body1</Typography>
        <Typography level="body2">body2</Typography>
        <Typography level="body3">body3</Typography>
        <Typography level="body4">body4</Typography>
        <Typography level="body5">body5</Typography>
    </Box>
  )
}

export default Home
