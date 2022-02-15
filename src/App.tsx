import * as React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme, Image } from '@chakra-ui/react';
import WithSubnavigation from './components/WithSubnavigation';
import BsportWallpaper from './assets/BsportWallpaper.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardPage from './pages/CardPage';
import RandomPage from './pages/RandomPage';
import AboutUsPage from './pages/AboutUsPage';
import ErasmusEuLogo from './assets/Erasmus-EU-logo.svg';
import CTAwithVideoImage from './components/CTAwithVideoImage';
import ExempelComponent from './components/ExempelComponent';
import ExerciseAtWork from './contentPages/Activities/ExerciseAtWork/ExerciseAtWork';
import ExerciseAtHome from './contentPages/Activities/ExerciseAtHome/ExerciseAtHome';
import ExerciseAndNutriionAtWork from './contentPages/Activities/ExerciseAndNutriionAtWork/ExerciseAndNutriionAtWork';
import AerobicAndStrengthExerciseProgram from './contentPages/Activities/AerobicAndStrengthExerciseProgram/AerobicAndStrengthExerciseProgram';
import WeeklyFitnessProgram from './contentPages/Activities/WeeklyFitnessProgram/WeeklyFitnessProgram';
import ContactUsPage from './pages/ContactUsPage';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Box textAlign='center' fontSize='xl'>
          <Image src={BsportWallpaper} alt='' style={{width: '100%'}} />
            <WithSubnavigation />
            <main id="maincontent" >
              <Grid minH='100vh' p={3}>
                <VStack spacing={8}>
                  <Routes>
                    <Route path='/' element={<CTAwithVideoImage/>}/>
                    <Route path='/Disabilities' element={<CardPage category='Disabilities'/>}/>
                    <Route path='/Challenges' element={<CardPage category='Challenges'/>}/>
                    <Route path='/Needs' element={<CardPage category='Needs'/>}/>
                    <Route path='/KeySuccessFactors' element={<CardPage category='Key Success Factors'/>}/>
                    <Route path='/ActivityTitles' element={<CardPage category='Activity Titles'/>}/>
                  
                    <Route path='/Activities' element={<CardPage category='Activities'/>}/>
                    <Route path='/Activities/ExerciseAtWork' element={<ExerciseAtWork/>}/>
                    <Route path='/Activities/ExerciseAtHome' element={<ExerciseAtHome/>}/>
                    <Route path='/Activities/ExerciseAndNutriionAtWork' element={<ExerciseAndNutriionAtWork/>}/>
                    <Route path='/Activities/AerobicAndStrengthExerciseProgram' element={<AerobicAndStrengthExerciseProgram/>}/>
                    <Route path='/Activities/WeeklyFitnessProgram' element={<WeeklyFitnessProgram/>}/>

                    <Route path='/Random' element={<RandomPage/>}/>
                    <Route path='/AboutUs' element={<AboutUsPage/>}/>
                    <Route path='/ContactUs' element={<ContactUsPage/>}/>
                    <Route path='/Example' element={<ExempelComponent/>}/>
                  </Routes>
                  <Image alt='' src={ErasmusEuLogo}/>
                </VStack>
              </Grid>
            </main>
        </Box>
      </ChakraProvider>
    </BrowserRouter >
  );
};

export default App;