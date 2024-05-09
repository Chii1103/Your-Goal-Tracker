
import {createTheme} from '@mui/material/styles'

const theme = createTheme ({
  palette: {
    primary:{
      main: '#1976d2',
    },
    secondary:{
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily:'Arial, sans-serif'
  },
  components:{
    MuiCard:{
      styleOverrides:{
        root:{
          backgroundColor: 'rgba(255,255,255,0.5)',
          
          // padding:'1em',
        },
      },
    },
  },

});

export default theme
