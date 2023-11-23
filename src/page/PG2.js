import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, ScrollView } from 'react-native'
import { COLORS, SIZES } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';

const allQuestions = require("../data/PD2");
let imagem = allQuestions[0].imagem;
let audio = allQuestions[0].audio;

export default function PG2 ({navigation}) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);


  
    useEffect(() => {
        console.log('chamou');
      const loadSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            allQuestions[currentQuestionIndex]?.audio
        );
        setSound(sound);
      };
  
      loadSound();
  
      return () => {
        if (sound) {
          sound.unloadAsync();
        }
      };
    }, [showNextButton]);
  
    const playSound = async () => {
      if (sound) {
        if (isPlaying) {
          await sound.stopAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying);
      }
    };
    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
    
            setScore(score+1)
        }

        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            console.log("entrou" + imagem);
            console.log("entrou" + audio);
            imagem = allQuestions[currentQuestionIndex + 1]?.imagem;
            audio = allQuestions[currentQuestionIndex + 1]?.audio;
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    



    const renderQuestion = () => {
    console.log(imagem);
        return (
            <View style={{
                marginVertical: 0,
            }}>
                 <ScrollView style={ {marginHorizontal: 7,
                marginVertical: -5}}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.black, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '100%',
                }}>
                <Text style={{
                    color: COLORS.black,
                    fontSize: 18,
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>{""}
<TouchableOpacity 
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex',
          backgroundColor:"#fff",
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          height:30,
          width:30, 
          alignSelf: 'center',
          marginTop: 5,}}
          onPress={playSound}>
            <Image
                source={require('../img/som.png')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',}}
              />
      </TouchableOpacity>
</View>

             <Image 
             style={{
             width: '95%',
             height: 250,
             marginTop: 10,
             }}
             source={imagem}></Image>
           
                </ScrollView>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                <ScrollView>

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    height: '32%',
                    flexWrap: 'wrap',  
                }}>
                
                {

                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <View style={{
                            width: '45%',
                            height: 85,
                            margin: 8,
                            }}>
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'20'
                            : option==currentOptionSelected 
                            ? COLORS.error +'20'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'center',
                            marginVertical: 5
                        }}
                        >
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: COLORS.black}}>{option}</Text>
                            
                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                        
                                    </View>
                                    
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}> 
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                        
                                    </View>
                                    
                                ) : null
                            }

                        </TouchableOpacity>
                        </View>
                        
                    ))
                    
                }
                
                </View>
                </ScrollView>
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                
                <TouchableOpacity
                onPress={handleNext}
                style={{
                     width: '100%', 
                     backgroundColor: COLORS.accent, 
                     padding: 20, 
                     borderRadius: 5,
                     
                     
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Próxima</Text>
                </TouchableOpacity>
                
                
                
                
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>

               {/* ProgressBar */}
               {renderProgressBar()}

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>

                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Parabéns!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Retry Quiz</Text>
                           </TouchableOpacity>
                           <TouchableOpacity
                           onPress={() => navigation.navigate("TabRoutes")}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20, marginTop: 10,
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Voltar Para Os Níveis</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Background Image */}

               

           </View>
       </SafeAreaView>
    )
}


