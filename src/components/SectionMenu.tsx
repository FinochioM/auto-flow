import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Stack from '@mui/joy/Stack';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ControlCamera from '@mui/icons-material/ControlCamera';
import DesignServices from '@mui/icons-material/DesignServices'
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/joy/Box';
import {useNavigate} from 'react-router-dom';

export default function TabsIconWithText() {
    const navigate = useNavigate();

    const handleTabChange = (_event: any, newValue: any) => {
        switch (newValue) {
            case 0:
                navigate('/inicio')
                break;
            case 1:
                navigate('/studio');
                break;
            case 2:
                navigate('/control');
                break;
            case 3:
                navigate('/sistema');
                break;
            default:
                navigate('/inicio');
                break;
        }
    };

    return (
        <Box sx={{
            flexGrow: 1,
            width: '100%',
            position: 'fixed',
            top: '35px',
            zIndex: 1000,
            bgcolor: `${'var(--colors-index)'}.500`
        }}>
            <Stack spacing={2}>
                <Tabs
                    aria-label="Sections"
                    defaultValue={0}
                    orientation="horizontal"
                    onChange={handleTabChange}
                    sx={{
                    "--Tab-indicatorThickness": "2px",
                    "--Tab-indicatorRadius": "20px"
                }}>
                    <TabList sx={{
                        bgcolor: '#1e1e1e',
                        justifyContent: 'flex-end'
                    }}>
                        <Tab variant="plain" color='neutral'>
                            <ListItemDecorator>
                                <HomeIcon />
                            </ListItemDecorator>
                            Inicio
                        </Tab>
                        <Tab variant="plain">
                            <ListItemDecorator>
                                <DesignServices />
                            </ListItemDecorator>
                            Studio
                        </Tab>
                        <Tab variant="plain">
                            <ListItemDecorator>
                                <ControlCamera />
                            </ListItemDecorator>
                            Control
                        </Tab>
                        <Tab variant="plain">
                            <ListItemDecorator>
                                <SettingsSuggestIcon />
                            </ListItemDecorator>
                            System
                        </Tab>
                    </TabList>
                </Tabs>
            </Stack>
        </Box>
    );
}